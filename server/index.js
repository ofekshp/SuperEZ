const express = require('express');
const path = require('path');
const connectDB = require('./db');
const dotenv = require('dotenv');
const cors = require('cors');
const { spawn } = require('child_process');
const iconv = require('iconv-lite');

const usersRouter = require('./routes/users');
const cartRouter = require('./routes/cart');
const compareCartRouter = require('./routes/compareCart');
const priceComparisonRoutes = require('./routes/priceComparison');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// CORS
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

connectDB();

app.use(express.static(path.join(__dirname, 'build')));

console.log('Setting up routes');

app.use('/users', usersRouter);
app.use('/cart', cartRouter);
app.use('/compare', compareCartRouter);

app.post('/api/run-scraper', (req, res) => {
  const { scriptPath, inputData } = req.body;
  const fullScriptPath = path.join(__dirname, '..', scriptPath);

  console.log(`Running scraper: ${fullScriptPath}`);
  console.log(`Input data: ${inputData}`);

  // Encode the input data to UTF-8
  const encodedInputData = iconv.encode(inputData, 'utf8');

  const pythonProcess = spawn('python', [fullScriptPath], {
    stdio: ['pipe', 'pipe', 'pipe']
  });

  let stdout = '';
  let stderr = '';

  pythonProcess.stdin.on('error', (err) => {
    console.error('Error writing to stdin:', err);
  });

  try {
    pythonProcess.stdin.write(encodedInputData);
    pythonProcess.stdin.end();
  } catch (error) {
    console.error('Error writing to Python process:', error);
    return res.status(500).json({ error: 'Failed to start scraper process' });
  }

  pythonProcess.stdout.on('data', (data) => {
    stdout += iconv.decode(data, 'utf8');
    console.log(`Python stdout: ${iconv.decode(data, 'utf8')}`);
  });

  pythonProcess.stderr.on('data', (data) => {
    stderr += iconv.decode(data, 'utf8');
    console.error(`Python stderr: ${iconv.decode(data, 'utf8')}`);
  });

  pythonProcess.on('close', (code) => {
    console.log(`Python process exited with code ${code}`);
    if (code !== 0) {
      console.error(`Scraper script encountered an error. Stderr: ${stderr}`);
      return res.status(500).json({ error: 'Scraper script encountered an error', stderr });
    }
    res.json({ stdout, stderr });
  });

  pythonProcess.on('error', (error) => {
    console.error('Failed to start Python process:', error);
    res.status(500).json({ error: 'Failed to start scraper process' });
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
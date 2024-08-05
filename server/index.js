const express = require('express');
const path = require('path');
const connectDB = require('./db');
const dotenv = require('dotenv');
const cors = require('cors'); 
const usersRouter = require('./routes/users');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// CORS Configuration
const corsOptions = {
  origin: 'http://localhost:3000', // Your React app's URL
  credentials: true, // Allow credentials (cookies)
};

// Use CORS middleware with options
app.use(cors(corsOptions));

// Middleware to parse JSON bodies
app.use(express.json());

connectDB();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Log the route initialization
console.log('Setting up routes');

// Use the users router
app.use('/users', usersRouter);

// All other GET requests not handled before will return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

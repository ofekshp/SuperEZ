const express = require('express');
const path = require('path');
const connectDB = require('./db');
const dotenv = require('dotenv');
const cors = require('cors'); 
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

// Use CORS middleware with options
app.use(cors(corsOptions));

// Middleware to parse JSON bodies
app.use(express.json());

connectDB();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Log the route initialization
console.log('Setting up routes');

app.use('/users', usersRouter);
app.use('/cart', cartRouter);
app.use('/compare', compareCartRouter);
// All other GET requests not handled before will return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
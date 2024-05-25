const express = require('express');
const path = require('path');
var connectDB = require('./db');
var dotenv = require('dotenv');

const app = express();
const PORT = process.env.PORT || 3001;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handle GET requests to the API
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Connect to the database
connectDB();

// All other GET requests not handled before will return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
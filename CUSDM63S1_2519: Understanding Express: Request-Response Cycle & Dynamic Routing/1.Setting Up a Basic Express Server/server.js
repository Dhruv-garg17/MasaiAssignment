// server.js

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/home', (req, res) => {
  res.send('<h1>Welcome to Home Page</h1>');
});

app.get('/aboutus', (req, res) => {
  res.json({ message: 'Welcome to About Us' });
});

app.get('/contactus', (req, res) => {
  res.json({
    email: 'contact@company.com',
    phone: '+123456789',
    address: '123, Main Street, City, Country'
  });
});

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

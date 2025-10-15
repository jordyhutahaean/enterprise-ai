const express = require('express');
const path = require('path');
const app = express();

// Set view engine
app.set('view engine', 'ejs');

// Set views directory path
app.set('views', path.join(__dirname, '..', 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, '..', 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('landing_page');
});

app.get('/sales-agent', (req, res) => {
  res.render('sales_agent');
});

//wablast
app.get('/wablast', (req, res) => {
  res.render('wablast');
});

//login
app.get('/login', (req, res) => {
  res.render('login-page/login');
});

//register
app.get('/register', (req, res) => {
  res.render('login-page/register');
});

//forgot password
app.get('/forgot-password', (req, res) => {
  res.render('login-page/forgot_password');
});

//Reset password
app.get('/reset-password', (req, res) => {
  res.render('login-page/reset_password');
});

//ai chatbot
app.get('/ai-chatbot', (req, res) => {
  res.render('ai-chatbot');
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
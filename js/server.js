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

//ai chatbot
app.get('/ai-chatbot', (req, res) => {
  res.render('ai-chatbot');
});
// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
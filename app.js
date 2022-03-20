const express = require('express');
const app = express();

app.set('views', "./views");
app.set('view engine', 'ejs');

app.use(require('./routes/home'));

module.exports = app;


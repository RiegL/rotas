const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const clientRoute = require('./routes/clientRoute');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use('/client', clientRoute);

module.exports = app;
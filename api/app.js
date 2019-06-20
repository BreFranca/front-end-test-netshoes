const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();

//Rotas
const index = require('./routes/index');
const productRoute = require('./routes/productRoute');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors());
app.options('*', cors());
app.use('/api/', index);
app.use('/api/products', productRoute);

module.exports = app;
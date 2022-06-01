const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const bodyParser = require("body-parser");

const app = express();

app.set('port', process.env.PORT || 4000);

app.use(cors({origin: "*"}));
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/api/products", require('./routes/products.routes'));

module.exports = app;
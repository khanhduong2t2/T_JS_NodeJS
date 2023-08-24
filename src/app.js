const express = require('express');
const { default: helmet } = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const app = express();

// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init routes
app.get('/', (req, res, next) => {
    const strCompress = 'Hello'
    return res.status(200).json({
        message: 'Welcome Project',
        metadata: strCompress.repeat(100000)
    });
});

// handing error

module.exports = app;
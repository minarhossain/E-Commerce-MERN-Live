const express = require('express');
const router = require('./src/routes/api');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');


const app = new express();


const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 300 })
// security Middleware
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(helmet());
app.use(mongoSanitize());
app.use(limiter)


app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1', router);


// Sever Error Middleware
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})


// undefined route
app.use('*', (req, res) => {
    res.status(404).json({
        status: "Fail",
        message: "Route not found",
    })
})

module.exports = app;
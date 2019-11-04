const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log("First Middleware");
    next();
});

app.use('/users', (req, res, next) => {
    console.log("/Users Middleware");
    res.send('<h1>You are in users path</h1>');
});

app.use('/', (req, res, next) => {
    console.log("/ Middleware");
    res.send('<h1>You are in root path</h1>');
});

app.listen(3000);
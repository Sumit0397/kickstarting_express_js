const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log("In the Middleware!");
    next(); // this function allows request to continue to the next middleware in the line.
})

app.use((req,res,next) => {
    console.log('In another Middleware.')
    res.send('<h1>Hello From Express Js.</h1>')
})

app.listen(3000);
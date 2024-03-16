const express = require('express');

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.use("/admin",adminRouter);
app.use(shopRouter)

// for handling 404 page

app.use((req,res,next) => {
    res.status(404).send('<h1>404 Page Not Found 😔</h1>')
})

app.listen(3000);
const express = require('express');
const path = require('path');

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const contactRouter = require("./routes/contact");

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.use("/admin",adminRouter);
app.use(shopRouter);
app.use(contactRouter);
// for handling 404 page

app.use((req,res,next) => {
    res.sendFile(path.join(__dirname,"views","404.html"));
})

app.listen(3000);
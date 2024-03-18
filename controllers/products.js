const path = require('path');

exports.prdocutForm = (req, res , next) => {
    res.sendFile(path.join(__dirname, "../",'views','add-product.html'));
}

exports.getProduct = (req,res,next) => {
    console.log(req.body);
    res.redirect("/");
}
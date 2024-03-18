const path = require('path');

exports.contactPage = (req,res,next) => {
    res.sendFile(path.join(__dirname,"../","views" , "contact.html"));
}

exports.succesPage = (req,res,next) => {
    res.send('form succesfully filled');
}
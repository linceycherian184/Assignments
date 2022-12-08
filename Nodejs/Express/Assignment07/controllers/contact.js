const path = require('path')
exports.contactUs = async(req,res,next)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'contactus.html'));
}

exports.contact =async(req, res, next)=>{
    res.redirect('/success');
}
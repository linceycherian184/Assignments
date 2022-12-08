const path = require('path')
exports.success =async(req, res, next)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'success.html'));
}
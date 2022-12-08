const products = [];
const path = require('path')

exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/shop');
};

exports.getProducts = (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
};

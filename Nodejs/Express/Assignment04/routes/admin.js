const express = require('express')
const router = express.Router()

router.use('/add-product',(req,res,next)=>{
    res.send(`<form action="/product" method="POST">
    <label for="name">Name:</label>
    <input type="text" name="name" placeholder="Item name...">
    <label for="category">Category:</label>
    <input type="text" name="category" placeholder="Category...">
    <label for="price">Price:</label>
    <input type="text" name="price" placeholder="0.00">
    <label for="size">Size:</label>
    <input type="text" name="size" placeholder="0.00">
    <button type="submit">Add Product</button></form>`)
  
})

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports= router;
const http = require('http');
const express = require ('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded())
app.use(express.json())
app.use(express.urlencoded())



app.use('/add-product',(req,res,next)=>{
    res.send(`<form action="/product" method="POST">
    <label for="name">Name:</label>
    <input type="text" name="name" placeholder="Item name...">
    <label for="category">Category:</label>
    <input type="text" name="category" placeholder="Category...">
    <label for="price">Price:</label>
    <input type="text" name="price" placeholder="0.00">
    <button type="submit">Add Product</button></form>`)
  
})

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000)

// const server = http.createServer(app);
// server.listen(3000);

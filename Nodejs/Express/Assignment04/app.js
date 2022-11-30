const http = require('http');
const express = require ('express');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin')
const shopRoute = require('./routes/shop')
const app = express();


app.use(bodyParser.urlencoded())
app.use(express.json())
app.use(express.urlencoded())



app.use(adminRoute)
app.use(shopRoute)
  



app.listen(3000)

// const server = http.createServer(app);
// server.listen(3000);

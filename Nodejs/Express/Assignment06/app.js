const http = require('http');
const express = require ('express');
const path = require('path');

const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin')
const shopRoute = require('./routes/shop')
const contactusRoute = require('./routes/contact')
const successRoute = require('./routes/success')
const app = express();


app.use(bodyParser.urlencoded())
app.use(express.json())
app.use(express.urlencoded())



app.use('/admin',adminRoute)
app.use(shopRoute)
app.use(contactusRoute)
app.use(successRoute)
  

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000)

// const server = http.createServer(app);
// server.listen(3000);

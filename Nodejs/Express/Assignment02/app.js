const http = require('http');
const express = require ('express')
const app = express();


app.use((req,res,next)=>{
    console.log(`In the midddleware`);
    next();
})

app.use((req,res,next)=>{
    console.log(`In another middleware`);
    res.send(`<h1>Hello !!</h1>`)
})

app.listen(3000)

// const server = http.createServer(app);
// server.listen(3000);

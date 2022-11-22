const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  let message = ''
  if(method === 'GET'){
    if (url === '/home') 
      message ='Welcome home'  
    else if(url === '/about')
      message ='Welcome to About Us page'
    else if(url === '/node') 
    message= 'Welcome to my Node Js project'

  }
 
  res.write('<html>');
 
  res.write(`<body><h1>${message}</h1></body>`);
  res.write('</html>');
  return res.end();
  
});

server.listen(3000);

const http = require('http');
const uc = require('upper-case');

http.createServer((req, res) =>{
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc("...Hello boss...!"));
  res.end();
}).listen(1380);
console.log("Running on port 1380...");
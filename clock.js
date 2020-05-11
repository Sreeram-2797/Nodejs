clock source code
const http = require('http');
const dt = require('./clockmodule');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);
console.log("Listening on port 8080...")
const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  const filename = "." + q.pathname;
  console.log(req.url);
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(1337);
console.log("Running on port 1337...");
const http = require("http");
http.createServer((req,res) => {
res.writeHead(200,{'Content-Type':'text/html'})
res.write("<h1 style='color:green'>Marketing</h1>");
res.write("<p style='color:blue'>the action or business of promoting and selling products or services, including market research and advertising.</p>")
res.write("<p style='color:black'>Marketing is the study and management of exchange relationships. It is the business proegardless of who is being marketed to, several factors, including the perspective the marketers will use.</p>")
res.end();
}).listen(1337);
console.log("Listening on port 1337... ");
const http = require("http");
const server = http.createServer((req, res) =>{
res.writeHead(200,{'sree': 'sree'});
res.write("<h2>Thanks for viewing our page</h2>");
res.end();
});

server.listen(8080, () => {
    console.log("Listening on port 8080...");
});

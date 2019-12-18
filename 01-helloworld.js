const http = require("http");
const url = require("url");
const fs = require("fs");

fs.readdir("./", (err, files) => {
    console.log(err);
    console.log(files);
});

const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url == '/'){
        res.writeHead(200, {'sree':'sree'});
        res.write("<h1>Hello World!!!</h1>");
        res.end();
        return;
    }
    if(req.url == '/about.html'){
        res.writeHead(200, {'sree':'sree'});
        res.write("<h1>You are in About page.. here is our story.. </h1>");
        res.end();
        return;
    }
    res.writeHead(404);
    res.write("Not found");
    res.end();

});

server.listen(8080, () => {
    console.log("Listening on port 8080...");
});


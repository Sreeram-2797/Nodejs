const http = require("http");
const fs = require("fs");

fs.rename("./detail.txt", "./details.txt", function(err){
if(err) throws(err);
console.log("File is renamed");
});
const http = require("http");
const fs = require("fs");

fs.appendFile("details.txt", "Qualification:B.tech", function(err){
if(err) throws(err);
console.log("Updated");
});
var fs = require("fs");
var data = fs.readFile('node.txt');

console.log(data.toString());
console.log("Program Ended");
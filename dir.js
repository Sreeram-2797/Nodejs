const fs = require("fs");
fs.readdir("./", (err, files) => {
    console.log(err);
    console.log(files);
});
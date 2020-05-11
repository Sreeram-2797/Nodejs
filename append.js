editing...
const fs = require("fs");
fs.appendFile('newfile1.txt', 'Hello content!', (err) => {
  if (err) throw err;
  console.log('File Saved!');
});

var fs = require('fs');
fs.appendFile('newfile1.txt', ' This is my text.', (err) => {
  if (err) throw err;
  console.log('Updated!');
});
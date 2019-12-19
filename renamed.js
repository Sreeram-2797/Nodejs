var fs = require('fs');
fs.rename('newfile1.txt', 'renamedfile.txt', (err) =>{
  if (err) throw err;
  console.log('File Renamed!');
});
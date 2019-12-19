var fs = require('fs');
fs.open('newfile2.txt', 'w', (err, file) =>{
  if (err) throw err;
  console.log('Saved!');
});

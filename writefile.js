var fs = require('fs');
fs.writeFile('newfile3.txt', 'Hi!',  (err) => {
  if (err) throw err;
  console.log('Saved!');
});

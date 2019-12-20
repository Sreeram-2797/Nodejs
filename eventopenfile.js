const fs = require('fs');
const readStream = fs.createReadStream('./details.txt');
readStream.on('open', function () {
  console.log('The file is open');
});

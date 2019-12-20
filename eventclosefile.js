const fs = require('fs');
const readStream = fs.createReadStream('./details.txt');
readStream.on('close', function (err, files) {
  console.log('The file is closed');
});

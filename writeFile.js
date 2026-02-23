const fs = require('fs');

fs.writeFile('file2.txt', 'Hello World!', function (err) {
  if (err) throw err;
  console.log('File saved!');
});
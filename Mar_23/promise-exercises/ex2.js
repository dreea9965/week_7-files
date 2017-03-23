var fs = require('fs');

var filename = 'file1.txt';
var outputFilename = 'input.txt';

fs.readFile(filename, function(err, buffer) {
  if (err) {
    console.log('Something went wrong.');
    console.log('Because: ', err.message);
    return;
  }
  var content = buffer.toString();
  fs.writeFile(outputFilename, content.toUpperCase(), function(err) {
    if (err) {
      console.log('Something went wrong.');
      console.log('Because: ', err.message);
      return;
    }
  });
});

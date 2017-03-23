var fs = require('fs-promise');

var filename = 'file1.txt';
var outputFilename = 'input.txt';

fs.readFile(filename)
  .then(function(buffer){
    console.log('Contents of file 1', buffer.toString());
    content = buffer.toString();
    return fs.writeFile(outputFilename , content.toUpperCase());
  })
  .then(function(buffer){
      console.log('it worked!');
    })
    .catch(function(err){
      console.log('something went wrong.');
      console.log('Because: ', err.message);
      return;
});

// Write a function splice2 - in purely the promises style - which
//
// reads in two plain text files
// splices the lines of the two files together
// writes the result to an output file
// Example:
//

require('any-promise/register/bluebird');
var request = require('request-promise');
var Promise = require('bluebird');
var fs = require('fs-promise');

var file1 = './file-1.txt';
var file2 = './file-2.txt';
var output = './output.txt';

splice2('file-1.txt', 'file-2.txt', 'output.txt')
  .then(function() {
    console.log('It worked.');
  })
  .catch(function(err) {
    console.log(err.message);
  });

function splice2(file1, file2, output){
  return fs.readFile(file1)

  .then(function(buffer1){
    console.log(buffer1.toString());
    return [buffer1, fs.readFile(file2)];
  })
  .spread(function(buffer1, buffer2){
    return fs.writeFile('output.txt' , buffer1+buffer2);
    var lines = buffer1.toString().split('\n');
    var line2= buffer2.toString().split('\n');
    var doubleLines = lines1.map(function(line1, i) {
      var line2 = lines2[i];
      return line1 + '/n' + line2;
    });
    var result = doubleLines.join('\n');
    return fs.writeFile(output, result);
    )
  });

  .catch(function(err){
    console.log(err.message);
  });
}

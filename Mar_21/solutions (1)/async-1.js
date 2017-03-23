var async = require('async');
var fs = require('fs');

var filenames = [
  '1.txt',
  '2.txt',
  '3.txt',
  '4.txt',
  '5.txt',
  '6.txt',
  '7.txt',
  '8.txt',
  '9.txt',
  '10.txt'
];

function each(filename, callback) {
  fs.writeFile(filename, 'Hello, world!', callback);
}

async.each(filenames, each, function(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked.');
});

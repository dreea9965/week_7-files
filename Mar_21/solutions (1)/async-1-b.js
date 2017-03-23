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

function transform(filename, callback) {
  fs.writeFile(filename, 'Hello, world!', function(err) {
    if (err) {
      callback(err);
      return;
    }
    callback(null, 'Hello, world!');
  });
}

async.map(filenames, transform, function(err, results) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('The results are:', results);
});

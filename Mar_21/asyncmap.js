
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

var fs = require('fs');

var async = require('async');

async.map(filenames, transform, function(err) {
  if (err) {
    callback(err);
    return;
  }
  console.log('got the filename', filenames);
});

function transform(filenames, callback) {
  fs.writeFile(filenames, "hello!", callback);
}


// async.map(filenames, transform, function(err, filenames) {
//   console.log('got all the file names!', filenames);
// });

// function transform(item, callback){
//   callback(null, result);
// }

// function transform(filenames, callback) {
  // fs.write(filenames, function(err){
  //   if (err) {
  //     callback(err);
  //     return;
  //   }
//     callback(null, 'saved file!');
//
//     });
// }

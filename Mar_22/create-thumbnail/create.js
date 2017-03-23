var fs = require('fs');
var gm = require('gm');
var async = require('async');



function createThumbnails(dir, callback){


function resizeImage(filename, callback) {
  gm(filename)
    .resize(240, 240)
    .write(filename, callback);

fs.readdir('./images', function(err, files) {
  if (err) {
    callback(err.message);
    return;
  }
  console.log('before', files);
  files = files.map(function(filename) {
    return './images/' + filename;
  });
  console.log('after', files);
  async.each(files, resizeImage, function(err) {
    if (err) {
      callback(err.message);
      return;
    }
    console.log('It worked.');
  });
});

}

}

exports.createThumbnails = createThumbnails;

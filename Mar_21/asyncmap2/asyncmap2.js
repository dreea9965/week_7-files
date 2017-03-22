// 1. read dir to get the file
// 2. async.each/map  - use either to transform each file.
// 3. in function transform
//   - prepend directory name to the file
//   - gm to resize and write the thumbnail (call the callback)
//



var fs = require('fs');
var gm = require('gm');
var request = require('request');
var async = require('async');


function directory(filenames, callback){
  fs.readdir(filenames, files, function(err) {
    if (err) {
      callback(err);
      return;
    }
});
}

async.filter(filenames, function(err) {
  console.log('got the filename', filenames);

});


async.map(filenames, downloadAndCreateThumbnail, function(err) {
  console.log('got the filename', filenames);

});

function downloadAndCreateThumbnail(imageUrl, filenames, thumbnailFilename, callback){
  request(requestOptions, function(err, response, data) {
    if (err) {
      callback(err);
      return;
    }


    gm(filename)
      .resize(240, 240)
      .write(thumbnailFilename, function(err) {
        if (err) {
          callback(err);
          return;
        }
        console.log('It worked');
      });
  });
}


downloadAndCreateThumbnail(url, filename, thumbnailFilename, function(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked');
});

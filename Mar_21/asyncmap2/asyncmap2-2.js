// You can use fs.readdir function to list all the
// files that exist in a directory. Write a
// program to resize all .png files within a
// directory into 240x240 thumbnails. Hint:
// you can use the downloadAndCreateThumbnail function
// you made.

// 1. read dir to get the file
// 2. async.each/map  - use either to transform each file.
// 3. in function transform
//   - prepend directory name to the file
//   - gm to resize and write the thumbnail (call the callback)
//


var fs = require('fs');
var request = require('request');
var async = require('async');


function resize(filename,  callback){

    gm(filename)
      .resize(240, 240)
      .write(filename, callback);
        console.log('It worked');
      }

fs.readdir('images', function(err, files) {
  if (err) {
     return;
  }
  async.each(files, resizeImage, function(err) {
    if (err) {
      consolde.log(err.message);
      return;
    }
    console.log('It worked!');
  });


});
}



resize(filename, function(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked');
});

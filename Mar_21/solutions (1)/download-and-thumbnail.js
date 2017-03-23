var fs = require('fs');
var gm = require('gm');
var request = require('request');


var aUrl = 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png';
var aFilename = 'js-logo.png';
var aThumbnailFilename = 'js-logo-small.png';
downloadAndThumbnail(aUrl, aFilename, aThumbnailFilename, function(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked.');
});


function downloadAndThumbnail(url, filename, thumbnailFilename, callback) {
  var requestOptions = {
    url: url,
    encoding: null
  };
  request(requestOptions, function(err, response, data) {
    if (err) {
      callback(err);
      return;
    }

    fs.writeFile(filename, data, function(err) {
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
          callback(null);
        });
    });
  });
}

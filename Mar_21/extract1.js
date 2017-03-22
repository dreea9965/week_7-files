

var fs = require('fs');

var request = require('request');
var url = 'https://en.wikipedia.org/wiki/Continuation-passing_style';
var filename = 'output.html';


// Extract a reusable function saveWebPage(url, filename, callback). You should be able to use the function like so:

function saveWebPage(url, filename, callback) {
  request.get(url, function(err, response, html) {
    if (err) {
      callback(err);
      return;
    }
    fs.writeFile(filename, html, function(err) {
      if (err) {
        callback(err);
        return;
      }
      console.log('It worked!');
    });
  });
}

saveWebPage('https://en.wikipedia.org/wiki/Continuation-passing_style', 'output.txt', function(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked.');
});

var fs = require('fs-promise');
var request = require('request-promise');
var Promise = require('bluebird');


var urls = [
  'https://en.wikipedia.org/wiki/Futures_and_promises',
  'https://en.wikipedia.org/wiki/Continuation-passing_style',
  'https://en.wikipedia.org/wiki/JavaScript',
  'https://en.wikipedia.org/wiki/Node.js',
  'https://en.wikipedia.org/wiki/Google_Chrome'
];



  Promise.all(mapped)
    .then(function(arrayHTML){
      var arrayofwriteFilePromises = arrayHTML.map(function(html, idx) {
        return fs.writeFile(idx + '.html', html);
      });
      return Promise.all(arrayofwriteFilePromises);
    })
    .catch(function(err) {
      console.log('Something went wrong because', err.message);
    });

var request = require('request-promise');
var fs = require('fs-promise');

var url = 'https://en.wikipedia.org/wiki/Futures_and_promises';
var filename = 'output.html';

request.get(url)
  .then(function(html){
    console.log('Contents');
    return fs.writeFile(filename, html);
  })
  .then(function(buffer){
    console.log('Contents of filename');
  })
   .catch(function(err){
     console.log('something went wrong. ');
     console.log('because:', err.message);
   });

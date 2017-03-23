var fs = require('fs-promise');

var filename = 'file1.txt';


fs.readFile(filename)
  .then(function(buffer) {
    console.log('Here is the contents.');
    console.log(buffer.toString());
    return;
  })
  .catch(function(err){
    console.log("didn't work:", err.message);

});

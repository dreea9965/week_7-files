var fs = require('fs');
var request = require('request');
var filename = './robots.txt';

function robot(filename, callback){
  // request.getFile(filename, function(err){
  //   if (err) {
  //     console.log(err-message);
  //     return;
  //   }

  fs.readFile(filename, 'utf8', function(err, buffer){
    if (err){
      callback(err);
      return;
    }
    var contents = buffer.toString();
    // callback(null);
  });
  console.log('hello?');

}

// console.log(robot(filename));

exports.robot = robot;


//
// module.exports = function () {
// 	return fs.readFileSync(path.join(__dirname, 'robots.txt'), 'utf8')
// 		.replace(/\n$/, '').split('\n\n\n\n');
// };

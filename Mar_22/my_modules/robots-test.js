var robots_test = require('./robots');

robots_test.robot(
  './robots.txt', 'utf8', function(err,dara) {
    if (err) {
      console.log(err.message);
      return;
    }
  });

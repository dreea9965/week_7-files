var my_cool_module = require('./my_cool_module');

my_cool_module.saveWebPage(
  'http://css-tricks.com', 'css-tricks.html', function(err) {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log('Yes!');
  });

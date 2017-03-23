var thumbnails = require('./create');

thumbnails.createThumbnails(
  './', function(err) {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log('Yes!');
  });

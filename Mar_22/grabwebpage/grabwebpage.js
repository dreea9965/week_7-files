var request = require('request');

var cheerio = require('cheerio');

var url = 'https//www.npmjs.com/package/chinesepoemhunter';
request.get(url,function(err,response, html){
   var $ = cheerio.load(html);

  var author = $('.last-publisher a span').text();
  var timeLastPublished = $('.last-publisher > span').text().trim();
  var info = {
    author: author,
    timeLastPublished: timeLastPublished
  };
  callback(null,info);
});

}

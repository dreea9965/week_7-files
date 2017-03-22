var cheerio = require('cheerio');
var request = require('request');

request('https://www.npmjs.com/', function(error, response,
html){
  if(!error && response.statusCode == 200){
  var $ = cheerio.load(html);
  $('h2').each(function(i, element){
    var a = $(this).prev();
    var title = a.text();

    console.log(a.text());
  });
}
});

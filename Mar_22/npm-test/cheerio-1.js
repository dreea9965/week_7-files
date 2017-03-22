var cheerio = require('cheerio');
var request = require('request');

request('https://news.ycombinator.com', function(error,response, html){
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('span.comhead').each(function(i, element) {

      // Select the previous element:
      var a = $(this).prev();
      // Get the rank by parsing the element two levels above the "a" element:
      var rank = a.parent().parent().text();

      // parse the link title
      var title = a.text();


      // Parse the href attribute from the 'a' element
      var url = a.attr('href');

      // get the subtext children form the next row in the html table
      var subtext = a.parent().parent().next().children('subtext').children();

      // extract the relevant data from the children

      var points = $(subtext).eq(0).text();
      var username = $(subtext).eq(1).text();
      var comments = $(subtext).eq(2).text();



      console.log(a.text());
    });
  }
});

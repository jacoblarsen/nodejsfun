var jsdom  = require("jsdom"),
    window = jsdom.jsdom().createWindow();  
var http = require('http');
var request = require('request'),
  sys = require('sys');


http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});


  request({ uri:'http://www.kb.dk/da/index.html' }, function (error, response, html) {
	  if (error && response.statusCode !== 200) {
	      console.log('Error when contacting google.com')
	  }

  
  
          jsdom.jQueryify(window, "jquery.js", function() {
                window.jQuery('body').append("<div class='testing'>Hello World, It works!</div>");
	 
   	        //res.end(window.jQuery(".content").text());

                console.log(window.jQuery(".testing").text());

          });


});


//  res.end('Hello Morning\n');



}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');

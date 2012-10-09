var jsdom  = require("jsdom"),
    window = jsdom.jsdom().createWindow(),
    http = require('http'),
    request = require('request'),
    sys = require('sys'),
    fs = require('fs'),
    jquery = fs.readFileSync("jquery-1.6.min.js").toString(),
    async = require('async');

var arguments = process.argv.splice(2);

//var ddd_uri = 'http://ddd.dda.dk/hack4dk/ridderorden_soeg.asp?fornavne=&efternavn='+arguments[0]+'&f%F8deby=&erhverv=';


var jsdom = require('jsdom');

http.createServer(function (req, res, body) {
    res.writeHead(200, {'Content-Type': 'text/xml'});

    var all = "";    
    
    var ddd_uri = 'http://ddd.dda.dk/hack4dk/ridderorden_soeg.asp?fornavne=&f%F8deby=&erhverv=&efternavn=' + getParam(req.url);
    jsdom.env({
        html: ddd_uri,
	scripts: [
	    'http://code.jquery.com/jquery-1.8.2.min.js'
	],
        done: function (err, window) {
	    
	    var $ = window.jQuery;
	    var text = "";
	    $('body').append("<div class='testing'>"+body+"</div>");
	    var site_html = $(".testing").html();
	    all+="<data>";
	    $("table").each(function(data){
		all+="   <event ";
		var name = "";
		var born = "";
		var date = "start='Jan 01 1800 00:00:00 GMT'"
		
		$(this).children('tr').each(function(data){
		    
		    var key1 = replaceAll($(this).children('td').eq(0).text().replace(': ',''),' ',''); 
		    var val1 = replaceAll($(this).children('td').eq(1).text().replace(': ',''),'',''); 
		    var key2 = replaceAll($(this).children('td').eq(2).text().replace(': ',''),' ',''); 
		    var val2 = replaceAll($(this).children('td').eq(3).text().replace(': ',''),'','');
		    
		    
		    // event date
		    if(key2 != ""){ if (key2 === 'Dekoreretden'){   date = parseDate(val2);}   } 
		    if(key1 != ""){ if (key1 === 'Dekoreretden'){    date=parseDate(val1);}    } 
		    
		    // event name
		    if(key2 != ""){ if (key2 === 'Fornavn'){   name += val2; }    } 
		    if(key1 != ""){ if (key1 === 'Fornavn'){    name += val1;	}
		    } 
		    
		    // event name
		    if(key2 != ""){ if (key2 === 'Efternavn'){  name += " " + val2;}   } 
		    if(key1 != ""){ if (key1 === 'Efternavn'){   name += " " + val1;}   }
		    
		    // born
		    if(key2 != ""){ if (endsWith(key2,'dselsdato')){born += " " + val2; }  } 
		    if(key1 != ""){ if (endsWith(key1,'dselsdato')){born += " " + val1; }  } 
		    
		    // event body
		    if(key2 != ""){ if (key2 === 'Kilde'){ text = val2; }   } 
		    if(key1 != ""){ if (key1 === 'Kilde'){ text = val2; }   } 
		    
		});
		all+="title='"+name+"' "; 
		all+=date; 
		all+=">"+text + " , " + name + ", Født: " + born +"</event>";
	    });
	    all+="</data>";
	    res.end(all);
	}
    });
    
}).listen(81, "127.0.0.1");
console.log('Server running at http://127.0.0.1');


function replaceAll(txt, replace, with_this) {
    return txt.replace(new RegExp(replace, 'g'),with_this);
}

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function parseDate(val){
    var year = val;
    var split = val.split(' ');
    for (var i = 0; i< 5 ; i++){
	
	var tmpyear = parseInt(split[i]);
	if (tmpyear){
	    year = tmpyear;
	}			   
    }
    val = year;
    return" start='Jan 01 " + val + " 00:00:00 GMT'";
}

function getParam(url){
    url = url+"";
    return(url.substring(url.indexOf('?')+1, url.length));
}
var jsdom  = require("jsdom"),
    window = jsdom.jsdom().createWindow();
var http = require('http');
var request = require('request'),
    sys = require('sys');

var prefix = "http://www.kb.dk/";

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/xml'});
    jsdom.env({
        html: prefix + req.url.substring(5),
        scripts: [
            'http://code.jquery.com/jquery-1.6.min.js'
        ],
        done: function(errors, window) {
            if(req.url.indexOf('fagopdeling/index.html') > -1){
                res.end(parseAllDisciplins(window.$));
            }if(req.url.indexOf('fagopdeling/Stikord.html') > -1){
                res.end(parseAllSubjects(window.$));
            }else if(req.url.indexOf('fagopdeling') > -1 || req.url.indexOf('materialetyper') > -1)
                res.end(parseSubjects(window.$));
            else
                res.end(parseItem(window.$));
        }
    });
}).listen(1336, "127.0.0.1","xml");
console.log('Server running at http://127.0.0.1:1336/xml/');


function parseAllSubjects($){
    var out = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
    out += '<itemList>';
    out += '<title>Emner</title>';
    $('.articleBody > p > a').each(function(){
        out += '<item>';
        out += '<title>' + $(this).text() + "</title>";
        out += '<title>' + $(this).attr('href') + "</title>";

        out += '</item>';
    });
    out += '</itemList>';
    return out;
}


function parseAllDisciplins($){
    var out = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
    out += '<itemList>';
    out += '<title>Fagområder</title>';
    $('.articleBody > ul > li').each(function(){
        out += '<item>';
        out += '<title>' + $(this).children('a').text() + "</title>";
        out += '<link>' + $(this).children('a').attr('href') + "</link>";
        $(this).find('li > a').each(function(){
            out += '<item>';
            out += '<title>' + $(this).text() + "</title>";
            out += '<link>' + $(this).attr('href') + "</link>";
            out += '</item>';
        });
        out += '</item>';
    });
    out += '</itemList>';
    return out;
}

function parseSubjects($){
    var out = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
    out += '<itemList>';
    out += '<title>' + $('div.articleBody > h1').text().trim() + '</title>';
    out += '<description>' + $('div.articleBody > p').text().trim() + '</description>';


    $('div.teaser.standard01').each(function(){
        out += '<item>';
        out += '<title>' + $(this).find('h1 > a').text().trim() + "</title>";
        out += '<link>' + $(this).find('h1 > a').attr('href') + "</link>";
        out += '<description>' + $(this).find('p').text().trim() + "</description>";
        out += '</item>';
    });
    out += '</itemList>';
    return out;
}



function parseItem($){
    var out = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
    out += '<item>';
    out += "<title>" + $('.articleBody > h1').text().trim() + "</title>";
    $('table').find('tr').each(function () {
        $(this).children('td:first').each(function(){
            if($(this).attr('colspan') == '2'){
                if($(this).children().first().text().trim() === "Gå til samlingen"){
                    out += "<link>"+$(this).children().first().attr('href')+"</link>";
                } else {
                    out+= "<description><![CDATA[" + $(this).html() + "]]></description>";
                }
            } else {
                var column = $(this).text();
                if(column === 'Institution:'){
                    out+= "<institution>" + $(this).next().text().trim() + "</institution>";
                }
                if(column === 'Materialetyper:'){
                    var myTypes = $(this).next().html().trim().split("<br>");
                    $.each(myTypes, function(i){
                        out+= "<type>" + myTypes[i].replace("&nbsp;","").trim() + "</type>";
                    });
                }
                if(column === 'Fagområder:'){
                    var myTypes = $(this).next().html().trim().split("<br>");
                    $.each(myTypes, function(i){
                        out+= "<subject>" + myTypes[i].replace("&nbsp;","").trim() + "</subject>";
                    });
                }
                if(column === 'Visningsformat:'){
                    out+= "<format>" + $(this).next().text().trim() + "</format>";
                }
                if(column === 'Bevaringsformat:'){
                    out+= "<format>(preservation)" + $(this).next().text().trim() + "</format>";
                }
                if(column === 'Samlingens omfang:'){
                    out+= "<size>" + $(this).next().text().trim() + "</size>";
                }
                if(column === 'Metadata:'){
                    out+= "<metadata>" + $(this).next().text().trim() + "</metadata>";
                }
                if(column === 'Digitaliseringstidspunkt:'){
                    out+= "<date>" + $(this).next().text().trim() + "</date>";
                }
                if(column === 'Rettigheder:'){
                    out+= "<rights>" + $(this).next().text().trim() + "</rights>";
                }
                if(column === 'Adgangsforhold:'){
                    out+= "<access>" + $(this).next().text().trim() + "</access>";
                }
                if(column === 'Kontaktperson:'){
                    out+= "<contact>" + $(this).next().text().trim() + "</contact>";
                }
            }
        });
    });
    out += "</item>";
    return out;
}
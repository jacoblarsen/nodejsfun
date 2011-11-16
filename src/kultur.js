var jsdom  = require("jsdom"),
    window = jsdom.jsdom().createWindow(),
    http = require('http'),
    request = require('request'),
    sys = require('sys'),
    fs = require('fs'),
    jquery = fs.readFileSync("jquery-1.6.min.js").toString(),
    async = require('async');


var _prefix = "http://www.kb.dk";
var _default = "/da/materialer/kulturarv/fagopdeling/Stikord.html";

var da2dc = new Array();
da2dc["Institution"] = "publisher";
da2dc["Materialetyper"] = "type";
da2dc["Fagområder"] = "subject";
da2dc["Samlingens omfang"] = "extent";
da2dc["Visningsformat"] = "format";
da2dc["Bevaringsformat"] = "format";
da2dc["Digitaliseringstidspunkt"] = "created";
da2dc["Rettigheder"] = "rights";
da2dc["Adgangsforhold"] = "accessRights";
da2dc["Kontaktperson"] = "rightsHolder";
da2dc["Metadata"] = "conformsTo";

http.createServer(function (req, res) {
    var init = new Date().getTime();
    var format = "text/html";

    if(req.headers.accept != undefined){
        format = req.headers.accept.split(',')[0]; // text/html or application/(solr+)xml
    }
    if(req.url === "/")
        req.url = _default;
    res.writeHead(200, {'Content-Type': format.replace("solr+","")});
    console.log(_prefix + req.url);
    jsdom.env({
        html: _prefix + req.url,
        src: [
            jquery
        ],
        done: function(errors, window) {

            var start = new Date().getTime();
            // The different tpe of lists
            if(req.url.indexOf('fagopdeling/index.html') > -1){
                res.end(parseAllDisciplins(window.$,format));
            }if(req.url.indexOf('fagopdeling/Stikord.html') > -1){
                res.end(parseAllSubjects(window.$,format));
            }else if(req.url.indexOf('fagopdeling') > -1 || req.url.indexOf('materialetyper') > -1) {
                res.end(parseSubjects(window.$,format));
            } else {// An item
                if(format === "text/html"){
                    async.parallel([
                        function() { res.end(parseItem(req.url, window.$,format)); }, // Show response
                        function() { var addDoc = parseItem(req.url, window.$,"application/solr+xml");// Build Solr document
                        request({
                            url    : 'http://localhost:8983/solr/update?commit=true',
                            method : 'POST',
                            body   : addDoc
                        });}
                    ],console.log("done!"));
                }
            }
            var fetch = start - init;
            var parse = new Date().getTime() - start;
            console.log(fetch + ", " + parse);
        }
    });

}).listen(80, "127.0.0.1");
console.log('Server running at http://127.0.0.1');

function jsonpSuc(){
    console.log("callback from solr");
}

function parseItem(url, $, format){
    var out = getHead($('.articleBody > h1').text().trim(), format);
    out += getHeading($('.articleBody > h1').text().trim(), format);

    $('table').find('tr').each(function () {
        $(this).children('td:first').each(function(){
            if($(this).attr('colspan') == '2'){  // Get link and description
                out += getLinkAndDescription($(this), format);
            } else {
                var column = $(this);
                out += getField($,column, format); // Get everything in the table
            }
        });
    });
    out += getFooter(url, format);
    return out;
}

function getField($,elem, format) {
    switch (format) {
        case "application/xml":
            var val = elem.text().trim().replace(":","");
            var tagName = da2dc[val];
            if(elem.text().trim() === 'Materialetyper:' || elem.text().trim() === 'Fagområder:'){
                var out = "";
                var myTypes = elem.next().html().trim().split("<br>");
                $.each(myTypes, function(i){
                    out+= "<dc:"+tagName+">" + myTypes[i].replace("&nbsp;","").trim() + "</dc:"+tagName+">";
                });
                return out;
            } else {
                return "<dc:"+tagName+">" + elem.next().text().trim() + "</dc:"+tagName+">";
            }
            break;
        case "application/solr+xml":
            var val = elem.text().trim().replace(":","");
            var tagName = da2dc[val];
            if(elem.text().trim() === 'Materialetyper:' || elem.text().trim() === 'Fagområder:'){
                var out = "";
                var myTypes = elem.next().html().trim().split("<br>");
                $.each(myTypes, function(i){
                    out+= "<field name=\""+tagName+"\">" + myTypes[i].replace("&nbsp;","").trim() + "</field>";
                });
                return out;
            } else {
                return "<field name=\""+tagName+"\">" + elem.next().text().trim() + "</field>";
            }
            break;
        default:
            if(elem.text().trim() === 'Materialetyper:' || elem.text().trim() === 'Fagområder:'){
                var out = "";
                var myTypes = elem.next().html().trim().split("<br>");
                $.each(myTypes, function(i){
                    out+= elem.text().trim() + myTypes[i].replace("&nbsp;","").trim() + "<br/>";
                });
                return out;
            } else {
                return elem.text().trim() + elem.next().text().trim() + "<br/>";
            }
            break;
    }
}

// Choose between XML header and HTML5 header
function getHead(title, format){
    switch (format) {
        case "application/xml": return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" +
            "<oai_dc:dc " +
            "       xmlns:oai_dc=\"http://www.openarchives.org/OAI/2.0/oai_dc/\""+
            "       xmlns:dc=\"http://purl.org/dc/elements/1.1/\">";
            break;
        case "application/solr+xml": return "<add><doc>";
            break;
        default:return "<!DOCTYPE html>" +
            "<html><head><title>"+title+"</title>" +
            "<meta name='viewport' content='width=device-width, initial-scale=1'/> " +
            "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />" +
            "<link rel='stylesheet' href='http://code.jquery.com/mobile/1.0rc3/jquery.mobile-1.0rc3.min.css' />" +
            "<script src='http://code.jquery.com/jquery-1.6.4.min.js'></script>" +
            "<script src='http://code.jquery.com/mobile/1.0rc3/jquery.mobile-1.0rc3.min.js'></script></head>";
            break;
    }
}


// Choose between XML header and HTML5 header
function getFooter(url, format){
    switch (format) {
        case "application/xml": return "</oai_dc:dc>";
            break;
        case "application/solr+xml": return "<field name=\"id\">"+url+"</field>" +
            "</doc></add>";
            break;
        default:return "<div data-role='footer' data-theme='b'>" +
            "<a rel='external' href='/da/materialer/kulturarv/fagopdeling/Stikord.html' data-role='button'>Emner</a>" +
            "<a rel='external' href='/da/materialer/kulturarv/fagopdeling/index.html' data-role='button'>Fagområder</a>" +
            "</div></div></body></html>";
            break;
    }
}


// Choose between XML header and HTML5 header
function getHeading(heading, format){
    switch (format) {
        case "application/xml": return "";
            break;
        case "application/solr+xml": return "";
            break;
        default:return "<body><div data-role='page'><div data-role='header' data-theme='b'><h1>"+heading+"</h1></div>";
            break;
    }
}

// Choose between XML header and HTML5 header
function getLinkAndDescription(elem, format){
    switch (format) {
        case "application/xml":
            if(elem.children().first().text().trim() === "Gå til samlingen"){
                return "<dc:identifier>"+elem.children().first().attr('href')+"</dc:identifier>";
            } else {
                return "<dc:description><![CDATA[" + elem.html() + "]]></dc:description>";
            }
            break;
        case "application/solr+xml":
            if(elem.children().first().text().trim() === "Gå til samlingen"){
                return "<field name=\"identifier\">"+elem.children().first().attr('href')+"</field>";
            } else {
                return "<field name=\"description\">" + elem.text().trim() + "</field>";
            }
            break;
        default:
            if(elem.children().first().text().trim() === "Gå til samlingen"){
                return "<h3><a href='"+elem.children().first().attr('href')+"'>Til Samlingen</a></h3>";
            } else {
                return elem.html();
            }
            break;
    }
}

// Boring functions returning lists
function parseAllSubjects($, format){
    var out = getHead("Emner",format)
    out += getHeading("Emner", format);
    out += "<div data-role='content'>";
    out += "<ul data-role='listview' data-filter='true' data-theme='c'>";
    $('.articleBody > p > a').each(function(){
        out += '<li>';
        out += '<a rel="external" href="'+$(this).attr('href')+'">' + $(this).text() + "</a>";
        out += '</li>';
    });
    out += '</ul></div>';
    out += getFooter("", format);
    return out;
}

function parseAllDisciplins($, format){
    var out = getHead("Fagområder",format)
    out += getHeading("Fagområder", format);
    out += "<div data-role='content'>";
    out += "<ul data-role='listview' data-filter='true' data-theme='c'>";
    $('.articleBody > ul > li').each(function(){
        out += '<li>';
        out += '<a rel="external" href="'+$(this).children('a').attr('href')+'">' + $(this).children('a').text() + "</a>";
        //out += '<ul>';
        out += '</li>';
        $(this).find('li > a').each(function(){
            out += '<li>';
            out += '<a rel="external" href="'+$(this).attr('href')+'">' + $(this).text() + "</a>";
            out += '</li>';
        });
        //out += '</ul></li>';
    });
    out += '</ul></div>';
    out += getFooter("", format);
    return out;
}

function parseSubjects($, format){
    var out = getHead($('div.articleBody > h1').text().trim(), format)
    out += getHeading($('div.articleBody > h1').text().trim(), format);
    out += "<div data-role='content'>";
    out += '<p>' + $('div.articleBody > p').text().trim() + '</p>';
    out += "<ul data-role='listview' data-filter='true' data-theme='c'>";
    $('div.teaser.standard01').each(function(){
        out += '<li>';
        out += '<a rel="external" href="'+ $(this).find('h1 > a').attr('href')+'">' + $(this).find('h1 > a').text().trim() + "</a>";
        out += '<p>' + $(this).find('p').text().trim() + "</p>";
        out += '</li>';
    });
    out += '</ul></div>';
    out += getFooter("", format);
    return out;
}
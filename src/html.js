var jsdom  = require("jsdom"),
    window = jsdom.jsdom().createWindow();
var http = require('http');
var request = require('request'),
    sys = require('sys');

var _prefix = "http://www.kb.dk/";
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
    jsdom.env({
        html: _prefix + req.url,
        scripts: [
            'http://code.jquery.com/jquery-1.6.min.js'
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
                res.end(parseItem(req.url, window.$,format)); // Show response
                if(format === "text/html"){
                    var addDoc = parseItem(req.url, window.$,"application/solr+xml")// Build Solr document
                    request({
                        url    : 'http://localhost:8983/solr/update',
                        method : 'POST',
                        body   : addDoc
                    });
                }
            }
            var fetch = start - init;
            var parse = new Date().getTime() - start;
            console.log(fetch + ", " + parse);
        }
    });

}).listen(80, "127.0.0.1");
console.log('Server running at http://127.0.0.1');

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
            "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /></head>";
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
        default:return "</body></html>";
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
        default:return "<body><h1>"+heading+"</h1>";
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
    out += '<body><h1>Emner</h1><ul>';
    $('.articleBody > p > a').each(function(){
        out += '<li>';
        out += '<a href="'+$(this).attr('href')+'">' + $(this).text() + "</a>";
        out += '</li>';
    });
    out += '</ul></body></html>';
    return out;
}

function parseAllDisciplins($, format){
    var out = getHead("Fagområder",format)
    out += '<body><h1>Fagområder</h1><ul>';
    $('.articleBody > ul > li').each(function(){
        out += '<li>';
        out += '<a href="'+$(this).children('a').attr('href')+'">' + $(this).children('a').text() + "</a>";
        out += '<ul>';
        $(this).find('li > a').each(function(){
            out += '<li>';
            out += '<a href="'+$(this).attr('href')+'">' + $(this).text() + "</a>";
            out += '</li>';
        });
        out += '</ul></li>';
    });
    out += '</ul></body></html>';
    return out;
}

function parseSubjects($, format){
    var out = getHead($('div.articleBody > h1').text().trim(), format)
    out += '<body><h1>' + $('div.articleBody > h1').text().trim() + '</h1>';
    out += '<p>' + $('div.articleBody > p').text().trim() + '</p>';
    out += '<ul>';
    $('div.teaser.standard01').each(function(){
        out += '<li>';
        out += '<a href="'+ $(this).find('h1 > a').attr('href')+'">' + $(this).find('h1 > a').text().trim() + "</a>";
        out += '<p>' + $(this).find('p').text().trim() + "</p>";
        out += '</li>';
    });
    out += '</ul></body></html>';
    return out;
}
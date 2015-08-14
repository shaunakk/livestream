fs = require('fs');
http = require('http');
url = require('url');

http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    var query = url.parse(req.url,true).query;
    console.log(query.email)
    if(query.email != "epicshaunak@gmail.com"){
    	return
    }
    var img = fs.readFileSync('./undefined.jpg');
    res.writeHead(200, {
        'Content-Type': 'image/jpeg'
    });
    res.end(img, 'binary');
}).listen(9604, '192.168.1.143');
var request = require("request");
var MjpegConsumer = require("mjpeg-consumer");
var FileOnWrite = require("file-on-write");

var writer = new FileOnWrite({
    path: './',
    ext: '.jpg',
    filename: function(data) {
        return data.time;
    },
});
var consumer = new MjpegConsumer();

request("http://192.168.1.161:9601").pipe(consumer).pipe(writer);
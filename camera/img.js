var MjpegProxy = require('mjpeg-proxy').MjpegProxy;
var express = require('express');
var app = express();

app.get('',

    new MjpegProxy('http://192.168.1.161:9601').proxyRequest

);
app.listen(9604);
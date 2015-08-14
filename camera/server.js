var http = require('http');
var jsonfile = require('jsonfile')
var util = require('util')
    //start
    // http://nodejs.org/api.html#_child_processes
var sys = require('sys')
var exec = require('child_process').exec;
var child;
url = require('url');


go()
var requestArray
var express = require('express');
http.createServer(function(req, res) {
    if (req.method == "POST") {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        req.on('data', function(chunk) {
            console.log("Received body data from: " + req.connection.remoteAddress);
            console.log("Data: " + chunk.toString());
            if (JSON.parse(chunk.toString()).motion) {
                go()
                console.log("go")
            } else {
                stop()
                console.log("stop")
            }
            var file = '/Users/shaunak/livestream/camera/history.json'


            history = {}
            history.date = new Date()
            history.ip = req.connection.remoteAddress
            history.email = JSON.parse(chunk.toString()).email
            history.motion = JSON.parse(chunk.toString()).motion
            console.log(JSON.stringify(history))
            jsonfile.writeFile(file, history, function(err) {
                console.error(err)
            })
            //work()

        });
    } else {
        delete require.cache[require.resolve('./history.json')]
        var myData = require('./history.json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        res.write(JSON.stringify(myData));
        var str;
        req.on('data', function(chunk) {});
        req.on('end', function() {});
    }
    res.end();
}).listen(9602, '192.168.1.143');
console.log("Server Listening")

function go() {
    child = exec("sshpass -praspberry ssh -o 'StrictHostKeyChecking no' pi@192.168.1.161 'sudo service motion start'", function(error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    });
}

function stop() {
    child = exec("sshpass -praspberry ssh -o 'StrictHostKeyChecking no' pi@192.168.1.161 'sudo service motion stop'", function(error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    });
}

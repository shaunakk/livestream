var nodemailer = require("nodemailer");
var http = require('http');
var jsonfile = require('jsonfile')
var util = require('util')
    //start
var data
var file = '/Users/shaunak/livestream/camera/history.json'
jsonfile.readFile(file, function(err, value) {
    var emailBool=value.email
    console.log(emailBool.toString())
    if(emailBool==true){
      email()
    }
    else{
      console.log("Email is not on!")
    }
})

function email() {
    var smtpTransport = nodemailer.createTransport("SMTP", {
        service: "Gmail",
        auth: {
            user: "epicshaunak@gmail.com",
            pass: "isCool1248"
        }
    });
    smtpTransport.sendMail({
        from: "Shaunak Kale", // sender address
        to: "vedavati@gmail.com", // comma separated list of receivers
        subject: "WARNING!", // Subject line
        text: "Motion has been detected!" // plaintext body
    }, function(error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent: " + response.message);
        }
    });
    smtpTransport.sendMail({
        from: "Shaunak Kale", // sender address
        to: "anantkale@gmail.com", // comma separated list of receivers
        subject: "WARNING!", // Subject line
        text: "Motion has been detected!" // plaintext body
    }, function(error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent: " + response.message);
        }
    });
    smtpTransport.sendMail({
        from: "Shaunak Kale", // sender address
        to: "epicshaunak@gmail.com", // comma separated list of receivers
        subject: "WARNING!", // Subject line
        text: "Motion has been detected!" // plaintext body
    }, function(error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent: " + response.message);
        }
    });
}
setInterval(function() {
    process.exit()
}, 10000);
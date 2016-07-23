// server.js

// set up ========================
var express = require('express');
var bodyParser = require('body-parser')
var app = express();                               // create our app w/ express
// var mongoose = require('mongoose');                     // mongoose for mongodb
// var morgan = require('morgan');             // log requests to the console (express4)
// var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
// var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration =================

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/app'));                 // set the static files location /public/img will be /img for users
// app.use(morgan('dev'));                                         // log every request to the console
// app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
// app.use(bodyParser.json());                                     // parse application/json
// app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
// app.use(methodOverride());

// listen (start app with node server.js) ======================================
app.listen(7000);
console.log("App listening on port 7000");

var nodemailer = require('nodemailer');
app.post('/contact', function (req, res) {
    var mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: "hxh1993@gmail.com",
            pass: "hxh8526622"
        }
    })
    // smtpTrans = nodemailer.createTransport('direct', {
    //     debug: true, //this!!!
    // });

    console.log(req.body);
    mailOpts = {
        // from: req.body.name + ' &lt;' + req.body.email + '&gt;',
        to: 'huntriver@hotmail.com',
        subject: 'website contact',
        text: 'From '+req.body.name + '\n<' + req.body.email + '>'+'\n'+req.body.message
    }
    ;
    smtpTrans.sendMail(mailOpts, function (error, info) {
        if (error) {
            res.send('fail');
            return console.log(error)
        }
        else
        {

            res.send('success');
        }
        console.log(info.response);
    })

});


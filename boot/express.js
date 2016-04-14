var config = require("nconf");
var express = require('express');
var passport = require('passport');
var path = require('path');
var bodyParser = require('body-parser');
const templater = require('consolidate');
const session = require('cookie-session');
const cookieParser = require('cookie-parser');


module.exports = function (app) {
    app.engine('hbs', templater.handlebars); //
    app.set('view engine', 'hbs');
    app.set('views',__dirname + '/views');
    app.use(bodyParser.json);
    

    //if behind a reverse proxy such as Varnish or Nginx

    app.use(express.urlencoded());
    app.use(cookieParser("secret"));
    app.use(session({keys:['secret']}));

    app.use(passport.initialize());
    app.use(passport.session());

};

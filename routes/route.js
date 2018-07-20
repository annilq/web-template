var express = require("express");
var router = express.Router(); // get an instance of the express Router
var indexRouter = require('./index');
var staffRouter = require('./staff');
var quaRouter = require('./qualification');
var projectsRouter = require('./projects');
var newsRouter = require('./news');
var hrRouter = require('./hr');
var cultureRouter = require('./culture');
var contactRouter = require('./contact');
var aboutusRouter = require('./aboutus');
function routers(app) {
    app.use('/', indexRouter);
    app.use('/staff', staffRouter);
    app.use('/qualification', quaRouter);
    app.use('/projects', projectsRouter);
    app.use('/news', newsRouter);
    app.use('/hr', hrRouter);
    app.use('/culture', cultureRouter);
    app.use('/contact', contactRouter);
    app.use('/aboutus', aboutusRouter);
    }
module.exports = routers;

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var refreshRouter = require('./routes/refresh');
var starlingRouter = require('./routes/starling');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/force-refresh', refreshRouter);
app.use('/starling', starlingRouter);

module.exports = app;

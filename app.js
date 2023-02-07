var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const flash = require('connect-flash');

var dashboardRouter = require('./app/dashboard/router');
var tutorialRouter = require('./app/tutorial/router');
var tutorial2Router = require('./app/tutorial2/router');
var tutorial3Router = require('./app/tutorial3/router');
var tutorial4Router = require('./app/tutorial4/router');
// var tutorial5Router = require('./app/tutorial5/router');
// var tutorial6Router = require('./app/tutorial6/router');
// var tutorial7Router = require('./app/tutorial7/router');
// var tutorial8Router = require('./app/tutorial8/router');
// var tutorial9Router = require('./app/tutorial9/router');
// var tutorial10Router = require('./app/tutorial10/router');
var usersRouter = require('./app/users/router');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { }
}));
app.use(flash());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/adminlte', express.static(path.join(__dirname, '/node_modules/admin-lte')));

app.use('/', usersRouter);
app.use('/dashboard', dashboardRouter);
app.use('/tutorial', tutorialRouter);
app.use('/tutorial2', tutorial2Router);
app.use('/tutorial3', tutorial3Router);
app.use('/tutorial4', tutorial4Router);
// app.use('/tutorial5', tutorial5Router);
// app.use('/tutorial6', tutorial6Router);
// app.use('/tutorial7', tutorial7Router);
// app.use('/tutorial8', tutorial8Router);
// app.use('/tutorial9', tutorial9Router);
// app.use('/tutorial10', tutorial10Router);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

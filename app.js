var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');

var hbs = require('hbs');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// helpers setup
require('./app_server/views/helpers/hbsh.js');

// partials setup
carousel = require('./app_server/views/partials/carousel.hbs');
hbs.registerPartial('carousel', carousel);

carousel_featured = require('./app_server/views/partials/carousel_featured.hbs');
hbs.registerPartial('carousel_featured', carousel_featured);

carousel_getstarted = require('./app_server/views/partials/carousel_getstarted.hbs');
hbs.registerPartial('carousel_getstarted', carousel_getstarted);

// navbar partial setter
function set_navbar_partial(user_status) {
  var navbar;

  //check if user is logged-in
  if (user_status) {
    navbar = require('./app_server/views/partials/navbar_user.hbs');
  } else {
    navbar = require('./app_server/views/partials/navbar_guest.hbs');
  }

  hbs.registerPartial('navbar', navbar);
}

//pass true if user is logged-in, false if it's a guest
set_navbar_partial(true);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

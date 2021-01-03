require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var swaggerJsdoc = require('swagger-jsdoc');
var swaggerUi = require('swagger-ui-express');

var swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "stbree",
      version: "1.0.0",
      description: "stbree REST API"
    },
    license: {
      name: "GNU LGPLv3",
      url: "https://choosealicense.com/licenses/lgpl-3.0"
    },
    contact: {
      name: "Skupina-27",
      url: "#",
      email: "#"
    },
    servers: [
      { url: "http://localhost:3000/api" },
      { url: "mongodb://mongo-db/stbree" },
      { url: "https://stbree.herokuapp.com/api" }
    ]
  },
  apis: [
    "./app_api/models/instructions.js",
    "./app_api/models/jobs.js", 
    "./app_api/models/users.js", 
    "./app_api/routes/index.js",
    "./app_api/routes/instructions.js",
    "./app_api/routes/jobs.js",
    "./app_api/routes/users.js",
  ]
};
const swaggerDocument = swaggerJsdoc(swaggerOptions);

//console.log(process.env.MONGODB_CLOUD_URI);
require('./app_api/models/db');
require('./app_api/konfiguracija/passport');

// var indexRouter = require('./app_server/routes/index');
// var usersRouter = require('./app_server/routes/users');
// var instructionsRouter = require('./app_server/routes/instructions');
// var jobsRouter = require('./app_server/routes/jobs');
var indexApi = require('./app_api/routes/index');
var usersApi = require('./app_api/routes/users');
var instructionsApi = require('./app_api/routes/instructions');
var jobsApi = require('./app_api/routes/jobs');

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
var toggleNavbar = require('./public/javascripts/navbar-toggle');

//initial navbar set
toggleNavbar(false);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_public', 'build')));
app.use(passport.initialize());

app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

indexApi.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
indexApi.get("/swagger.json", (req, res) => {
  res.status(200).json(swaggerDocument);
});

// app.use('/', indexRouter);
// app.use('/', usersRouter);
// app.use('/', instructionsRouter);
// app.use('/', jobsRouter);
app.use('/api', indexApi);
app.use('/api', usersApi);
app.use('/api', instructionsApi);
app.use('/api', jobsApi);

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'app_public', 'build', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Obvladovanje napak zaradi avtentikacije
app.use((err, req, res, next) => {
  if (err.name == "UnauthorizedError") {
    res.status(401).json({"sporočilo": err.name + ": " + err.message});
  }
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
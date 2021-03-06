var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();
var port = process.env.PORT || 8190;
var http = require('http');
var databaseService = require('./services/database.service');

databaseService.initialise();
app.use(bodyParser.json({ strict: 'false' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  //add middleware here - api key.

  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use('/api', require('./api/router'));
var httpServer = http.createServer(app);
httpServer.listen(port);
console.log('Server started. Listening on port: ' + port);

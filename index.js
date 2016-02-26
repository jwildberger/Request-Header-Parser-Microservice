var express = require('express');
var app = express();
var user = {};

app.get('/', function (req, res) {
  user['ipaddress'] = req.headers['x-forwarded-for'] || req.connection.remoteAddress; 
  user['language'] = req.headers['accept-language'].split(/\,/)[0];
  user['software'] = req.headers['user-agent'].split(/\(|\)/)[1];

  res.send(JSON.stringify(user));
});

app.use(function(req, res, next) {
  res.status(404).send('Nothing here.');
});

app.listen(process.env.PORT||3000);
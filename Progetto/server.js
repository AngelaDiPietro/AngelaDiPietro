var express = require('express');
var app = express();


app.use(express.static('dist'));

var data = require('./ajaxmustache')

app.get('/articoli', function (req, res) {
  res.send(JSON.stringify(data));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
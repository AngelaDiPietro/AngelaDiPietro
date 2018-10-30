var express = require('express');
var app = express();

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./ajaxmustache.json')
const db = low(adapter);

const bodyParser = require('body-parser');

app.use(express.static('dist'));
app.use(bodyParser.json());


app.post('/articolo', function (req, res) {
  db.get('articoli')
    .push(req.body)
    .write();
  res.send("Articolo Inserito");
});

app.use(express.static('dist'));

var data = require('./ajaxmustache')

app.get('/articoli', function (req, res) {
  res.send(JSON.stringify(data));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
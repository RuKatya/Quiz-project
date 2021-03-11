"use strict";

var express = require('express');

var app = express();

var path = require('path');

var cors = require('cors');

app.use(express["static"](path.join(__dirname, 'client', 'build')));
app.use(cors()); //mongoose

var mongoose = require('mongoose'); //npm i mongoose


var url = 'mongodb+srv://KatyaRu:ZX2hNfwMksy10h4u@cluster0.mfqlq.mongodb.net/test'; //mpngoDB url

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(function () {
  return console.log("DB CONNECT");
}); //connectin to the db

var Question = mongoose.model('Question', {
  //collection
  numAsk: Number,
  ask: String,
  ans1: String,
  ans2: String,
  ans3: String,
  ans4: String,
  correctAnswer: String
}); //Get data from DB

app.get('/api', function _callee(req, res) {
  var questions;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Question.find({}));

        case 3:
          questions = _context.sent;
          res.status(200).send({
            questions: questions
          });
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(400).send({
            error: _context.t0
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
var port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log("Listening on port ".concat(port));
});
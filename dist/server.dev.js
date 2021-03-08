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
  ask: String,
  ans1: String,
  ans2: String,
  ans3: String,
  ans4: String,
  correctAnswer: String
}); //Update data to mongoDB
// const ques = [
//     {ask:'How many months are 28 days in a year?', ans1:'10', ans2:'12', ans3:'1', ans4:'7', correctAnswer:'12'},
//     {ask:'Who sleeps with open eyes?', ans1:'Horses', ans2:'Hares', ans3:'Fish' ,ans4:'Bird', correctAnswer:'Fish'}, 
//     {ask:'An outdoor thermometer reads 15 degrees. How many degrees will two such thermometers show?', ans1:'0', ans2:'30', ans3:'15' ,ans4:'40', correctAnswer:'15'}, 
//     {ask:'What creatures chew on their stomach', ans1:'Chiken', ans2:'Cats', ans3:'Dogs' ,ans4:'Crayfish', correctAnswer:'Crayfish'}, 
//     {ask:'Which clock shows the correct time only twice a day?', ans1:'Hourglass', ans2:'Big Ben', ans3:'Broken clock' ,ans4:'Sundial', correctAnswer:'Broken clock'}, 
//     {ask:'What do astronauts lose during the flight?', ans1:'Consciousness', ans2:'Sleep', ans3:'The weight' ,ans4:'Memory', correctAnswer:'The weight'}, 
//     {ask:'Which of these have been invented before?', ans1:'Clock', ans2:'Gas mask', ans3:'Thermometer' ,ans4:'Telephone', correctAnswer:'Clock'}, 
//     {ask:'How many great-great-grandmothers can a person have?', ans1:'10', ans2:'4', ans3:'8' ,ans4:'6', correctAnswer:'8'}, 
//     {ask:'What can go and lie, stand and hang at the same time?', ans1:'Car', ans2:'Ship', ans3:'A train' ,ans4:'Clock', correctAnswer:'Clock'}, 
// ]
// Question.insertMany(ques).then(doc=> {console.log(doc)}).catch (e => {console.log('not saved')})
//Get data from DB

app.get('/api/', function _callee(req, res) {
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
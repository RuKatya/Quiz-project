const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(cors())

//mongoose
const mongoose = require('mongoose'); //npm i mongoose
const url = 'mongodb+srv://KatyaRu:ZX2hNfwMksy10h4u@cluster0.mfqlq.mongodb.net/test'; //mpngoDB url

mongoose.connect(url, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true ,
    useCreateIndex: true
})
.then(()=> console.log("DB CONNECT")); //connectin to the db

const Question = mongoose.model('Question', { //collection
    ask: String, 
    ans1: String,
    ans2: String,
    ans3: String,
    ans4: String,
    correctAnswer: String
});

console.log(Question)

//Update data to mongoDB

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
app.get('/api/', async (req, res) => {
    try {
        const questions = await Question.find({});
        res.status(200).send({ questions })
    } catch (error) {
        res.status(400).send({ error })
    }
})

const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})

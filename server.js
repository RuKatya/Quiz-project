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
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => console.log("DB CONNECT")); //connectin to the db

const Question = mongoose.model('Question', { //collection
    numAsk: Number,
    ask: String,
    ans1: String,
    ans2: String,
    ans3: String,
    ans4: String,
    correctAnswer: String
});

//Get data from DB
app.get('/api', async (req, res) => {
    try {
        const questions = await Question.find({});
        res.status(200).send({ questions })
    } catch (error) {
        res.status(400).send({ error })
    }
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
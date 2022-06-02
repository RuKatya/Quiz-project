const express = require('express');
const app = express();
const mongoose = require('mongoose'); //npm i mongoose
const cors = require('cors');
const port = process.env.PORT || 7894;
app.use(express.static('client/build'));
app.use(cors());

const url = 'mongodb+srv://KaKa:7pl0qohPTblWZF0T@cluster0.mfqlq.mongodb.net/test'; //mpngoDB url

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB CONNECT")
})

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
app.get('/data', async (req, res) => {
    try {
        const questions = await Question.find({});
        res.status(200).send({ questions })
    } catch (error) {
        res.status(400).send({ error })
    }
})


app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
})
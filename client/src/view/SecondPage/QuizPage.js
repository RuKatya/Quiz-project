import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

// import { Link } from "react-router-dom";
// import TotalPage from '../TotalPage/TotalPage';

//CSS
import './dist/QuizPage.css'

function QuizPage() {
    const [getQuestions, setQuestions] = useState(null); //get DB
    const [arrayNum, setArrayNum] = useState(0); //num of array
    const [countCorrectAns, setCounttCorrectAns] = useState(0); //count correct answers
    const [checkFlag, setCheckFlag] = useState(0); //check flag for sure not choose twice the answer
    const [displayNext, setDisplayNext] = useState('block') //display of next button
    const [displayFinish, setDisplayFinish] = useState('none') //display of finish button
    const [showWrong, setShowWrong] = useState('none'); //show wrong 
    const [showCorrect, setShowCorrect] = useState('none'); //show correct
    const [seconds, setSeconds] = useState(5); //timer



    useEffect(() => {
        function change() {
            document.body.style = 'background:linear-gradient(0deg, rgb(233, 253, 47)  0%, rgb(47, 243, 80) 100%) no-repeat fixed;'
        }

        change();
    }, [])

    let questions;

    //DB
    useEffect(() => {
        let data;
        async function fetchData() {

            await fetch(`http://localhost:4000/api`)
                .then(res => res.json())
                .then(json => {
                    data = json.questions;
                    setQuestions(data);
                })
                .catch(e => console.log(e))
        }
        fetchData();
    }, [])

    console.log(getQuestions) //Show the data

    //ARRAY NUM
    function counterPlus() {
        setArrayNum(arrayNum + 1) //array num
        setCheckFlag(0) //check flag
        setShowWrong('none') //Dont show wrong
        setShowCorrect('none') //Dont show correct

        if (arrayNum === 20) { //check if the user answer all the question
            setDisplayNext('none') //next button none
            setDisplayFinish('block') //finish button block
        }

        console.log(displayNext, arrayNum)

        console.log('flag', checkFlag)
    }

    function Timer() {
        useEffect(() => {
            if (seconds > 0 && arrayNum < 3) {
                setTimeout(() => setSeconds(seconds - 1), 1000);
            } else if (seconds === 0) {
                setSeconds(5);
                setArrayNum(arrayNum + 1)
            } 
        });

        if (seconds > 0 && arrayNum === 3) {
            setSeconds('stop')
        }

        return (
            <div className="mainInfoObj__timer">
                {seconds}
            </div>
        );
    }

    //CHECK IF CORRECT ANSWER
    function hendleAnswer(answer) {
        let correct = questions[arrayNum].correctAnswer;

        if (checkFlag === 0 && answer === correct) {
            setCounttCorrectAns(countCorrectAns + 1) //count correct answers
            setCheckFlag(1) //chenge the flag to 1 for not choose the answer one more time
            setShowCorrect('block') //if correct show correct

            console.log('da', countCorrectAns)


        } else if (checkFlag === 0) {
            setCheckFlag(1) //chenge the flag to 1 for not choose the answer one more time
            setShowWrong('block') //if wrong show wrong

            console.log('net', checkFlag)
        }
    }

    if (getQuestions) {
        questions = getQuestions;

        return (
            <div>
                <div className='mainInfoObj'>
                    <div className='mainInfoObj__AskAns'>
                        <h1
                            className='mainInfoObj__AskAns--question'
                        >
                            {questions[arrayNum].numAsk}. {questions[arrayNum].ask}
                        </h1>
                        <p
                            className="mainInfoObj__AskAns--wrong"
                            style={{ display: showWrong }}
                        >
                            Wrong!
                             </p>
                        <div className='mainInfoObj__AskAns--answers'>
                            <button
                                onClick={() => hendleAnswer(questions[arrayNum].ans1)}
                                className='mainInfoObj__AskAns--choose'
                            >
                                {questions[arrayNum].ans1}
                            </button>
                            <button
                                onClick={() => hendleAnswer(questions[arrayNum].ans2)}
                                className='mainInfoObj__AskAns--choose'
                            >
                                {questions[arrayNum].ans2}
                            </button>
                            <button
                                onClick={() => hendleAnswer(questions[arrayNum].ans3)}
                                className='mainInfoObj__AskAns--choose'
                            >
                                {questions[arrayNum].ans3}
                            </button>
                            <button
                                onClick={() => hendleAnswer(questions[arrayNum].ans4)}
                                className='mainInfoObj__AskAns--choose'

                            >
                                {questions[arrayNum].ans4}
                            </button>
                        </div>
                        <p
                            className="mainInfoObj__AskAns--correct"
                            style={{ display: showCorrect }}
                        >
                            Correct!
                            </p>
                    </div>
                    <input
                        type="button"
                        value="Next"
                        onClick={counterPlus}
                        className="mainInfoObj__btnNext"
                        style={{ display: displayNext }}
                    />
                </div>

                <Timer />

                <Link
                    to='/total'
                    style={{ display: displayFinish }}
                    className="mainInfoObj__btnFinish"
                >
                    Done!
                </Link>
                {/* <TotalPage countCorrectAns={countCorrectAns} /> */}

            </div>
        )
    }

    return (
        <div>
            {questions}
        </div>
    )
}

export default QuizPage;
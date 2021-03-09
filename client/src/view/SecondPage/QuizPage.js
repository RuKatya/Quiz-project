import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

// import { Link } from "react-router-dom";
// import TotalPage from '../TotalPage/TotalPage';

//CSS
import './dist/QuizPage.css'

function QuizPage() {
    const [getQuestions, setQuestions] = useState(null); //get DB
    const [arrayNum, setArrayNum] = useState(0); //num of array
    const [numOfQuestion, setNumOfQuestion] = useState(1); //num of question
    const [countCorrectAns, setCounttCorrectAns] = useState(0); //count correct answers
    const [checkFlag, setCheckFlag] = useState(0); //check flag for sure not choose twice the answer
    const [background, setBackground] = useState(); //correct answer background
    const [displayNext, setDisplayNext] = useState('block') //display of next button
    const [displayFinish, setDisplayFinish] = useState('none') //display of finish button

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
        
        setArrayNum(arrayNum + 1)
        setNumOfQuestion(numOfQuestion + 1);
        setCheckFlag(0)

        if (arrayNum === 5) { //check if the user answer all the question
            setDisplayNext('none')
            setDisplayFinish('block')
        }

        console.log(displayNext, arrayNum)

        console.log('flag', checkFlag)
    }

    //CHECK IF CORRECT ANSWER
    function hendleAnswer(answer) {
        let correct = questions[arrayNum].correctAnswer;

        if (checkFlag === 0 && answer === correct) {
            setCounttCorrectAns(countCorrectAns + 1)
            setCheckFlag(1)
            return (console.log('da', countCorrectAns)
            )
        } else if (checkFlag === 0) {
            setCheckFlag(1)
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
                            {numOfQuestion}. {questions[arrayNum].ask}
                        </h1>
                        <div className='mainInfoObj__AskAns--answers'>
                            <button
                                onClick={() => hendleAnswer(questions[arrayNum].ans1)}
                                className='mainInfoObj__AskAns--choose'
                                style={{ background: background }}
                            >
                                {questions[arrayNum].ans1}
                            </button>
                            <button
                                onClick={() => hendleAnswer(questions[arrayNum].ans2)}
                                className='mainInfoObj__AskAns--choose'
                                style={{ background: background }}
                            >
                                {questions[arrayNum].ans2}
                            </button>
                            <button
                                onClick={() => hendleAnswer(questions[arrayNum].ans3)}
                                className='mainInfoObj__AskAns--choose'
                                style={{ background: background }}
                            >
                                {questions[arrayNum].ans3}
                            </button>
                            <button
                                onClick={() => hendleAnswer(questions[arrayNum].ans4)}
                                className='mainInfoObj__AskAns--choose'
                                style={{ background: background }}

                            >
                                {questions[arrayNum].ans4}
                            </button>
                        </div>
                    </div>
                    <input
                        type="button"
                        value="Next"
                        onClick={counterPlus}
                        className="mainInfoObj__btnNext"
                        style={{display:displayNext}}
                    />
                </div>
                
                <Link to='/total' style={{display:displayFinish}}>Finish2</Link>
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
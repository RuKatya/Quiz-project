import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

//CSS
import './dist/QuizPage.css'

function QuizPage(props) {
    const [getQuestions, setQuestions] = useState(null); //get DB
    const [arrayNum, setArrayNum] = useState(0); //num of array
    const [checkFlag, setCheckFlag] = useState(0); //check flag for sure not choose twice the answer
    const [displayNext, setDisplayNext] = useState('block') //display of next button
    const [displayFinish, setDisplayFinish] = useState('none') //display of finish button
    const [showWrong, setShowWrong] = useState('none'); //show wrong 
    const [showCorrect, setShowCorrect] = useState('none'); //show correct
const [seconds, setSeconds] = useState(60); //timer

    // const [score, setScore] = useState(0);

    const {score, setScore} = props;

    console.log(score);

    //BODY STYLE
    useEffect(() => {
        function change() {
            document.body.style = 'background:linear-gradient(0deg, rgb(233, 253, 47)  0%, rgb(47, 243, 80) 100%) no-repeat fixed;'
        }
        change();
    }, [])

    let questions;

    //GET DB
    useEffect(() => {
        let data;
        async function fetchData() {

            await fetch(`/api`)
                .then(res => res.json())
                .then(json => {
                    data = json.questions;
                    setQuestions(data);
                })
                .catch(e => console.log(e))
        }
        fetchData();
    }, [])

    //ARRAY NUM
    function counterPlus() {
        setArrayNum(arrayNum + 1)
        setCheckFlag(0)
        setShowWrong('none')
        setShowCorrect('none')

        if (arrayNum === 21) { //check if the user answer all the question
            setDisplayNext('none')
            setDisplayFinish('block')
        }

        console.log(displayNext, arrayNum)

        console.log('flag', checkFlag)
    }

    //TIMER
    function Timer() {
        useEffect(() => {
            if (seconds > 0 && arrayNum < 23) {
                setTimeout(() => setSeconds(seconds - 1), 1000);
            } else if (seconds === 0) {
                setSeconds(0);
                
            }
        });

        let sec = seconds%60;
        if(sec<10){
            sec = '0' + sec
        }
        // if(seconds%60 < 10) {
        //     seconds = '0' + seconds
        // }

        // if (seconds > 0 && arrayNum === 21) {
        //     setSeconds(-1)
        // }

        return (
            <div className="mainInfoObj__timer">
                {Math.floor(seconds / 60)}:{sec}
            </div>
        );
    }

    //CHECK IF CORRECT ANSWER
    function hendleAnswer(answer) {
        let correct = questions[arrayNum].correctAnswer;

        if (checkFlag === 0 && answer === correct) {
            setScore(score + 1)
            setCheckFlag(1) //chenge the flag to 1 for not choose the answer one more time
            setShowCorrect('block')

        } else if (checkFlag === 0) {
            setCheckFlag(1) //chenge the flag to 1 for not choose the answer one more time
            setShowWrong('block')
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
                    className="mainInfoObj__btnFinish" >
                    Done!
                </Link>

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
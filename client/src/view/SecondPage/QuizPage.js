import React, { useEffect, useState } from 'react';

//CSS
import './dist/QuizPage.css'

function QuizPage() {
    const [getQuestions, setQuestions] = useState(null);
    const [questionNum, setQuestionNum] = useState(0);
    let questions;

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

    function counterPlus() {
        if (questionNum === 8) {
            setQuestionNum(0)
        }
        setQuestionNum(questionNum + 1)
    }

    function hendleAnswer(answer) {
        let correct = questions[questionNum].correctAnswer;

        if(answer === correct){
            return(console.log('da'))
        } else (console.log('net'))

        // return console.log(answer, correct)
    }

    if (getQuestions) {
        questions = getQuestions;
        return (
            <div>
                <div className='mainInfoObj'>
                    <div className='mainInfoObj__AskAns'>
                        <h1 className='mainInfoObj__AskAns--question'>
                            {questions[questionNum].ask}
                        </h1>
                        <button onClick={() => hendleAnswer(questions[questionNum].ans1)}>{questions[questionNum].ans1}</button>
                        <button onClick={() => hendleAnswer(questions[questionNum].ans2)}>{questions[questionNum].ans2}</button>
                        <button onClick={() => hendleAnswer(questions[questionNum].ans3)}>{questions[questionNum].ans3}</button>
                        <button onClick={() => hendleAnswer(questions[questionNum].ans4)}>{questions[questionNum].ans4}</button>
                    </div>
                    <input type="button" value="next" onClick={counterPlus} className="mainInfoObj__btnNext"/>
                </div>
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
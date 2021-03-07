import React, { useEffect, useState } from 'react';

function QuizPage() {
    const [getQuestions, setQuestions] = useState(null);


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

    let questions;

    console.log(getQuestions)
    if (getQuestions) {
        questions = getQuestions.map(qst => {
            return (
                <div>
                    <h1>{qst.ask}</h1>
                    <ul>
                        <li>{qst.ans1}</li>
                        <li>{qst.ans2}</li>
                        <li>{qst.ans3}</li>
                        <li>{qst.ans4}</li>
                    </ul>
                </div>
            )
        })
    }


    return (
        <div>
            <div>
                <div>
                    {questions}
                </div>
            </div>
        </div>
    )
}

export default QuizPage;


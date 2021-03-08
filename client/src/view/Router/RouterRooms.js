import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Pages
import HomePage from '../FirstPage/HomePage'
import QuizPage from '../SecondPage/QuizPage'

//CSS
import './dist/RouterRooms.css'

function RouterRooms() {
    return (
        <Router>
            <div>
                <div>
                    <Link to='/' ><img src='img/Trivia.png' alt='Trivia' className='btnHome'/></Link>
                </div>
                <div>
                    {/* <Link to='/quiz' className='btnStart'>Let's start!</Link> */}
                </div>


                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>

                    <Router path='/quiz'>
                        <QuizPage />
                    </Router>
                </Switch>

            </div>
        </Router>
    )

}

export default RouterRooms;
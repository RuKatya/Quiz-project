import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Pages
import HomePage from '../FirstPage/HomePage';
import QuizPage from '../SecondPage/QuizPage';
import TotalPage from '../TotalPage/TotalPage';
import RulesPage from '../SecondPage/RulesPage';

//CSS
import './dist/RouterRooms.css'

function RouterRooms() {
    return (
            <Router>
                <div>
                    <div>
                        <Link to='/' ><img src='img/Trivia.png' alt='Trivia' className='btnHome' /></Link>
                    </div>

                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>

                        <Route path='/rules'>
                            <RulesPage />
                        </Route>

                        <Route path='/quiz'>
                            <QuizPage />
                        </Route>

                        <Route path='/total' >
                            <TotalPage />
                        </Route>
                    </Switch>

                </div>
            </Router>
    )
}

export default RouterRooms;
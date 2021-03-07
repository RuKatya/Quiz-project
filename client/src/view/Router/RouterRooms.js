import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Pages
import HomePage from '../FirstPage/HomePage'
import QuizPage from '../SecondPage/QuizPage/QuizPage'

function RouterRooms() {
    return (

        <Router>
            <div>
                <ul>
                    <li>
                    <Link to='/'>Home page</Link>
                    </li>
                    <li>
                    <Link to='/quiz'>QuizPage</Link>
                    </li>
                </ul>

                <hr/>

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
import React, { useEffect } from 'react';

import { Link } from "react-router-dom";

//CSS
import './dist/HomePage.css'

function HomePage() {

    useEffect(() => {
        function change() {
            document.body.style = 'background: linear-gradient(0deg, rgba(159,40,227,1) 0%, rgba(44,190,232,1) 100%) no-repeat fixed;'
        }

        change();
    }, [])

    return (
        <div>
            <div className='mainInfoObjHome'>
                <div className='mainInfoObjHome__text'>
                    <h1 className='mainInfoObjHome__text--h'>Welcome to quiz</h1>
                    <p className='mainInfoObjHome__text--p'>Think you know everything? <p />
                        <p>Let's see if you can become the next</p>
                        <p className='mainInfoObjHome__text--pTriviaKing'>Trivia King!</p>
                    </p>
                </div>
                <div>
                    <img src='img/iconQuiz.png' alt='no pic' className='mainInfoObjHome__img' />
                </div>
            </div>
            <Link to='/rules' className='btnStart'>Let's start!</Link>


        </div>
    )
}

export default HomePage;
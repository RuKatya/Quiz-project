import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './dist/RulesPage.css'

function RulesPage() {

    useEffect(() => {
        function change() {
            document.body.style = 'background:linear-gradient(0deg, rgba(227,118,40,1) 0%, rgba(91,44,232,1) 100%) no-repeat fixed;'
        }

        change();
    }, [])


    return (
        <div >
            <div className='mainInfoObj'>
                <div className='mainInfoObj__AllText'>
                    <h1 className='mainInfoObj__header'>Notice</h1>
                    <p className='mainInfoObj__parag'>
                        <p>The trivia will consist of 23 questions and</p> <p>you will be given 10 minutes to solve them all.</p>
                    </p>
                    <Link to='/quiz' className='btnGotIt'>Got it</Link>
                </div>
            </div>
        </div>
    )
}

export default RulesPage;
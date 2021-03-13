import React, {useEffect, useState} from 'react';
import { Link} from 'react-router-dom'

import './dist/TotalPage.css'


function TotalPage(props) {
    const {score, setScore}=props;
    
    const [text, setText] = useState('')

    
    useEffect(() => {
        function change() {
            document.body.style = 'background:linear-gradient(0deg, rgba(227,40,40,1) 0%, rgba(189,44,232,1) 100%) no-repeat fixed;'
        }

        change();
    }, [])

    function Total() {

        if(score <= 6){
            setText('Better luck next time')
        } else if( score <= 15) {
            setText('Not bad, maybe you can do better next time')
        } else if ( score <= 20) {
            setText("Great! You're almost there")
        } else if (score <= 23) {
            setText('Congratulations! You are the trivia king')
        }

        console.log(score) //for check

        return (
            <p>
                {text}
            </p>
        )
    }

    function again() {
        setScore(0)
    }

    return (
        <div>
            <div className='mainInfoObjTotal'>
                <div className='mainInfoObjTotal__AllText'>
                    <h1 className='mainInfoObjTotal__header'> You answer right</h1>
                    <p className='mainInfoObjTotal__parag'>
                        <p>{score}/23</p>
                        <Total/>
                    </p>
                </div>
                <Link to='/quiz' className='btnAgain' onClick={again}>Try again!</Link>
                
            </div>
        </div>
    )
}

export default TotalPage;
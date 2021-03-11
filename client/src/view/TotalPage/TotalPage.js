import React, {useEffect, useState} from 'react';
import { Link} from 'react-router-dom'

import './dist/TotalPage.css'


function TotalPage(props) {
    const {countCorrectAns} = props
    console.log(countCorrectAns)


    const [correctAns, setCorrectAns] = useState(22)
    const [text, setText] = useState('Better luck next time')

    
    useEffect(() => {
        function change() {
            document.body.style = 'background:linear-gradient(0deg, rgba(227,40,40,1) 0%, rgba(189,44,232,1) 100%) no-repeat fixed;'
        }

        change();
    }, [])

    function Total({correctAns}) {
        setCorrectAns(countCorrectAns)


        if(correctAns <= 6){
            setText('Better luck next time')
        } else if( correctAns <= 15) {
            setText('Not bad, maybe you can do better next time')
        } else if ( correctAns <= 20) {
            setText("Great! You're almost there")
        } else if (correctAns <= 23) {
            setText('Congratulations! You are the trivia king')
        }

        console.log(correctAns)

        return (
            <p>
                {text}
            </p>
        )
    }

    return (
        <div>
            <div className='mainInfoObj'>
                <div className='mainInfoObj__AllText'>
                    <h1 className='mainInfoObj__header'> You answer right</h1>
                    <p className='mainInfoObj__parag'>
                        <p>{correctAns}/23</p>
                        <Total correctAns={correctAns}/>
                    </p>
                </div>
                <Link to='/quiz' className='btnAgain' >Try again!</Link>
                
            </div>
        </div>
    )
}

export default TotalPage;
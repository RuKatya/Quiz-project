import React from 'react';

function TotalPage(props){

    const {countCorrectAns} = props;
    return (
        <div>
            <h1>HI</h1>
            <h1>{countCorrectAns}</h1>
        </div>
    )
}

export default TotalPage;
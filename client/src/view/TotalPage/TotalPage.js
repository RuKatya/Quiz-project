import React, {useEffect} from 'react';


function TotalPage() {

    useEffect(() => {
        function change() {
            document.body.style = 'background:linear-gradient(0deg, rgba(227,40,40,1) 0%, rgba(189,44,232,1) 100%) no-repeat fixed;'
        }

        change();
    }, [])


    // const { countCorrectAns } = props;
    return (
        <div>
            <h1>HI</h1>
            
        </div>
    )
}

export default TotalPage;
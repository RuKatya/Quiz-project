import { useEffect } from "react";
import { Link } from "react-router-dom";

function App() {
  useEffect(() => {
    function change() {
      const body: any = document.body;
      body.style =
        "background: linear-gradient(0deg, rgba(159,40,227,1) 0%, rgba(44,190,232,1) 100%) no-repeat fixed;";
    }

    change();
  }, []);

  return (
    <div className="mainPage">
      <div className="mainPage__infoWindow mainPage__infoWindow--firstPage">
        <div>
          <h1>Welcome to quiz</h1>
          <p>Think you know everything?</p>
          <p>Let's see if you can become the next</p>
          <p className="mainPage__infoWindow--triviaKing">Trivia King!</p>
          <Link to="/rules" className="nextBtn">
            Let's start!
          </Link>
        </div>
        <div>
          <img src="img/iconQuiz.png" alt="no pic" className="__img" />
        </div>
      </div>
    </div>
  );
}

export default App;

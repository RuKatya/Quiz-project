import { useEffect } from "react";
import { Link } from "react-router-dom";

const Rules = () => {
  useEffect(() => {
    function change() {
      const body: any = document.body;
      body.style =
        "background:linear-gradient(0deg, rgba(227,118,40,1) 0%, rgba(91,44,232,1) 100%) no-repeat fixed;";
    }

    change();
  }, []);

  return (
    <div className="mainPage">
      <div className="mainPage__infoWindow mainPage__infoWindow--rulesPage">
        <h1>Notice</h1>
        <div>
          <p>The trivia will consist of 23 questions and</p>
          <p>you will be given 10 minutes to solve them all.</p>
        </div>
        <Link to="/quiz" className="nextBtn">
          Got it
        </Link>
      </div>
    </div>
  );
};

export default Rules;

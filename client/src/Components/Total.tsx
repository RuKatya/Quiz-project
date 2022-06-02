import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Props {
  score: number;
  setScore: Function;
}

const Total = ({ score, setScore }: Props) => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    function change() {
      const body: any = document.body;
      body.style =
        "background:linear-gradient(0deg, rgba(227,40,40,1) 0%, rgba(189,44,232,1) 100%) no-repeat fixed;";
    }

    change();
  }, []);

  function Total() {
    if (score <= 6) {
      setText("Better luck next time");
    } else if (score <= 15) {
      setText("Not bad, maybe you can do better next time");
    } else if (score <= 20) {
      setText("Great! You're almost there");
    } else if (score <= 23) {
      setText("Congratulations! You are the trivia king");
    }

    console.log(score); //for check

    return <p>{text}</p>;
  }

  function again() {
    setScore(0);
  }
  return (
    <div className="mainPage">
      <div className="mainPage__infoWindow mainPage__infoWindow--totalPage totalPage">
        <h1> You answer right</h1>
        <p>
          <p>{score}/23</p>
          <Total />
        </p>
        <Link
          to="/quiz"
          className="nextBtn totalPage__tryAgain"
          onClick={again}
        >
          Try again!
        </Link>
      </div>
    </div>
  );
};

export default Total;

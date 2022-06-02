import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface QuizIntarface {
  _id: string;
  numAsk: number;
  ask: string;
  ans1: string;
  ans2: string;
  ans3: string;
  ans4: string;
  correctAnswer: string;
}

interface Props {
  score: number;
  setScore: Function;
}
const Quiz = ({ score, setScore }: Props) => {
  const [getQuestions, setQuestions] = useState<QuizIntarface[]>([]); //get DB
  const [arrayNum, setArrayNum] = useState<number>(0); //num of array
  const [checkFlag, setCheckFlag] = useState<number>(0); //check flag for sure not choose twice the answer
  const [displayNext, setDisplayNext] = useState<string>("block"); //display of next button
  const [displayFinish, setDisplayFinish] = useState<string>("none"); //display of finish button
  const [showWrong, setShowWrong] = useState<string>("none"); //show wrong
  const [showCorrect, setShowCorrect] = useState<string>("none"); //show correct
  const [seconds, setSeconds] = useState<number>(600); //timer

  useEffect(() => {
    function change() {
      const body: any = document.body;
      body.style =
        "background:linear-gradient(0deg, rgb(233, 253, 47)  0%, rgb(47, 243, 80) 100%) no-repeat fixed;";
    }

    change();
  }, []);

  //GET DB
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`/data`);

      console.log(data.questions);
      setQuestions(data.questions);
    }
    fetchData();
  }, []);

  //ARRAY NUM
  function counterPlus() {
    setArrayNum(arrayNum + 1);
    setCheckFlag(0);
    setShowWrong("none");
    setShowCorrect("none");

    if (arrayNum === 21) {
      //check if the user answer all the question
      setDisplayNext("none");
      setDisplayFinish("block");
    }

    console.log(displayNext, arrayNum);

    console.log("flag", checkFlag);
  }

  //TIMER
  function Timer() {
    const navigation = useNavigate();

    useEffect(() => {
      if (seconds > 0 && arrayNum < 23) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else if (seconds === 0) {
        setSeconds(0);
        navigation("/total", { replace: true });
      }
    });

    let sec: any = seconds % 60;
    if (sec < 10) {
      sec = "0" + sec;
    }

    return (
      <div className="timer">
        {Math.floor(seconds / 60)}:{sec}
      </div>
    );
  }

  //CHECK IF CORRECT ANSWER
  function hendleAnswer(answer: string) {
    let correct = getQuestions[arrayNum].correctAnswer;

    if (checkFlag === 0 && answer === correct) {
      setScore(score + 1);
      setCheckFlag(1); //chenge the flag to 1 for not choose the answer one more time
      setShowCorrect("block");
    } else if (checkFlag === 0) {
      setCheckFlag(1); //chenge the flag to 1 for not choose the answer one more time
      setShowWrong("block");
    }
  }

  return (
    <div className="mainPage">
      <div className="mainPage__infoWindow mainPage__infoWindow--quizPage quizPage">
        {getQuestions.length > 0 ? (
          <>
            {/* ---------------------------------- */}
            <h2>{getQuestions[arrayNum].ask}</h2> {/* Quiestion */}
            {/* ---------------------------------- */}
            <p
              className="quizPage__wrongAns quizPage__checkAns"
              style={{ display: showWrong }}
            >
              Wrong! {/* If wrong diplayed */}
            </p>
            {/* ---------------------------------- */}
            <div className="quizPage__answers">
              {/* Answers */}
              <button
                onClick={() => hendleAnswer(getQuestions[arrayNum].ans1)}
                className="quizPage__answers--choose"
              >
                {getQuestions[arrayNum].ans1}
              </button>
              <button
                onClick={() => hendleAnswer(getQuestions[arrayNum].ans2)}
                className="quizPage__answers--choose"
              >
                {getQuestions[arrayNum].ans2}
              </button>
              <button
                onClick={() => hendleAnswer(getQuestions[arrayNum].ans3)}
                className="quizPage__answers--choose"
              >
                {getQuestions[arrayNum].ans3}
              </button>
              <button
                onClick={() => hendleAnswer(getQuestions[arrayNum].ans4)}
                className="quizPage__answers--choose"
              >
                {getQuestions[arrayNum].ans4}
              </button>
            </div>
            {/* ---------------------------------- */}
            <p
              className="quizPage__correctAns quizPage__checkAns"
              style={{ display: showCorrect }}
            >
              Correct! {/* If correcr diplayed */}
            </p>
            {/* ---------------------------------- */}
            <Timer /> {/* Timer */}
            {/* ---------------------------------- */}
            <input
              type="button"
              value="Next"
              onClick={counterPlus}
              className="nextBtn quizPage__nexthBtn"
              style={{ display: displayNext }}
            />{" "}
            {/* Next button*/}
            {/* ---------------------------------- */}
            <Link
              to="/total"
              style={{ display: displayFinish }}
              className="nextBtn quizPage__finnishBtn"
            >
              Done!
            </Link>
            {/* Done button */}
            {/* ---------------------------------- */}
          </>
        ) : (
          <div style={{ fontSize: "2rem" }}>Loading</div>
        )}
      </div>
    </div>
  );
};

export default Quiz;

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Components/App";
import Quiz from "./Components/Quiz";
import Rules from "./Components/Rules";
import Total from "./Components/Total";
import Layout from "./Layout";

const Router = () => {
  const [score, setScore] = useState<number>(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="rules" element={<Rules />} />
            <Route
              path="quiz"
              element={<Quiz score={score} setScore={setScore} />}
            />
            <Route
              path="total"
              element={<Total score={score} setScore={setScore} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;

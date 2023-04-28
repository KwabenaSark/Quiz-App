import React, { useState } from "react";
import QuestionsCard from "./components/QuestionsCard";
import { fetchQuizQuestions } from "./API";
//styling
import { GlobalStyle, Wrapper } from "./App.styles";

//types
import { QuestionState, Difficulty } from "./API";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const total_Question = 10;
function App() {
  const [Loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      total_Question,
      Difficulty.Easy
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // user answer
      const answer = e.currentTarget.value;

      //check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // add score if answer is correct
      if (correct) setScore((prev) => prev + 1);

      // save answer in the array for user answer
      const AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers((prev) => [...prev, AnswerObject]);
    }
  };

  const nextQuestions = () => {
    //move to the next question
    const nextQuestions = number + 1;

    if (nextQuestions === total_Question) {
      setGameOver(true);
    } else {
      setNumber(nextQuestions);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Quiz Game</h1>
        {gameOver || userAnswers.length === total_Question ? (
          <button className="start" onClick={startTrivia}>
            Start
          </button>
        ) : null}
        {!gameOver ? <p className="score">Score:{score}</p> : null}
        {Loading && <p>Loading Question....</p>}
        {!Loading && !gameOver && (
          <QuestionsCard
            questionNr={number + 1}
            totalQuestion={total_Question}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !Loading &&
        userAnswers.length === number + 1 &&
        number !== total_Question - 1 ? (
          <button className="next" onClick={nextQuestions}>
            Next Question
          </button>
        ) : null}
      </Wrapper>
    </>
  );
}

export default App;

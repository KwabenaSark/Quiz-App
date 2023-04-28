import { shuffleArray } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string;
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  Easy = "easy",
  Medium = "medium",
  Hard = "hard",
}



export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => {
    const incorrectAnswers = question.incorrect_answers;
    let answers: string[] = [];
    if (Array.isArray(incorrectAnswers)) {
      answers = shuffleArray([...incorrectAnswers, question.correct_answer]);
    }
    return {
      ...question,
      answers,
    };
  });
};

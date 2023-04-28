import React from 'react'
import {Wrapper, ButtonWrapper, Quest} from './QuestionCardStyles'

import { AnswerObject } from "../App";

type Props ={
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer:AnswerObject | undefined;
    questionNr: number;
    totalQuestion:number;
}

const QuestionsCard: React.FC<Props> =({question,answers,callback,userAnswer,questionNr,totalQuestion})=>(
    <Wrapper>
       
        <p className='number'>
            Question : {questionNr} / {totalQuestion}
        </p>
        <Quest>
        <p dangerouslySetInnerHTML={{__html: question}}></p>
        </Quest>
        <div>
{answers.map(answer =>(
  <ButtonWrapper key={answer}
  correct={userAnswer?.correctAnswer ===answer}
  userClicked={userAnswer?.answer=== answer}
  
  >
    <button disabled={userAnswer? true: false}value={answer} onClick={callback}>
        <span dangerouslySetInnerHTML={{__html:answer}}/>
    </button>
  </ButtonWrapper>  
))}
        </div>
    </Wrapper>
)

export default QuestionsCard;
import React from 'react';
import Answers from "./Answers";
import QuestionCount from './QuestionCount';

function Question(props) {

  let answer = false;

  const answerChoiceHandler = (choice) => {
    answer = choice;
  };

  return (
    <div>
        <QuestionCount
        progress={props.progress}
        totalAmountQuestions={props.questions.length}
        isFinished={props.isFinished}
      />
      <h2 className="informationForm">{props.question.question}</h2>
      <Answers question={props.question} answerChoiceHandler={answerChoiceHandler}/>
      <button className="questionBtn"onClick={() => props.selectAnswerHandler(answer)}>Confirm & Continue</button>
      {props.errorMessage ? (<p className="error">Please select an answer!</p>) : null}
    </div>
  );
}

export default Question;

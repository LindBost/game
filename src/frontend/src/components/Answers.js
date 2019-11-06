import React from 'react';

function Answers(props) {

  return (
    <div className="answers">
      <button className="answer" onClick={() => props.answerChoiceHandler("a")}>{props.question.answer_a}</button>
      <button className="answer" onClick={() => props.answerChoiceHandler("b")}>{props.question.answer_b}</button>
      <button className="answer" onClick={() => props.answerChoiceHandler("c")}>{props.question.answer_c}</button>
      <button className="answer" onClick={() => props.answerChoiceHandler("d")}>{props.question.answer_d}</button>
    </div>
  );
}

export default Answers;

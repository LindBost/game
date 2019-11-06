import React from 'react';

function QuestionCount(props) {

  return (
    <div className="questionCount">
      {props.isFinished ? null : (
        <div>
          You are on question {props.progress} of {props.totalAmountQuestions}
        </div>
      )}

    </div>
  )
}

export default QuestionCount;


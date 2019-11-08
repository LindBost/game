import React, {useState} from 'react';
import Form from './Form';

function Result(props) {

    const [subForm, setSubForm] = useState(false);

  const validateAnswer = (question) => {
    const answer = props.answers.find(answer => question.id === answer.questionId);
    return question.correct_answer === answer.answer;
  };

  const toSubmit = (event) => {
      event.preventDefault();
      setSubForm(true);
  }

  const correct = <span className="correct"> - Correct</span>
  const incorrect = <span className="incorrect"> - Incorrect</span>
  
  return (
    <div>
          {!subForm && 
      <div>
      {props.questions.map(
        question => (
          <div className="resultPresentation"key={question.id}>{question.question} {validateAnswer(question) ?  correct : incorrect}</div>)
      )}
      <>
      <button className="restartBtn" onClick={toSubmit}>Want to know more? Hit here!</button>
      <button className="restartBtn" onClick={props.restartGame}>Restart Game</button>
      </>
    </div>
    }
    {subForm &&
        <div>
             <Form 
             restartGame={props.restartGame}
             />
        </div>
        }
    </div>
  );
}

export default Result;

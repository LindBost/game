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
  return (
      <div>
          {!subForm && 
    <div>
      {props.questions.map(
        question => (
          <div key={question.id}>{question.question} {validateAnswer(question) ? "Correct" : "Incorrect"}</div>)
      )}
      
      <>
      <button onClick={toSubmit}>Want to know more? Hit here!</button>
      <button onClick={props.restartGame}>Restart Game</button>
      </>
      
    </div>
    }
    {subForm &&
        <div>
             <Form />
        </div>
        }
    </div>
  );
}

export default Result;

import React, {useState} from 'react';
import Question from "./Question";
import Result from "./Results";

function Quiz(props) {
  const questions = [
    {
      id: 0,
      question: 'How many floors does the Tele2 HQ have?',
      answer_a: '4',
      answer_b: '7',
      answer_c: '11',
      answer_d: '0',
      correct_answer: 'b',
    },
    {
      id: 1,
      question: 'Which is NOT a technology that Tele2 works with?',
      answer_a: 'C#',
      answer_b: 'Java',
      answer_c: 'React',
      answer_d: 'Cobol',
      correct_answer: 'd',
    },
    {
      id: 2,
      question: 'How many people are currently working in the Tele2 HQ',
      answer_a: 'Aprox 100',
      answer_b: 'Aprox 1000',
      answer_c: 'Aprox 300',
      answer_d: 'Aprox 3000',
      correct_answer: 'd',
    },
    {
      id: 3,
      question: 'Which company has Tele2 recently merged with?',
      answer_a: 'Telia',
      answer_b: 'ComHem',
      answer_c: 'Telenor',
      answer_d: 'Viasat',
      correct_answer: 'b',
    },
    {
      id: 4,
      question: 'What are "Learning Lunches" at Tele2?',
      answer_a: 'Once a month Tele2 invites a speaker to teach all the employees something new, during a lunch.',
      answer_b: 'All the employees at Tele2 are forced to learn what a proper, good lunch is before they start.',
      answer_c: 'Once a week the bosses sit their employees down, for a lunch, to teach them something new about Tele2.',
      answer_d: 'At Tele2 we dont believe in lunches - only learning. Therefore we only eat lunch if we´d taught ourselves something new.',
      correct_answer: 'a',
    },
    {
      id: 5,
      question: "How big is Tele2's rooftop?",
      answer_a: 'There is no rooftop',
      answer_b: '40 x 6 (m)',
      answer_c: '100 x 80 (m)',
      answer_d: '10 x 10 (m)',
      correct_answer: 'b',
    },
    {
      id: 6,
      question: "Who was the founder of tele2?",
      answer_a: 'Anders Nilsson',
      answer_b: 'Allison Kirkby',
      answer_c: 'Lars Magnus Ericsson',
      answer_d: 'Jan Stenbeck',
      correct_answer: 'd',
    },
    {
      id: 7,
      question: "How many times a week does a Tele2 employee have cake at the office, on average?",
      answer_a: '3 - 5 times a week',
      answer_b: '0 - 2 times a week',
      answer_c: 'NEVER! We dont believe in suger',
      answer_d: '> 10 times a week',
      correct_answer: 'b',
    },
    {
      id: 8,
      question: "Where is Tele2 HQ located?",
      answer_a: 'Kista',
      answer_b: 'Fridhemsplan',
      answer_c: 'Solna',
      answer_d: 'Riga',
      correct_answer: 'a',
    },
    {
      id: 9,
      question: "What are the values of Tele2?",
      answer_a: 'Blood, Sweat and Tears',
      answer_b: 'Dare, Care, Simplify',
      answer_c: 'Sleep, Eat, Work, Repeat',
      answer_d: 'Fearless, Open, Cost efficient, Reliable, Flexible',
      correct_answer: 'd',
    },
    {
      id: 10,
      question: "What does the 2+1 principle mean at Tele2?",
      answer_a: '2 cakes per person',
      answer_b: 'We hire 2 women for each man, on the departments where gender balance is not reached, in our external recruitments',
      answer_c: 'We belive that 1 efficient person can do the work of 2 people under the right conditions',
      answer_d: 'The common goal is that each customer should own 2 phones from Tele2',
      correct_answer: 'b',
    }
    ];

  const [gameState, setGameState] = useState({
    currentQuestion: questions[0],
    answers: [],
    progress: 1,
    isFinished: false,
    errorMessage: false,
  });
  const selectAnswerHandler = (answer) => {

    if (!answer) {
      setGameState({...gameState, errorMessage: true})
      return;
    }
    const answers = [...gameState.answers, {questionId: gameState.currentQuestion.id, answer: answer}];

    setGameState({
      currentQuestion: questions[++gameState.currentQuestion.id],
      answers: answers,
      progress: ++gameState.progress,
      errorMessage: false
    });
    if (gameState.answers.length === questions.length) {
      setGameState({...gameState, isFinished: true, errorMessage: false})
    }

  };

  const restartGame = () => {
    setGameState({currentQuestion: questions[0], answers: [], progress: 1, isFinished: false});
    props.homePage();
  };

  return (
    <div className="quiz">
      {gameState.isFinished || !gameState.currentQuestion &&
        <div className="results">
        <Result
          answers={gameState.answers}
          questions={questions}
          restartGame={restartGame}/>
        </div>
      }
      {gameState.currentQuestion &&
        <div className="questions">
        <Question
          questions={questions}
          progress={gameState.progress}
          isFinished={gameState.isFinished}
          question={gameState.currentQuestion}
          errorMessage={gameState.errorMessage}
          selectAnswerHandler={selectAnswerHandler}
          />
        </div>
      }
    </div>
  );
}

export default Quiz;

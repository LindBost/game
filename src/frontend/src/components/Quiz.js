import React, {useState} from 'react';
import Question from "./Question";
import QuestionCount from "./QuestionCount";
import Result from "./Results";
import Form from './Form';

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
      answer_c: 'Aprox 200',
      answer_d: 'Aprox 2000',
      correct_answer: 'd',
    },
    {
      id: 3,
      question: 'With what company has Tele2 recently merged?',
      answer_a: 'Telia',
      answer_b: 'ComHem',
      answer_c: 'Telenor',
      answer_d: 'Boxer',
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
    }
    ];

  const [gameState, setGameState] = useState({
    currentQuestion: questions[0],
    answers: [],
    progress: 1,
    isFinished: false,
    errorMessage: false
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
    setGameState({currentQuestion: questions[0], answers: [], progress: 1, isFinished: false})
  };
  return (
    <div className="quiz">
      {gameState.isFinished || !gameState.currentQuestion ? (
        <Result
          answers={gameState.answers}
          questions={questions}
          restartGame={restartGame}/>
      ) : (
        <Question
          questions={questions}
          progress={gameState.progress}
          isFinished={gameState.isFinished}
          question={gameState.currentQuestion}
          errorMessage={gameState.errorMessage}
          selectAnswerHandler={selectAnswerHandler}
        />
      )}
      
    </div>
  );
}

export default Quiz;

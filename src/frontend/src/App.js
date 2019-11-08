import React, {useState, Fragment }from 'react';
import './App.css';
import logo from './Tele2_Logo_White.svg'
import Quiz from "./components/Quiz";
import posed from 'react-pose';
import { linear } from '@popmotion/easing';
import { statement } from '@babel/template';

function App() {

  const Container = posed.p({
    attention: {
      scale: 1.2,
      transition: {
        type: 'spring',
        stiffness: 25,
        damping: 0
      }
    }
  });
  
  const Example = () => (
    <Container className="container" initialPose="none" pose="attention">
      <p className="box">
      GET 2 KNOW TELE2 
      </p>
    </Container>
  );

  const [gameStarted, setGameStarted] = useState(false)

  const startGame = () => {
    setGameStarted(true);
  }

  const homePage = () => {
    setGameStarted(false);
  }
  return (
    <div className="App">
      <div className="headerContainer">
      <img src={logo} alt="“website logo”" className="logo"/>
      {gameStarted &&
      <div>
        <header className="header">GET 2 KNOW TELE2</header>
      </div>
      }
      {!gameStarted &&
      <div>
        <Example className="headerAnimation"/>
      </div>
      }
      </div>
      {gameStarted &&
      <div>
        <Quiz
        homePage={homePage}/>
      </div>
      }
      {!gameStarted &&
      <div className="startGame">
      <button className="startGameBtn" onClick={startGame}>START QUIZ</button>
      </div>
      }
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import logo from './Tele2_Logo_White.svg'
import Quiz from "./components/Quiz";


function App() {

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
        <header className="header">GET 2 KNOW TELE2</header>
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

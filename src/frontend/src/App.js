import React from 'react';
import './App.css';
import logo from './Tele2_Logo_White.svg'
import Quiz from "./components/Quiz";


function App() {

  return (
    <div className="App">
      <div className="headerContainer">
      <img src={logo} alt="“website logo”" className="logo"/>
        <header className="header">GET 2 KNOW TELE2</header>
      </div>
      <Quiz/>
    </div>
  );
}

export default App;

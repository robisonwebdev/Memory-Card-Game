import React, { useState } from 'react';
import Footer from './components/Footer';
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';
import './styles/App.css';

const App = () => {
  const [gameScore, setGameScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardsSelected, setCardsSelected] = useState([]);

  const handleClick = (value) => {
    if (cardsSelected.includes(value)) {
      console.log('Already in array!');
    } else {
      setCardsSelected((currentState) => [...currentState, value]);      
    }
  }

  return (
    <div id='App'>
      <Scoreboard gameScore={gameScore} highScore={highScore} />
      <Gameboard click={handleClick} />
      <Footer address={'https://github.com/robisonwebdev'} name={'David Robison'} />
    </div>
  );
}

export default App;
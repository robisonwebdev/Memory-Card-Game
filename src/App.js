import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';
import './styles/App.css';

const App = () => {
  const [gameScore, setGameScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardsSelected, setCardsSelected] = useState([]);

  function handleClick(value) {
    if (cardsSelected.includes(value)) {
      resetGame();
    } else if (!cardsSelected.includes(value)) {
      setCardsSelected((currentState) => [...currentState, value]);
      setGameScore(gameScore + 1);
      handleHighScore();
    }
  }

  function handleHighScore() {
    if (highScore <= gameScore) {
      setHighScore(highScore + 1);
    }
  }

  function resetGame() {
    setCardsSelected([]);
    setGameScore(0);
  }

  useEffect(() => {
    if (gameScore === 10) {
      resetGame();
    }
  }, [gameScore])

  

  return (
    <div id='App'>
      <Scoreboard gameScore={gameScore} highScore={highScore} />
      <Gameboard click={handleClick} />
      <Footer address={'https://github.com/robisonwebdev'} name={'David Robison'} />
    </div>
  );
}

export default App;
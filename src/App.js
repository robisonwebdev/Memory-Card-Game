import React, { useState } from 'react';
import Footer from './components/Footer';
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';
import './styles/App.css';

const App = () => {
  const [gameScore, setGameScore] = useState();

  return (
    <div id='App'>
      <Scoreboard gameScore={'3'} highScore={'19'} />
      <Gameboard />
      <Footer address={'https://github.com/robisonwebdev'} name={'David Robison'} />
    </div>
  );
}

export default App;
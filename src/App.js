import React, { useState } from 'react';
import Footer from './components/Footer';
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';

const App = () => {
  return (
    <div id='App'>
      <Scoreboard />
      <Gameboard />
      <Footer />
    </div>
  );
}

export default App;
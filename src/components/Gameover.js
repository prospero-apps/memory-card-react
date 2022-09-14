import React from 'react';
import '../styles.css';

const Gameover = ({ onGameOver }) => {
  return (
    <div id="gameover">
      <h1>Game Over</h1>
      <button onClick={onGameOver}>Play Again</button>
    </div>
  )
}

export default Gameover;
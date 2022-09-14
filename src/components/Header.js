import React from 'react';
import '../styles.css';

const Header = ({ score, bestScore }) => {
  return (
    <div id="header">
      <h1>Memory Card Game</h1>
      <p>You score by clicking on images you haven't clicked before.</p>
      <h2>Score: {score} | Best Score: {bestScore}</h2>
    </div>
  )
}

export default Header;
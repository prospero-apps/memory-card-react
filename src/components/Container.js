import React, { useState } from 'react';
import '../styles.css';
import Header from './Header';
import Cards from './Cards';
import Gameover from './Gameover';

const Container = () => {
  const [isGameover, setIsGameover] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const onClickImage = (scoring) => {
    if (scoring) {
      setScore(score + 1);
      if (bestScore <= score) {
        setBestScore(bestScore + 1)
      }
    } else {
      setIsGameover(true);
    }    
  }

  const onGameOver = () => {
    setScore(0);
    setIsGameover(false);
  }

    return (
      <div id="container">
        <Header score={score} bestScore={bestScore}/>
        {isGameover ? (
          <Gameover onGameOver={onGameOver}/>
        ) : (
          <Cards onClickImage={onClickImage}/>  
        )}                    
      </div>
    )
}

export default Container;
import React, { useState } from 'react';
import '../styles.css'

const Card = ({ imageSource, alreadyClicked, onClickImage }) => {
  const [picked, setPicked] = useState(alreadyClicked);

  const handleClick = () => {
    if (!picked) {
      setPicked(true);
      onClickImage(true);
    } else {
      onClickImage(false);
    }    
  }

  return (
    <img 
      className="card"
      src={imageSource}        
      alt='flower'
      onClick={handleClick}
    />    
  )
}

export default Card;
import React from 'react'
import '../styles.css'
import flower1 from '../images/flower1.png';

const Card = () => {
  return (
    <img 
      className="card"
      src={flower1}        
      alt='flower1'
      width='100%'
    />    
  )
}

export default Card;
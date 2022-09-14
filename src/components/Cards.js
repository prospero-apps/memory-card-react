import React, { useState, useEffect } from 'react';
import '../styles.css';
import Card from './Card';

import flower1 from '../images/flower1.png';
import flower2 from '../images/flower2.png';
import flower3 from '../images/flower3.png';
import flower4 from '../images/flower4.png';
import flower5 from '../images/flower5.png';
import flower6 from '../images/flower6.png';
import flower7 from '../images/flower7.jpg';
import flower8 from '../images/flower8.png';
import flower9 from '../images/flower9.png';
import flower10 from '../images/flower10.png';
import flower11 from '../images/flower11.png';
import flower12 from '../images/flower12.png';

const Cards = ({ onClickImage }) => {
  const [images, setImages] = useState(flowerImages);

  useEffect(() => {
    const newFlowerImages = [...images];
    shuffle(newFlowerImages);
    setImages(newFlowerImages);
  }, []);

  const handleOnClickImage = (scoring) => {
    const newFlowerImages = [...images];
    shuffle(newFlowerImages);
    setImages(newFlowerImages);    
    onClickImage(scoring);
  }

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const flowers = images.map(flower =>
    <Card 
      key={flower.id}
      imageSource={flower.source}
      alreadyClicked={false}
      onClickImage={handleOnClickImage}
    />)

  return (      
    <div className='cards'>
      {flowers}
    </div>
  )
}

const flowerImages = [{
  id: 1,
  source: flower1,
}, {
  id: 2,
  source: flower2,
}, {
  id: 3,
  source: flower3,
}, {
  id: 4,
  source: flower4,
}, {
  id: 5,
  source: flower5,
}, {
  id: 6,
  source: flower6,
}, {
  id: 7,
  source: flower7,
}, {
  id: 8,
  source: flower8,
}, {
  id: 9,
  source: flower9,
}, {
  id: 10,
  source: flower10,
}, {
  id: 11,
  source: flower11,
}, {
  id: 12,
  source: flower12,
},]

export default Cards;
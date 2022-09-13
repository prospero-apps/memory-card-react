import React, { useState } from 'react';
import '../styles.css';
import Header from './Header';
import Cards from './Cards';
import Gameover from './Gameover';

const Container = () => {
    return (
      <div id="container">
        <Header/>
        <Cards/>
        <Gameover/>
      </div>
    )
}

export default Container;
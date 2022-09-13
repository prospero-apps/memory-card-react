import React, { useState } from 'react';
import '../styles.css';
import Header from './Header';
import Cards from './Cards';

const Container = () => {
    return (
      <div id="container">
        <Header/>
        <Cards/>
      </div>
    )
}

export default Container;
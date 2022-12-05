import React from 'react';
import { Cards } from './components/Cards';
import { Carousel } from './components/Carousel';
import { Header } from './components/Header';
import { Supplier } from './components/Supplier';
import { Featured } from './components/Featured';

function App() {
  return (
    <>
    <Header />
    <Carousel />
    <Cards />
    <Supplier />
    <Featured />
    </>
  );
}

export default App;

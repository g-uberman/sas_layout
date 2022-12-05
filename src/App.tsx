import React from 'react';
import { Cards } from './components/Cards';
import { Carousel } from './components/Carousel';
import { Header } from './components/Header';
import { Supplier } from './components/Supplier';
import { Featured } from './components/Featured';
import { MediaNavBar } from './components/MediaNavBar';

function App() {
  return (
    <>
    <Header />
    <Carousel />
    <Cards />
    <Supplier />
    <Featured />
    <MediaNavBar />
    </>
  );
}

export default App;

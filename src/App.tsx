import React from 'react';
import { Cards } from './components/Cards';
import { Carousel } from './components/Carousel';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
    <Header />
    <NavBar />
    <Carousel />
    <Cards />
    </>
  );
}

export default App;

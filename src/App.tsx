import React from 'react';
import { Cards } from './components/Cards';
import { Carousel } from './components/Carousel';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Supplier } from './components/Supplier';

function App() {
  return (
    <>
    <Header />
    <NavBar />
    <Carousel />
    <Cards />
    <Supplier />
    </>
  );
}

export default App;

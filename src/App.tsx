import React from 'react';
import { Cards } from './components/Cards';
import { Carousel } from './components/Carousel';
import { Header } from './components/Header';
import { Supplier } from './components/Supplier';
import { Featured } from './components/Featured';
import { SocialMedia } from './components/SocialMedia';
import { SiteMap } from './components/SiteMap';
import { Links } from './components/Links';
import { Footer } from './components/Footer';

function App() {
  return (
    <div id="screenWrapper">
    <Header />
    <Carousel />
    <Cards />
    <Supplier />
    <Featured />
    <SocialMedia />
    <SiteMap />
    <Links />
    <Footer />
    </div>
  );
}

export default App;

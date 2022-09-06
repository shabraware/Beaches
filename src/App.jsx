import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Search from './components/Search';
import Selections from './components/Selections';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selections />
    </>
  );
};

export default App;

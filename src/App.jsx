import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Search from './components/Search';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
    </>
  );
};

export default App;

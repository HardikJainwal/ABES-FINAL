import React from 'react';

import Home from './Component/Home/Home';
import Navbar from './Component/Navbar';
import Card from './Component/Home/Card';
import Ambassdor from './Component/Home/Ambassdor';
import Connect from './Component/Home/Connect';
import Footer from './Component/Home/Footer';

const App = () => {
  return (
    <main className="min-h-screen">
      <Navbar/>
      <Home />
      <Card/>
      <Ambassdor/>
      <Connect/>
      <Footer/>
    </main>
  );
};

export default App;
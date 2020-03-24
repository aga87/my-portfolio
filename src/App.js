import React from 'react';

import Nav from './Components/Nav';
import Home from './Components/Home';
import Ruler from './Components/Ruler';
import Projects from './Components/Projects';
import './App.scss';

// todo: change browserlist settings or add prefixes myself?

// todo: scroll

function App() {
  return (
    <div className="App">
      <Nav navLinks={['home', 'projects', 'skills', 'about', 'contact']} />
      <Home />
      <Ruler />
      <Projects />
    </div>
  );
}

export default App;

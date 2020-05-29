import React from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Ruler from './Components/Ruler';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

// todo: test wai-aria
// fixme: ruler inside section?
// fixme: touch doesnt work?
// fixme: nav keyboard focus

function App() {
  return (
    <div className="App">
      <Nav navLinks={['home', 'projects', 'skills', 'about', 'contact']} />
      <Home />
      <Ruler />
      <Projects />
      <Ruler />
      <Skills />
      <Ruler />
      <About />
      <Ruler />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

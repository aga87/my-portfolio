import React from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Ruler from './Components/Ruler';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

// todo: test wai-aria and proofread the About section
// todo: test wai-aria on Nav

// fixme: test on mobile
// fixme: nav keyboard focus
// fixme: contact form custom modal

// fixme: contact me on linkedin - open in new tab

function App() {
  return (
    <div>
      {/* <Nav navLinks={['home', 'projects', 'skills', 'about', 'contact']} />
      <Home />
      <Ruler />
      <Projects />
      <Ruler />
      <Skills />
      <Ruler />
      <About />
      <Ruler /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;

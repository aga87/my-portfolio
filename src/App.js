import React, { useEffect } from 'react';
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
// fixme: html head
// fixme: wai aria success msg test!!
// fixme: focus next form input on enter!!

/**
 * 
 * function handleScroll() {
  const sections = document.querySelectorAll('.jsSection');
  sections.forEach((section) => {
    if (this.pageYOffset >= section.offsetTop - 60) {
      // fixme: access with ref?
      linkArrows.forEach((arrow) => arrow.classList.remove('is-selected'));

      const id = section.id;

      const navLink = document.querySelector(`[href = "#${id}"]`);
      const linkArrow = navLink.querySelector('.jsNavLink__arrow');
      linkArrow.classList.add('is-selected');
    }
  });
}
 * 
 * 
 * 
 * 
 * 
 */

function App() {
  const navLinks = ['home', 'projects', 'skills', 'about', 'contact'];

  function handleScroll(e) {
    const yOffset = window.pageYOffset;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div>
      <Nav navLinks={navLinks} />
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

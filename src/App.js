import React, { useEffect, useRef } from 'react';
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
// fixme: uninstall scroll-spy and remove from the projects desc
// fixme: smooth scroll on link click?

function App() {
  //todo: pass id as a prop?
  // fixme: extract wrapper here?
  const navLinks = ['home', 'projects', 'skills', 'about', 'contact'];
  const navLinkRefs = useRef(navLinks.map(() => React.createRef()));
  const sectionRefs = useRef(navLinks.map(() => React.createRef()));

  function handleScroll() {
    // For each section
    sectionRefs.current.forEach((sectionRef, index) => {
      // Check if the user scroll to or past the section
      if (window.pageYOffset >= sectionRef.current.offsetTop - 60) {
        // Remove active classes for all nav links
        navLinkRefs.current.forEach((navLinkRef) => {
          navLinkRef.current.classList.remove('active');
        });
        // And add and active class to the section currently scrolled-to/ by
        navLinkRefs.current[index].current.classList.add('active');
      }
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div>
      <Nav navLinks={navLinks} ref={navLinkRefs} />
      <Home ref={sectionRefs.current[0]} />
      <Ruler />
      <Projects ref={sectionRefs.current[1]} />
      <Ruler />
      <Skills ref={sectionRefs.current[2]} />
      <Ruler />
      <About ref={sectionRefs.current[3]} />
      <Ruler />
      <Contact ref={sectionRefs.current[4]} />
      <Footer />
    </div>
  );
}

export default App;

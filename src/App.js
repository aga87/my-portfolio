import React, { useEffect, useRef } from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Ruler from './Components/Ruler';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

// fixme: wai aria success msg test!!
// fixme: test on mobile
// fixme: html head
// fixme: smooth scroll on link click?
// https://stackoverflow.com/questions/44375093/handling-scroll-animation-in-react
// fixme: remove scroll-spy from the projects desc? using it in the about section
// fixme: move sections here?

function App() {
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
        // Roving tabindex
        navLinkRefs.current.forEach((navLinkRef) => {
          navLinkRef.current.setAttribute('tabindex', '-1');
        });
        // And add and active class to the section currently scrolled-to/ by
        navLinkRefs.current[index].current.classList.add('active');
        // Roving tabindex
        navLinkRefs.current[index].current.setAttribute('tabindex', '0');
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
      <div className="l-wrapper">
        <Home ref={sectionRefs.current[0]} id={navLinks[0]} />
        <Ruler />
        <Projects ref={sectionRefs.current[1]} id={navLinks[1]} />
        <Ruler />
        <Skills ref={sectionRefs.current[2]} id={navLinks[2]} />
        <Ruler />
        <About ref={sectionRefs.current[3]} id={navLinks[3]} />
        <Ruler />
        <Contact ref={sectionRefs.current[4]} id={navLinks[4]} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

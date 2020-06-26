import React, { useEffect, useRef } from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Ruler from './Components/Ruler';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

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

  function scrollIntoView(index) {
    sectionRefs.current[index].current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div>
      <Nav
        navLinks={navLinks}
        ref={navLinkRefs}
        scrollIntoView={scrollIntoView}
      />
      <div className="l-wrapper">
        <main ref={sectionRefs.current[0]} id={navLinks[0]}>
          <Home />
        </main>
        <Ruler />

        <section
          className="c-section"
          ref={sectionRefs.current[1]}
          id={navLinks[1]}
        >
          <h2 className="c-section__heading t2">PROJECTS:</h2>
          <Projects />
        </section>
        <Ruler />

        <section
          className="c-section l-section"
          ref={sectionRefs.current[2]}
          id={navLinks[2]}
        >
          <h2 className="c-section__heading t2">SKILLS:</h2>
          <Skills scrollIntoView={scrollIntoView} />
        </section>
        <Ruler />

        <section
          className="c-section"
          ref={sectionRefs.current[3]}
          id={navLinks[3]}
        >
          <h2 className="c-section__heading t2">ABOUT:</h2>
          <About scrollIntoView={scrollIntoView} />
        </section>
        <Ruler />

        <section
          className="c-section u-pad"
          ref={sectionRefs.current[4]}
          id={navLinks[4]}
        >
          <h2 className="c-section__heading t2">CONTACT:</h2>
          <Contact />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;

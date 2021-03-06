import React from 'react';
import Project from './Project';
import ProjectLinkGitHub from './ProjectLinkGitHub';
import ProjectLinkLive from './ProjectLinkLive';
import astromanMockup from '../img/smartmockups-astroman-450.png';
import drumkitMockup from '../img/smartmockups-drumkit-450.png';
import portfolioMockup from '../img/smartmockups-portfolio-450.png';
import galleryMockup from '../img/smartmockups-gallery-450.png';

function Projects() {
  return (
    <ol className="c-project-list">
      <li className="c-project-list__item">
        <Project
          name="Astroman - Game For Two Players"
          imgSrc={astromanMockup}
          altName="the Astroman game"
          date="2020"
          tags={[
            { tag: 'Create React App', category: 'React' },
            { tag: 'JSX', category: 'react' },
            { tag: 'React Hooks', category: 'react' },
            { tag: 'Redux', category: 'Redux' },
            { tag: 'Functional programming', category: 'JS' },
            { tag: 'ES6', category: 'JS' },
            { tag: 'Canvas API', category: 'js' },
            { tag: 'SCSS', category: 'CSS' },
            { tag: 'BEM + Namespaces', category: 'CSS' },
            { tag: 'Responsive, mobile-first', category: 'CSS' },
          ]}
          links={[
            <ProjectLinkGitHub
              name="See the Astroman code on GitHub"
              href="https://github.com/aga87/astro-react-redux"
            />,
            <ProjectLinkLive
              name="www.astroman-game.com"
              href="https://www.astroman-game.com/"
            />,
          ]}
        >
          <p>
            In this hangman-inspired game, set in space, two players compete to
            uncover the concealed title of a randomly selected science-fiction
            book. The players take turns to guess letters: if the book title
            contains the letter, the player can go again. If the guess is
            incorrect, the player loses one of their 8 lives (oxygen) and their
            turn. The player that uncovered the last letter in the book title
            gains one point.
          </p>
          <p>
            The game consists of unlimited number of rounds and ends when one of
            the players runs out of oxygen. Player with higher score wins. If
            it&apos;s a tie, the player with lives/ oxygen left wins. Players
            can restart, go back to or quit the game from the Options modal.
          </p>
          <p>
            I use React and Redux to manage the game&apos;s state, including the
            UI and audio.
          </p>
        </Project>
      </li>

      <li className="c-project-list__item">
        <Project
          name="Drum Kit"
          imgSrc={drumkitMockup}
          altName="the drum kit app"
          date="2020"
          tags={[
            { tag: 'Create React App', category: 'react' },
            { tag: 'JSX', category: 'react' },
            { tag: 'ES6', category: 'JS' },
            { tag: 'SCSS', category: 'CSS' },
            { tag: 'BEM + Namespaces', category: 'CSS' },
            { tag: 'Responsive, mobile-first', category: 'CSS' },
            { tag: 'Browser-compatibility', category: 'css' },
            { tag: 'WAI-ARIA', category: 'html' },
          ]}
          links={[
            <ProjectLinkGitHub
              name="See the Drum Kit code on GitHub"
              href="https://github.com/aga87/drumkit-react"
            />,
            <ProjectLinkLive
              name="www.drumkit-react.com"
              href="https://www.drumkit-react.com/"
            />,
          ]}
        >
          <p>
            Press a key to play a corresponding drum kit sound. Change the drum
            kit setup and skin from the toolbar. A modern PWA built with
            ReactJS, designated primarily for keyboard use and fully accessible.
          </p>
        </Project>
      </li>

      <li className="c-project-list__item">
        <Project
          name="My Portfolio Website"
          imgSrc={portfolioMockup}
          altName="my portfolio website"
          date="2020"
          tags={[
            { tag: 'Create React App', category: 'react' },
            { tag: 'JSX', category: 'react' },
            { tag: 'React Hooks', category: 'react' },
            { tag: 'ES6', category: 'js' },
            { tag: 'Constraint Validation API', category: 'js' },
            { tag: 'SCSS', category: 'CSS' },
            { tag: 'BEM + Namespaces', category: 'CSS' },
            { tag: 'Responsive, mobile-first', category: 'CSS' },
            { tag: 'CSS Browser-compatibility', category: 'css' },
            { tag: 'WAI-ARIA', category: 'html' },
          ]}
          links={[
            <ProjectLinkGitHub
              name="See my portfolio code on GitHub"
              href="https://github.com/aga87/my-portfolio"
            />,
          ]}
        >
          <p>You are here. </p>
          <p>
            I use React controlled components together with the Constraint
            Validation API to implement and validate the contact form. I use
            React Hooks to reuse stateful logic between input components; to
            manage focus in the composite navigation widget; and to implement
            the scroll-spy and smooth scrolling features.
          </p>
        </Project>
      </li>

      <li className="c-project-list__item">
        <Project
          name="Image Gallery - Bikes"
          imgSrc={galleryMockup}
          altName="the image gallery"
          date="2020"
          tags={[
            { tag: 'ES5', category: 'js' },
            { tag: 'Vanilla JS', category: 'js' },
            { tag: 'DOM API', category: 'js' },
            { tag: 'SCSS', category: 'CSS' },
            { tag: 'BEM + Namespaces', category: 'CSS' },
            { tag: 'Responsive, mobile-first', category: 'CSS' },
            { tag: 'Browser-compatibility', category: 'css' },
            { tag: 'HTML5', category: 'html' },
            { tag: 'WAI-ARIA', category: 'html' },
          ]}
          links={[
            <ProjectLinkGitHub
              name="See the image gallery code on GitHub"
              href="https://github.com/aga87/gallery"
            />,
            <ProjectLinkLive
              name="www.gallery-bikes.com"
              href="https://www.gallery-bikes.com/"
            />,
          ]}
        >
          <p>
            Press a previous or next button to show previous/ next slide or
            choose a slide from a thumbnail gallery.
          </p>
          <p>I use a CDN to serve optimised responsive images.</p>
          <p>
            I follow the WAI-ARIA tabs design pattern and implement keyboard
            support to make the gallery accessible to the screen readers.
          </p>
          <p>
            Built with vanilla JavaScript, following progressive enhancement
            principles to support all major modern browsers out of the box,
            including the IE11.
          </p>
          <p>A lightweight SPA/ PWA with full offline capabilities.</p>
        </Project>
      </li>
    </ol>
  );
}

export default Projects;

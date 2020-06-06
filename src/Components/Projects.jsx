import React from 'react';
import Project from './Project';
import ProjectLinkGitHub from './ProjectLinkGitHub';
import ProjectLinkCodepen from './ProjectLinkCodepen';
import ProjectLinkSandbox from './ProjectLinkSandbox';
import astromanMockup from '../img/smartmockups-astroman-450.png';
import drumkitMockup from '../img/smartmockups-drumkit-450.png';
import portfolioMockup from '../img/smartmockups-portfolio-450.png';
import galleryMockup from '../img/smartmockups-gallery-450.png';

function Projects(props, ref) {
  const { id } = props;

  return (
    <section className="c-section" ref={ref} id={id}>
      <h2 className="c-section__heading t2">PROJECTS:</h2>
      <ol className="c-project-list">
        <li className="c-project-list__item">
          <Project
            name="Astroman - Game For Two Players"
            imgSrc={astromanMockup}
            altName="the Astroman game"
            date="February 2020"
            tags={[
              { tag: 'Create React App', category: 'React' },
              { tag: 'JSX', category: 'react' },
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
                name="See Astroman (React-Redux) code on GitHub"
                href="https://github.com/aga87/astro-react-redux"
              />,
              <ProjectLinkSandbox
                name="See Astroman (React-Redux) live on CodeSandbox"
                href="https://codesandbox.io/s/astroman-game-react-redux-fiz3b"
              />,
            ]}
          >
            <p>
              In this hangman-inspired game, set in space, two players compete
              to uncover the concealed title of a randomly selected
              science-fiction book. The players take turns to guess letters: if
              the book title contains the letter, the player can go again. If
              the guess is incorrect, the player loses one of their 8 lives
              (oxygen) and their turn. The player that uncovered the last letter
              in the book title gains one point.
            </p>
            <p>
              The game consists of unlimited number of rounds and ends when one
              of the players runs out of oxygen. Player with higher score wins.
              If it&apos;s a tie, the player with lives/ oxygen left wins.
              Players can restart, go back to or quit the game from the Options
              modal.
            </p>
            <p>
              I use React and Redux to manage the game&apos;s state, including
              the UI and audio.
            </p>
          </Project>
        </li>

        <li className="c-project-list__item">
          <Project
            name="Drum Kit"
            imgSrc={drumkitMockup}
            altName="the drum kit app"
            date="March 2020"
            tags={[
              { tag: 'WAI-ARIA', category: 'html' },
              { tag: 'Create React App', category: 'react' },
              { tag: 'JSX', category: 'react' },
              { tag: 'SCSS', category: 'CSS' },
              { tag: 'BEM + Namespaces', category: 'CSS' },
              { tag: 'Responsive, mobile-first', category: 'CSS' },
              { tag: 'Browser-compatibility', category: 'css' },
            ]}
            links={[
              <ProjectLinkGitHub
                name="See the Drum Kit (React) code on GitHub"
                href="https://github.com/aga87/drumkit-react"
              />,
              <ProjectLinkSandbox
                name="See the Drum Kit (React) live on CodeSandbox"
                href="https://codesandbox.io/s/drum-kit-create-react-app-1qx16"
              />,
            ]}
          >
            <p>
              Press a key to play a corresponding drum kit sound. A small app
              built with React, designated primarily for keyboard use and fully
              accessible.
            </p>
          </Project>
        </li>

        <li className="c-project-list__item">
          <Project
            name="My Portfolio Website"
            imgSrc={portfolioMockup}
            altName="my portfolio website"
            date="June 2020"
            tags={[
              { tag: 'Create React App', category: 'react' },
              { tag: 'JSX', category: 'react' },
              { tag: 'React Hooks', category: 'react' },
              { tag: 'react-scroll', category: 'react' },
              { tag: 'WAI-ARIA', category: 'html' },
              { tag: 'SCSS', category: 'CSS' },
              { tag: 'BEM + Namespaces', category: 'CSS' },
              { tag: 'Responsive, mobile-first', category: 'CSS' },
              { tag: 'CSS Browser-compatibility', category: 'css' },
              { tag: 'ES6', category: 'js' },
              { tag: 'Constraint Validation API', category: 'js' },
            ]}
            links={[
              <ProjectLinkGitHub
                name="See my portfolio (React) code on GitHub"
                href="www.google.com"
              />,
            ]}
          >
            <p>You are here &#9786;. </p>
            <p>
              I use React controlled components together with the Constraint
              Validation API to implement and validate the contact form. I use
              React Hooks to reuse stateful logic between input components; and
              to manage focus in the composite navigation widget. The smooth
              scrolling and scroll spy is implemented with the react-scroll
              module.
            </p>
          </Project>
        </li>

        <li className="c-project-list__item">
          <Project
            name="Image Gallery - Bikes"
            imgSrc={galleryMockup}
            altName="the image gallery"
            date="April 2020"
            tags={[
              { tag: 'HTML5', category: 'html' },
              { tag: 'WAI-ARIA', category: 'html' },
              { tag: 'SCSS', category: 'CSS' },
              { tag: 'BEM + Namespaces', category: 'CSS' },
              { tag: 'Responsive, mobile-first', category: 'CSS' },
              { tag: 'Browser-compatibility', category: 'css' },
              { tag: 'ES5', category: 'js' },
              { tag: 'Vanilla JS', category: 'js' },
              { tag: 'DOM API', category: 'js' },
            ]}
            links={[
              <ProjectLinkGitHub
                name="See the image gallery code on GitHub"
                href="https://github.com/aga87/gallery"
              />,
              <ProjectLinkCodepen
                name="See the image gallery live on Codepen"
                href="https://codepen.io/aga87/project/editor/ff6d38996f2bc7fee47490682e976e23#0"
              />,
            ]}
          >
            <p>
              Press a previous or next button to show previous/ next slide or
              choose a slide from a thumbnail gallery.
            </p>
            <p>
              I use the WAI-ARIA tabs design pattern and implement keyboard
              support to make the gallery accessible to the screen readers.
            </p>
            <p>
              I use progressive enhancement to support all major modern
              browsers, including the IE11.
            </p>
          </Project>
        </li>
      </ol>
    </section>
  );
}

const forwardedProjects = React.forwardRef(Projects);

export default forwardedProjects;

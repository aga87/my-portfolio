import React from 'react';

import Project from './Project';
import ProjectLinkGitHub from './ProjectLinkGitHub';

import astromanMockup from '../img/smartmockups_astroman.png';
import drumkitMockup from '../img/smartmockups_drumkit.png';
import portfolioMockup from '../img/smartmockups_portfolio.png';

// fixme: image sizes ! white or black mockup frames?
// todo: grid styles

function Projects() {
  return (
    <div className="l-wrapper">
      <section className="c-section" id="projects">
        <h2 className="c-section__heading t2">PROJECTS:</h2>
        {/* fixme: classnames */}
        <ol className="c-project-list">
          <li className="c-project-list__item">
            <Project
              name="Astroman - Game For Two Players"
              imgSrc={astromanMockup}
              altName="the Astroman game"
              date="February 2020"
              tags={[
                { tag: 'CSS Grid', category: 'CSS' },
                { tag: 'Canvas API', category: 'other' },
                { tag: 'SVG', category: 'other' },
                { tag: 'Redux architecture', category: 'Redux' },
                { tag: 'Functional programming', category: 'JS' },
                { tag: 'ES6', category: 'JS' },
                { tag: 'SCSS', category: 'CSS' },
                { tag: 'Responsive', category: 'CSS' },
              ]}
              links={[
                <ProjectLinkGitHub
                  name="See Astroman (Redux) on GitHub"
                  href="www.google.com"
                />,
                <ProjectLinkGitHub
                  name="See Astroman (Redux, React) on GitHub"
                  href="www.google.com"
                />,
              ]}
            >
              <p>
                In this hangman-inspired game, set in space, two players compete
                to uncover the concealed title of a randomly selected
                science-fiction book. The players take turns to guess letters:
                if the book title contains the letter, the player can go again.
                If the guess is incorrect, the player loses one of their 8 lives
                (oxygen) and their turn. The player that uncovered the last
                letter in the book title gains one point.
              </p>
              <p>
                The game consists of unlimited number of rounds and ends when
                one of the players runs out of oxygen. Player with higher score
                wins. If it&apos;s a tie, the player with lives/ oxygen left
                wins.
              </p>
              <p>
                Players can restart, go back to or quit the game from the
                Options modal.
              </p>
              <p>
                I use Redux to manage the game&apos;s state, including the UI
                and audio.
              </p>
            </Project>
          </li>

          <li className="c-project-list__item">
            <Project
              name="Drum Kit (React)"
              imgSrc={drumkitMockup}
              // fixme: alt?
              altName="the drumkit app"
              date="March 2020"
              tags={[
                { tag: 'HTML audio', category: 'html' },
                { tag: 'React', category: 'react' },
                { tag: 'WAI-ARIA', category: 'other' },
                { tag: 'SCSS', category: 'CSS' },
                { tag: 'CSS Transitions', category: 'CSS' },
                { tag: 'Responsive', category: 'CSS' },
              ]}
              links={[
                <ProjectLinkGitHub
                  name="See the Drum Kit (React) on GitHub"
                  href="www.google.com"
                />,
              ]}
            >
              <p>
                A small Drum Kit app built with Create React App, designated for
                keybaord use and accessible.
              </p>
            </Project>
          </li>

          <li className="c-project-list__item">
            <Project
              name="My Portfolio Website"
              imgSrc={portfolioMockup}
              // fixme: alt?
              altName="my portfolio website"
              date="March 2020"
              tags={[
                { tag: 'React', category: 'react' },
                { tag: 'WAI-ARIA', category: 'other' },
                { tag: 'SCSS', category: 'CSS' },
                { tag: 'Responsive', category: 'CSS' },
              ]}
              links={[
                <ProjectLinkGitHub
                  name="See my portfolio (React) on GitHub"
                  href="www.google.com"
                />,
              ]}
            >
              <p>The content is self-explanatory....</p>
            </Project>
          </li>
        </ol>
      </section>
    </div>
  );
}

export default Projects;

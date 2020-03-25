import React from 'react';

import Project from './Project';
import ProjectInfo from './ProjectInfo';
import ProjectTags from './ProjectTags';
import ProjectLinkGitHub from './ProjectLinkGitHub';

import astromanMockup from '../img/smartmockups_astroman.png';

function Projects() {
  return (
    <Project
      name="Astroman - Game For Two Players"
      imgSrc={astromanMockup}
      altName="the Astroman game"
      info={
        <ProjectInfo
          date="February 2020"
          tags={
            <ProjectTags
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
            />
          }
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
            it&apos;s a tie, the player with lives/ oxygen left wins.
          </p>
          <p>
            Players can restart, go back to or quit the game from the Options
            modal.
          </p>
          <p>
            I use Redux to manage the game&apos;s state, including the UI and
            audio.
          </p>
        </ProjectInfo>
      }
    />
  );
}

export default Projects;

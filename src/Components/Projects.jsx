import React from 'react';

import Project from './Project';
import ProjectInfo from './ProjectInfo';
import ProjectTags from './ProjectTags';
import ProjectLinkList from './ProjectLinkList';
import ProjectLinkGitHub from './ProjectLinkGitHub';

import astromanMockup from '../img/smartmockups_astroman.png';

// fixme: multiple paragraphs in project descr?

function Projects() {
  return (
    <Project
      name="Astroman - Game For Two Players"
      imgSrc={astromanMockup}
      altName="the Astroman game"
      info={
        <ProjectInfo
          date="February 2020"
          descr="In this hangman-inspired game, set in space, two players compete to uncover the concealed title of a randomly selected science-fiction book. The players take turns to guess letters: if the book title contains the letter, the player can go again. If the guess is incorrect, the player loses one of their 8 lives (oxygen) and their turn. The player that uncovered the last letter in the book title gains one point. The game consists of unlimited number of rounds and ends when one of the players runs out of oxygen. Player with higher score wins. If it's a tie, the player with lives/ oxygen left wins. Players can restart, go back to or quit the game from the Options modal. I use Redux to manage the game's state, including the UI and audio"
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
          links={
            <ProjectLinkList
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
            />
          }
        />
      }
    />
  );
}

export default Projects;

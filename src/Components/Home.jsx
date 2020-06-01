import React from 'react';
import LogoHTML5 from './LogoHTML5';
import LogoCSS3 from './LogoCSS3';
import LogoJS from './LogoJS';
import LogoRedux from './LogoRedux';
import LogoReact from './LogoReact';

function Home() {
  return (
    <div className="l-wrapper">
      <main id="home" className="c-home l-home">
        <div className="l-home__content">
          <h1 lang="pl" className="c-home__heading t1-fluid">
            Agnieszka Łabonarska
          </h1>
          <p className="c-home__descr t3">
            <b>Front-end developer</b> <br />
            seeking full-time job opportunities in&nbsp;<b>Amsterdam</b>.
          </p>

          <ul className="l-home-logo-list" aria-label="skills">
            <li className="l-home-logo-list__item">
              {' '}
              <span className="h-offscreen">HTML5</span>
              <LogoHTML5 className="o-home-logo" />
            </li>
            <li className="l-home-logo-list__item">
              <span className="h-offscreen">CSS3</span>
              <LogoCSS3 className="o-home-logo" />
            </li>
            <li className="l-home-logo-list__item">
              <span className="h-offscreen">JavaScript</span>

              <LogoJS className="o-home-logo" />
            </li>
            <li className="l-home-logo-list__item">
              <span className="h-offscreen">Redux</span>

              <LogoRedux className="o-home-logo" />
            </li>
            <li className="l-home-logo-list__item">
              <span className="h-offscreen">React</span>

              <LogoReact className="o-home-logo o-home-logo--spin" />
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Home;

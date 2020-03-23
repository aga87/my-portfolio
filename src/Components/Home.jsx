import React from 'react';

import LogoHTML5 from './LogoHTML5';
import LogoCSS3 from './LogoCSS3';
import LogoJS from './LogoJS';
import LogoRedux from './LogoRedux';
import LogoReact from './LogoReact';

// fixme: scroll
function Home() {
  return (
    <main id="home" className="c-home">
      <div className="c-home__content">
        <h1 lang="pl" className="c-home__heading t1-fluid">
          Agnieszka Łabonarska
        </h1>
        <p className="c-home__descr t3">
          <b> Front-end developer</b> <br />
          seeking full-time job opportunities in&nbsp;<b>Amsterdam</b>.
        </p>

        <ul className="l-logo-list">
          <li className="l-logo-list__item">
            <LogoHTML5 />
          </li>
          <li className="l-logo-list__item">
            <LogoCSS3 />
          </li>
          <li className="l-logo-list__item">
            <LogoJS />
          </li>
          <li className="l-logo-list__item">
            <LogoRedux />
          </li>
          <li className="l-logo-list__item">
            <LogoReact />
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Home;

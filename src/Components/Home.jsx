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
            <b> Front-end developer</b> <br />
            seeking full-time job opportunities in&nbsp;<b>Amsterdam</b>.
          </p>

          {/* fixme: WAI ARIA - list with skills just hide the names and treat images as decorative!!! */}

          {/* fixme: WAI ARIA - list with skills just hide the names and treat images as decorative!!! */}
          <ul className="l-home-logo-list">
            <li className="l-home-logo-list__item">
              <LogoHTML5 className="o-home-logo" />
            </li>
            <li className="l-home-logo-list__item">
              <LogoCSS3 className="o-home-logo" />
            </li>
            <li className="l-home-logo-list__item">
              <LogoJS className="o-home-logo" />
            </li>
            <li className="l-home-logo-list__item">
              <LogoRedux className="o-home-logo" />
            </li>
            <li className="l-home-logo-list__item">
              <LogoReact className="o-home-logo o-home-logo--spin" />
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Home;

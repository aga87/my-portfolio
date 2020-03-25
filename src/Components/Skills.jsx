import React from 'react';
// import logoHTML5 from '../img/html5.png';
import LogoHTML5 from './LogoHTML5';
import LogoCSS3 from './LogoCSS3';
import LogoJS from './LogoJS';
import LogoRedux from './LogoRedux';
import LogoReact from './LogoReact';

function Skills() {
  return (
    <div className="l-wrapper">
      <section className="c-section l-section" id="skills">
        <h2 className="c-section__heading t2">SKILLS:</h2>

        {/* fixme: classnames */}
        <div className="c-skills l-skills-grid">
          <div className="c-skill-group l-skills-grid__item-group1">
            <h3 className="c-skill-group__heading t-body">
              Front-end technologies:
            </h3>
            <ul className="c-skill-group__list">
              <li>
                HTML5 <LogoHTML5 className="c-skill-group__skill-img" />
              </li>
              <li>
                CSS3 <LogoCSS3 className="c-skill-group__skill-img" />
              </li>
              <li>
                JavaScript (ES6+){' '}
                <LogoJS className="c-skill-group__skill-img" />
              </li>
              <li>
                Redux <LogoRedux className="c-skill-group__skill-img" />
              </li>
              <li>
                React{' '}
                <LogoReact className="c-skill-group__skill-img c-skill-group__skill-img--spin" />
              </li>
            </ul>
          </div>
          <div className="c-skill-group l-skills-grid__item-group2">
            <h3 className="c-skill-group__heading t-body">
              Front-end skills &amp; tools:
            </h3>
            <ul className="c-skill-group__list">
              <li>Web Accessibility/ WAI-ARIA</li>
              <li>Responsive design, mobile-first</li>
              <li>
                Modular CSS - <abbr title="Block, Element, Modifier">BEM</abbr>{' '}
                Methodology
              </li>
              <li>CSS Pre-Processor: Sass/ SCSS</li>
              <li>Modular code architecture</li>
              <li>JSX</li>
              <li>Functional programming</li>
              <li>State Management</li>
              <li>
                <abbr title="Document Object Model">DOM</abbr> API
                {/* <!-- <abbr title="Browser Object Model">BOM</abbr> API --> */}
              </li>
              <li>
                <abbr title="Object-oriented programming">OOP</abbr> basics
              </li>
              <li>Canvas API</li>
              <li>SVG basics</li>
              <li>Cross-Browser Development</li>
              <li>Terminal (Bash)</li>
              <li>Git Version Control, GitHub</li>
              {/* <!-- fixme: babel --> */}
              <li>Build Tools (npm, Webpack, Babel)</li>
              <li>
                Testing and Debugging: <br />
                Chrome DevTools, Redux DevTools, React DevTools
              </li>
              {/* fixme: */}
              <li>Code readability (JSDoc basics, ESLint)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;

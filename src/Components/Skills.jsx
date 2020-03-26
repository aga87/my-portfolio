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

        <div className="l-skills-grid">
          <div className="c-skill-group u-border-html l-skills-grid__item-group1">
            <div className="c-skill-group__content">
              <h3 className="c-skill-group__heading t-body">
                Front-end technologies:
              </h3>
              <ul>
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
          </div>

          <div className="c-skill-group u-border-js l-skills-grid__item-group2">
            <div className="c-skill-group__content">
              <h3 className="c-skill-group__heading t-body">
                Front-end skills &amp; tools:
              </h3>
              <ul>
                <li>Web Accessibility/ WAI-ARIA</li>
                <li>Responsive design, mobile-first</li>
                <li>
                  Modular CSS -{' '}
                  <abbr title="Block, Element, Modifier">BEM</abbr> Methodology
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

          <div className="c-skill-group u-border-css l-skills-grid__item-group3">
            <div className="c-skill-group__content">
              <h3 className="c-skill-group__heading t-body">Other skills:</h3>
              <ul>
                <li>Creative problem-solving</li>
                {/* <!-- <li>Critical thinking ??</li> --> */}
                <li>Abstract thinking</li>
                <li>Self-management</li>
                <li>Collaboration</li>
                <li>Research</li>
                <li>Resourcefulness</li>
                <li>Self-improvement</li>
                <li>Teaching? Presentation?</li>
                <li>Attention to detail</li>
                {/* <!-- <li>Project management ?</li> --> */}
                {/* <!-- <li>one more?</li> --> */}
              </ul>
            </div>
          </div>

          <div className="c-skill-group u-border-redux l-skills-grid__item-group4">
            <div className="c-skill-group__content">
              <h3 className="c-skill-group__heading t-body">Languages:</h3>
              <ul>
                <li>English (proficient)</li>
                <li>Polish (native)</li>
                <li>French (intermediate)</li>
              </ul>
            </div>
          </div>

          <div className="c-skill-group u-border-react l-skills-grid__item-group5">
            <div className="c-skill-group__content">
              <h3 className="c-skill-group__heading t-body">Education:</h3>
              <ul>
                <li>
                  <time>2013</time> - Master of Research in Human Geography with
                  Distinction, University of Glasgow.
                </li>
                <li>
                  <time>2012</time> - Master of Arts in Geography with Honours
                  of the First Class, University of Glasgow.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- fixme: download from linkedin? --> */}
        <p className="t3 u-text-center">
          Please{' '}
          <a className="o-link" href="#contact">
            {' '}
            contact me
          </a>{' '}
          if you would like to see my <b>full CV</b>.
        </p>
      </section>
    </div>
  );
}

export default Skills;

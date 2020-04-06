import React from 'react';
import { Link } from 'react-scroll';
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
          <div className="c-skill-group l-skills-grid__item-group1">
            <h3 className="c-skill-group__heading u-border-html t-body">
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
                React (JSX){' '}
                <LogoReact className="c-skill-group__skill-img c-skill-group__skill-img--spin" />
              </li>
            </ul>
          </div>

          <div className="c-skill-group l-skills-grid__item-group2">
            <h3 className="c-skill-group__heading u-border-js t-body">
              Front-end skills &amp; tools:
            </h3>
            <ul>
              <li>Web Accessibility/ WAI-ARIA</li>
              <li>Responsive design, mobile-first</li>
              <li>
                Modular CSS - <br />
                <abbr title="Block, Element, Modifier">BEM</abbr> Methodology +
                Namespaces
              </li>
              <li>CSS Pre-Processor: Sass/ SCSS</li>
              <li>Modular code architecture</li>
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
              <li>Build tools (npm, Webpack)</li>
              <li>
                Testing and Debugging: <br />
                Chrome DevTools, <br /> Redux DevTools,
                <br /> React DevTools,
                <br /> NVDA screen reader
              </li>
              {/* fixme: */}
              <li>
                Code readability <br /> (JSDoc comments, ESLint Airbnb)
              </li>
            </ul>
          </div>

          <div className="c-skill-group l-skills-grid__item-group3">
            <h3 className="c-skill-group__heading u-border-css t-body">
              Soft skills:
            </h3>
            <ul>
              <li>Creative problem-solving</li>
              <li>Abstract thinking</li>
              <li>Self-management</li>
              <li>Collaboration</li>
              <li>Research</li>
              <li>Resourcefulness</li>
              <li>Self-improvement</li>
              <li>Attention to detail</li>
            </ul>
          </div>

          <div className="c-skill-group l-skills-grid__item-group4">
            <h3 className="c-skill-group__heading u-border-redux t-body">
              Languages:
            </h3>
            <ul>
              <li>English (proficient)</li>
              <li>Polish (native)</li>
              <li>French (limited working proficiency)</li>
            </ul>
          </div>

          <div className="c-skill-group l-skills-grid__item-group5">
            <h3 className="c-skill-group__heading u-border-react t-body">
              Education:
            </h3>
            <ul>
              <li>
                <time>2013</time> - Master of Research in Human Geography with
                Distinction, University of Glasgow.
              </li>
              <li>
                <time>2012</time> - Master of Arts in Geography with Honours of
                the First Class, University of Glasgow.
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- fixme: download from linkedin? --> */}
        <p className="t3 u-text-center">
          Please{' '}
          <Link
            to="contact"
            spy
            smooth
            offset={-60}
            duration={500}
            className="o-link"
          >
            {' '}
            contact me &#8595;
          </Link>{' '}
          if you would like to see my <b>full CV</b>.
        </p>
      </section>
    </div>
  );
}

export default Skills;

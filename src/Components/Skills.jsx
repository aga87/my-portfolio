import React from 'react';
import LogoHTML5 from './LogoHTML5';
import LogoCSS3 from './LogoCSS3';
import LogoJS from './LogoJS';
import LogoRedux from './LogoRedux';
import LogoReact from './LogoReact';

function Skills(props) {
  const { scrollIntoView } = props;

  function handleClick(e) {
    e.preventDefault();
    scrollIntoView(4);
  }

  return (
    <div>
      <div className="c-skills l-skills-grid">
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
              JavaScript (ES6+) <LogoJS className="c-skill-group__skill-img" />
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
            <li>Functional programming</li>
            <li>State management</li>
            <li>SPAs/ PWAs</li>
            <li>Cross-browser development</li>
            <li>CSS Pre-processor: Sass/ SCSS</li>
            <li>
              Modular CSS - <br />
              <abbr
                title="Block, Element, Modifier"
                className="c-skill-group__abbr"
              >
                BEM
              </abbr>{' '}
              Methodology
            </li>
            <li>Responsive design, mobile-first</li>

            <li>
              <abbr
                title="Document Object Model"
                className="c-skill-group__abbr"
              >
                DOM
              </abbr>{' '}
              and{' '}
              <abbr
                title="Browser Object Model"
                className="c-skill-group__abbr"
              >
                BOM
              </abbr>{' '}
              APIs
            </li>
            <li>Canvas API/ SVG basics</li>
            <li>Git Version Control, GitHub</li>
            <li>Terminal (Bash)</li>
            <li>Build tools (npm, Webpack)</li>
            <li>
              Testing and debugging: <br />
              Chrome DevTools, <br /> Redux DevTools,
              <br /> React DevTools,
              <br /> NVDA screen reader
            </li>
            <li>Clean code</li>
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
              <time>2013</time> - Master of Research in Human Geography with{' '}
              <b>Distinction</b>, University of Glasgow.
            </li>
            <li>
              <time>2012</time> - Master of Arts in Geography with Honours of
              the <b>First Class</b>, University of Glasgow.
            </li>
          </ul>
        </div>
      </div>

      <p className="t3 u-text-center">
        Please{' '}
        <a href="#contact" className="o-link" onClick={handleClick}>
          {' '}
          contact me
        </a>{' '}
        if you would like to see my <b>full CV</b>.
      </p>
    </div>
  );
}

export default Skills;

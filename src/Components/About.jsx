import React from 'react';
import agaPic from '../img/aga-profile-pic-300px.jpg';

function About(props) {
  const { scrollIntoView } = props;

  function handleClick(e, index) {
    e.preventDefault();
    scrollIntoView(index);
  }

  return (
    <div className="c-about">
      <h3 className="c-about__title">Hi & welcome,</h3>

      <div className="l-about-float">
        <img
          className="c-about__img l-about-float__img"
          src={agaPic}
          alt="Portrait of Aga against a floral wall hanging"
          title="Hi, I'm Aga"
        />
        <p className="c-about__text">
          <b>I&apos;m Aga.</b> In 2017 I started out on a journey to become a{' '}
          <b>self&#x2011;taught front&#x2011;end developer</b>, and here I
          present the results of my work. I am passionate about the educational
          and empowering role of&nbsp;the&nbsp;Internet, and a big fan of
          open-source. I&nbsp;am especially enjoying working with ReactJS and
          Redux.
        </p>

        <p className="c-about__text">
          I&nbsp;am currently looking for a challenging Junior Developer role to
          utilise and further my skills. I enjoy the creative power of coding
          and I&nbsp;am looking forward to be a part of the diverse community of
          web developers. <b>If you are a potential employer</b>, please see the
          results of my work in the{' '}
          <a
            href="#projects"
            className="o-link"
            onClick={(e) => {
              handleClick(e, 1);
            }}
          >
            projects
          </a>{' '}
          section and{' '}
          <a
            href="#skills"
            className="o-link"
            onClick={(e) => {
              handleClick(e, 2);
            }}
          >
            skills
          </a>{' '}
          I gained alongside; and do not hesitate to{' '}
          <a
            href="#contact"
            className="o-link"
            onClick={(e) => {
              handleClick(e, 4);
            }}
          >
            {' '}
            contact me
          </a>{' '}
          .
        </p>

        <p>
          In my free time, I enjoy reading science-fiction, inline skating,
          Bikram yoga, cycling, playing poker, crafts and visiting new places.
          I&nbsp;am also interested in the combination of DIY and technology to
          create sustainable methods of growing food in cities.
        </p>
      </div>
    </div>
  );
}

export default About;

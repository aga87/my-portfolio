import React from 'react';
import { Link } from 'react-scroll';
import agaPic from '../img/aga-profile-pic-300px.jpg';

function About() {
  return (
    <div className="l-wrapper">
      <section className="c-section" id="about">
        <h2 className="c-section__heading t2">ABOUT:</h2>

        <article className="c-about-article">
          <h3 className="c-about-article__title">Hi & welcome,</h3>

          <div className="l-about-article-float">
            <img
              className="c-about-article__img l-about-article-float__img"
              src={agaPic}
              alt="Portrait of Aga against a floral wall hanging"
              title="Hi, I'm Aga"
            />
            <p className="c-about-article__text">
              <b>I&apos;m Aga.</b> In 2017 I started out on a journey to become
              a <b>self&#x2011;thought front&#x2011;end developer</b> and this
              website/portfolio is the result/ and here I present the results of
              my work. I would like to live in a world where everyone has an
              equal access to knowledge and so I am passionate about the
              educational and empowering role of&nbsp;the&nbsp;Internet, and a
              big fan of open-source.
            </p>
            <p className="c-about-article__text">
              {/* <!-- fixme: - text -->
               */}
              In my free time, I enjoy reading science-fiction, (sports?) -
              yoga, inline skating, cycling, poker, drumming, crafts projects
              and visiting new places. I&apos;m also interested in ((combination
              of DIY and technology to create)) sustainable and low-maintenance
              methods of growing food in cities.
            </p>
            <p>
              I&apos;m currently looking for a new challenging role to utilise
              and further my skills. I enjoy the creative power of coding and
              I&apos;m looking forward to be a part of the diverse community of
              web developers. <b>If you are a potential employer</b>, please see
              the results of my work in the{' '}
              <Link
                // activeClass="active"
                to="projects"
                spy
                smooth
                offset={-60}
                duration={500}
                className="o-link"
              >
                projects &#8593;
              </Link>{' '}
              section and
              <Link
                to="skills"
                spy
                smooth
                offset={-60}
                duration={500}
                className="o-link"
              >
                {' '}
                skills &#8593;
              </Link>{' '}
              I gained alongside; and do not hesitate to{' '}
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
              if you are interested in working with me.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default About;

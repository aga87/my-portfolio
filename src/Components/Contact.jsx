import React from 'react';
import ContactForm from './ContactForm';

import linkedinImg from '../img/linkedin.svg.png';

function Contact() {
  return (
    <div className="l-wrapper">
      <section className="c-section l-section u-push" id="contact">
        <h2 className="c-section__heading t2">CONTACT:</h2>
        <p className="c-section__text">
          I&apos;d love to hear about exciting job opportunities in{' '}
          <b>Amsterdam</b>.
        </p>

        <p className="c-section__text t3">
          <a className="o-link" href="www.google.com">
            Contact me on LinkedIn &#8599;{' '}
            <img
              className="o-link__img"
              src={linkedinImg}
              alt="LinkedIn logo"
              title="Font Awesome Free 5.4.1 by @fontawesome - https://fontawesome.com [CC BY 4.0 (https://creativecommons.org/licenses/by/4.0)], via Wikimedia Commons"
            />
          </a>
        </p>

        <p className="c-section__text u-push-dbl">
          Or fill out the form below:
        </p>

        <ContactForm />
      </section>
    </div>
  );
}

export default Contact;

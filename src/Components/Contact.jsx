import React from 'react';
import ContactForm from './ContactForm';
import linkedinImg from '../img/linkedin.svg.png';

function Contact() {
  return (
    <div>
      <p className="u-push-dbl u-text-center">
        I&apos;d love to hear about exciting job opportunities in the{' '}
        <b>Amsterdam</b> area.
        <br />
        <br />
        <a
          className="o-link t3"
          href="https://www.linkedin.com/in/agalabonarska/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact me on LinkedIn{' '}
          <img
            className="o-link__img"
            src={linkedinImg}
            alt=""
            title="Font Awesome Free 5.4.1 by @fontawesome - https://fontawesome.com [CC BY 4.0 (https://creativecommons.org/licenses/by/4.0)], via Wikimedia Commons"
            aria-hidden="true"
          />
        </a>
        <br />
        <br />
        Or fill out the form below:
      </p>
      <ContactForm />
    </div>
  );
}

export default Contact;

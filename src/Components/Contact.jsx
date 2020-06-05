import React from 'react';
import ContactForm from './ContactForm';
import linkedinImg from '../img/linkedin.svg.png';

function Contact(props, ref) {
  return (
    <div className="l-wrapper">
      <section className="c-section u-pad" ref={ref} id="contact">
        <h2 className="c-section__heading t2">CONTACT:</h2>
        <p className="c-section__text">
          I&apos;d love to hear about exciting job opportunities in{' '}
          <b>Amsterdam</b>.
        </p>

        <p className="c-section__text t3">
          <a
            className="o-link"
            href="https://www.linkedin.com/in/agalabonarska/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact me on LinkedIn <span aria-hidden="true">&#8599;</span>{' '}
            <img
              className="o-link__img"
              src={linkedinImg}
              alt=""
              title="Font Awesome Free 5.4.1 by @fontawesome - https://fontawesome.com [CC BY 4.0 (https://creativecommons.org/licenses/by/4.0)], via Wikimedia Commons"
              aria-hidden="true"
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

const forwardedContact = React.forwardRef(Contact);

export default forwardedContact;

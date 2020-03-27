import React, { useState, useRef } from 'react';
import { validateTextarea, getCompanyLabelClassName } from '../Utils';

import useFormInput from '../Hooks/useFormInput';

// fixme: add focus

function ContactForm() {
  const fullName = useFormInput();
  const prefName = useFormInput();
  const email = useFormInput();
  const subject = useFormInput();
  const [checked, setChecked] = useState('yes');
  const companyName = useFormInput();
  const companyUrl = useFormInput();
  const [message, setMessage] = useState({
    value: '',
    valid: false,
    infoMsg: '',
  });

  // const fullNameRef = useRef(null);
  // const prefNameRef = useRef(null);
  // const emailRef = useRef(null);
  // const subjectRef = useRef(null);
  // // todo: ref for radio button group !
  // const companyNameRef = useRef(null);
  // const companyUrlRef = useRef(null);

  // const inputsToFocus = [
  //   fullName,
  //   prefName,
  //   // email,
  //   // subject,
  //   // // todo: radio button group
  //   // companyName,
  //   // companyUrl,
  //   // message,
  // ];

  // const inputRefs = useRef(inputsToFocus.map(() => React.createRef()));

  // function handleKeyDown(e) {
  //   // const
  // }

  const inputsToValidate = [
    fullName,
    prefName,
    email,
    subject,
    companyName,
    companyUrl,
    // todo: textarea has to be together with these inputs!!!!
    // message,
  ];

  // todo: change name, do i need rest operator here? fixme: better way?
  function validateAllFields(checked, ...fields) {
    if (checked === 'no') {
      const filtered = fields.filter(
        (field) => field !== companyName || field !== companyUrl
      );
      return filtered.every((field) => field.values.valid);
    }
    return fields.every((field) => field.values.valid);
  }

  function handleRadioClick(e) {
    setChecked(e.target.value);
  }

  function handleTextareaChange(e) {
    const maxLength = e.target.getAttribute('maxLength');
    const { value } = e.target;
    const { valid } = e.target.validity;

    const errorMsg = validateTextarea(e.target);

    const infoMsg = `${errorMsg} 
    You have ${maxLength - value.length} of ${maxLength} characters left.`;

    setMessage({
      value,
      valid,
      infoMsg,
    });
  }

  return (
    <form
      action="mailto:aga.labonarska@outlook.com"
      encType="text/plain"
      method="post"
      id="jsForm"
      className="c-contact-form"
      noValidate
    >
      <div className="l-contact-form-grid">
        <div>
          <label htmlFor="full-name">Your full name:</label>
          <input
            className="c-contact-form__input"
            type="text"
            name="full-name"
            id="full-name"
            size="30"
            maxLength="100"
            required
            // ref={fullNameRef}
            // ref={inputsToFocus.current[index]}
            value={fullName.values.value}
            onChange={fullName.handleChange}
            onBlur={fullName.handleBlur}
          />
          <label
            className={
              fullName.values.errorMsg === ''
                ? 'c-contact-form__error-label s1'
                : 'c-contact-form__error-label s1 show'
            }
            htmlFor="full-name"
            // 'assertive' because this field will validate on blur
            aria-live="assertive"
          >
            {fullName.values.errorMsg}
          </label>
        </div>

        <div>
          <label htmlFor="pref-name">What can I call you?</label>
          <input
            className="c-contact-form__input"
            type="text"
            name="pref-name"
            id="pref-name"
            size="30"
            maxLength="50"
            required
            // ref={prefNameRef}
            value={prefName.values.value}
            onChange={prefName.handleChange}
            onBlur={prefName.handleBlur}
          />
          <label
            className={
              prefName.values.errorMsg === ''
                ? 'c-contact-form__error-label s1'
                : 'c-contact-form__error-label s1 show'
            }
            htmlFor="pref-name"
            aria-live="assertive"
          >
            {prefName.values.errorMsg}
          </label>
        </div>

        <div>
          <label htmlFor="email">Your email:</label>
          <input
            className="c-contact-form__input"
            type="email"
            name="e-mail"
            id="email"
            size="30"
            required
            value={email.values.value}
            onChange={email.handleChange}
            onBlur={email.handleBlur}
          />
          <label
            className={
              email.values.errorMsg === ''
                ? 'c-contact-form__error-label s1'
                : 'c-contact-form__error-label s1 show'
            }
            htmlFor="email"
            aria-live="assertive"
          >
            {email.values.errorMsg}
          </label>
        </div>

        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            className="c-contact-form__input"
            type="text"
            name="subject"
            id="subject"
            // maxlength of an email subject should be 78 characters - RFC 2822, section 2.1.1 recommendation
            maxLength="78"
            size="40"
            required
            value={subject.values.value}
            onChange={subject.handleChange}
            onBlur={subject.handleBlur}
          />
          <label
            className={
              subject.values.errorMsg === ''
                ? 'c-contact-form__error-label s1'
                : 'c-contact-form__error-label s1 show'
            }
            htmlFor="subject"
            aria-live="assertive"
          >
            {subject.values.errorMsg}
          </label>
        </div>

        <div
          className="l-contact-form-grid__item"
          role="radiogroup"
          aria-labelledby="employer-group"
        >
          <p id="employer-group">
            Are you a potential employer (or writing on behalf of a company)?
          </p>
          <input
            type="radio"
            name="employer"
            id="employer-yes"
            value="yes"
            defaultChecked
            required
            onClick={handleRadioClick}
          />{' '}
          <label htmlFor="employer-yes">Yes</label>{' '}
          <input
            type="radio"
            name="employer"
            id="employer-no"
            value="no"
            required
            onClick={handleRadioClick}
          />{' '}
          <label htmlFor="employer-no">No</label>
        </div>

        <div>
          <label htmlFor="company-name">Company name:</label>
          <input
            className="c-contact-form__input"
            type="text"
            name="company-name"
            id="company-name"
            size="30"
            maxLength="100"
            required
            disabled={checked === 'no'}
            // value={companyName.values.value}
            value={checked === 'yes' ? companyName.values.value : ''}
            onChange={companyName.handleChange}
            onBlur={companyName.handleBlur}
          />
          <label
            className={getCompanyLabelClassName(
              checked,
              companyName.values.errorMsg
            )}
            htmlFor="company-name"
            aria-live="assertive"
          >
            {checked === 'yes' ? companyName.values.errorMsg : ''}
          </label>
        </div>

        <div>
          <label htmlFor="company-url">Company website:</label>
          <input
            className="c-contact-form__input"
            type="url"
            name="company-url"
            id="company-url"
            size="30"
            required
            disabled={checked === 'no'}
            // value={companyUrl.values.value}
            value={checked === 'yes' ? companyUrl.values.value : ''}
            onChange={companyUrl.handleChange}
            onBlur={companyUrl.handleBlur}
          />
          <label
            className={getCompanyLabelClassName(
              checked,
              companyUrl.values.errorMsg
            )}
            htmlFor="company-url"
            aria-live="assertive"
          >
            {checked === 'yes' ? companyUrl.values.errorMsg : ''}
          </label>
        </div>

        <div className="l-contact-form-grid__item">
          <label htmlFor="message">Your message:</label>
          <textarea
            className="o-textarea c-contact-form__input"
            name="message"
            id="message"
            rows="10"
            cols="40"
            minLength="2"
            maxLength="3000"
            required
            value={message.value}
            onChange={handleTextareaChange}
          />

          <label
            className="c-contact-form__counter s1"
            htmlFor="message"
            // 'polite' because this field will validate onChange
            aria-live="polite"
          >
            {message.infoMsg}
          </label>
        </div>
      </div>

      <div className="u-text-right">
        <button
          type="submit"
          className="o-btn"
          disabled={!validateAllFields(checked, ...inputsToValidate)}
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default ContactForm;

import React, { useState } from 'react';
import { validateTextarea, getCompanyLabelClassName } from '../Utils';
import useFormInput from '../Hooks/useFormInput';

// todo: Submit the form

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

  const inputsToValidate = [
    fullName,
    prefName,
    email,
    subject,
    companyName,
    companyUrl,
  ];

  function validateAllFields(employer, inputs, textarea) {
    const textareaIsValid = textarea.valid;
    if (employer === 'no') {
      const inputsNonEmployer = inputs.filter(
        // fixme: can't move this function to Utils because it depends on companyName and companyUrl
        (input) => input !== companyName && input !== companyUrl
      );
      const inputsAreValid = inputsNonEmployer.every(
        (input) => input.values.valid
      );
      return inputsAreValid && textareaIsValid;
    }
    const inputsAreValid = inputs.every((input) => input.values.valid);
    return inputsAreValid && textareaIsValid;
  }

  // function handleSubmit(e) {
  //   // e.preventDefault();
  //   // fetch('../src/form-to-email.php', {
  //   //   method: 'post',
  //   // })
  //   //   .then(function (response) {
  //   //     return response.json();
  //   //   })
  //   //   .then(function (data) {
  //   //     //Success code goes here
  //   //     alert('form submited');
  //   //   })
  //   //   .catch(function (err) {
  //   //     //Failure
  //   //     alert('Error');
  //   //   });
  // }

  return (
    <form
      // action="mailto:aga.labonarska@outlook.com"
      action="../src/form-to-email.php"
      // action=""
      // encType="text/plain"
      encType="multipart/form-data"
      // fixme:
      // onSubmit={handleSubmit}
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

        <div className="l-contact-form-grid__item">
          <p id="employer-group">
            Are you a potential employer (or writing on behalf of a company)?
          </p>
          {/* todo: test lebbelled-by */}
          <div role="radiogroup" aria-labelledby="employer-group" tabIndex="0">
            <input
              type="radio"
              name="employer"
              id="employer-yes"
              value="yes"
              defaultChecked
              required
              aria-checked={checked === 'yes'}
              onClick={handleRadioClick}
            />{' '}
            <label htmlFor="employer-yes">Yes</label>{' '}
            <input
              type="radio"
              name="employer"
              id="employer-no"
              value="no"
              required
              aria-checked={checked === 'no'}
              // fixme: keyboard support for radiogroup works by default ? browser-compatible?
              // tabIndex="-1"
              onClick={handleRadioClick}
            />{' '}
            <label htmlFor="employer-no">No</label>
          </div>
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
          name="submit"
          className="o-btn"
          disabled={!validateAllFields(checked, inputsToValidate, message)}
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default ContactForm;

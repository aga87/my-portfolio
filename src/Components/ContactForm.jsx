import React, { useState } from 'react';
import { validateTextarea } from '../Utils';
import useFormInput from '../Hooks/useFormInput';

// Netlify form submission
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

function ContactForm() {
  const initialValue = {
    value: '',
    valid: false,
    touched: false,
    errorMsg: '',
  };

  const fullName = useFormInput(initialValue);
  const prefName = useFormInput(initialValue);
  const email = useFormInput(initialValue);
  const subject = useFormInput(initialValue);
  const [checked, setChecked] = useState('yes');
  const companyName = useFormInput(initialValue);
  const companyUrl = useFormInput(initialValue);
  const [message, setMessage] = useState({
    value: '',
    valid: false,
    infoMsg: '',
  });
  const [successMsg, setSuccessMsg] = useState(false);

  function handleRadioClick(e) {
    setChecked(e.target.value);
  }

  function handleTextareaChange(e) {
    const maxLength = e.target.getAttribute('maxLength');
    const { value } = e.target;
    const { valid } = e.target.validity;
    const errorMsg = validateTextarea(e.target);
    const infoMsg = `${errorMsg} 
    You have ${maxLength - value.length} characters left.`;

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
        (input) => input !== companyName && input !== companyUrl
      );
      const inputsAreValid = inputsNonEmployer.every(
        (input) => input.values.valid
      );
      return inputsAreValid && textareaIsValid;
    }

    // Little workaround: don't validate optional empty inputs even if they hadn't been touched
    if (companyUrl.values.value === '') {
      const inputsNonOptional = inputs.filter((input) => input !== companyUrl);
      const inputsAreValid = inputsNonOptional.every(
        (input) => input.values.valid
      );
      return inputsAreValid && textareaIsValid;
    }
    const inputsAreValid = inputs.every((input) => input.values.valid);
    return inputsAreValid && textareaIsValid;
  }

  function getCompanyLabelClassName(enabled, errorMsg) {
    if (enabled === 'yes') {
      if (errorMsg !== '') return 'c-contact-form__error-label s1 show';
      return 'c-contact-form__error-label s1';
    }
    return 'c-contact-form__error-label s1';
  }

  function resetForm() {
    fullName.resetField();
    prefName.resetField();
    email.resetField();
    subject.resetField();
    setChecked('yes');
    companyName.resetField();
    companyUrl.resetField();
    setMessage({ value: '', valid: false, infoMsg: '' });
  }

  function handleSubmit(e) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'portfolio-form',
        'full-name': fullName.values.value,
        'pref-name': prefName.values.value,
        'e-mail': email.values.value,
        subject: subject.values.value,
        employer: checked,
        'company-name': companyName.values.value,
        'company-url': companyUrl.values.value,
        message: message.value,
      }),
    })
      .then(() => {
        setSuccessMsg(true);
      })
      .catch((error) => alert(error));

    e.preventDefault();
  }

  function handleSuccessBtnClick() {
    setSuccessMsg(false);
    resetForm();
  }

  return (
    <div>
      <div
        className={
          successMsg
            ? 'c-success-modal c-success-modal--is-open'
            : 'c-success-modal'
        }
      >
        <div className="c-success-modal__inner" role="alert">
          <p className="c-success-modal__msg">
            Thank you for getting in touch.
            <br /> I&apos;ll respond shortly.
          </p>

          <button
            type="button"
            className="o-btn"
            onClick={handleSuccessBtnClick}
          >
            OK
          </button>
        </div>
      </div>
      <h3 className="h-offscreen" id="form-label">
        Contact form
      </h3>
      <form
        name="portfolio-form"
        method="post"
        onSubmit={handleSubmit}
        id="jsForm"
        className="c-contact-form"
        noValidate
        aria-labelledby="form-label"
      >
        {/* For Netlify form submissions */}
        <input type="hidden" name="form-name" value="portfolio-form" />
        <div className="l-contact-form-grid">
          <div>
            <label htmlFor="full-name">
              Your full name
              <span
                className="c-contact-form__label-asterisk"
                aria-hidden="true"
              >
                *
              </span>
            </label>
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
              role="alert"
            >
              {fullName.values.errorMsg}
            </label>
          </div>

          <div>
            <label htmlFor="pref-name">
              What can I call you?
              <span
                className="c-contact-form__label-asterisk"
                aria-hidden="true"
              >
                *
              </span>
            </label>
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
              role="alert"
            >
              {prefName.values.errorMsg}
            </label>
          </div>

          <div>
            <label htmlFor="email">
              Your email
              <span
                className="c-contact-form__label-asterisk"
                aria-hidden="true"
              >
                *
              </span>
            </label>
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
              role="alert"
            >
              {email.values.errorMsg}
            </label>
          </div>

          <div>
            <label htmlFor="subject">
              Subject
              <span
                className="c-contact-form__label-asterisk"
                aria-hidden="true"
              >
                *
              </span>
            </label>
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
              role="alert"
            >
              {subject.values.errorMsg}
            </label>
          </div>

          <div className="l-contact-form-grid__item">
            <p id="employer-group">
              Are you a potential employer (or writing on behalf of a company)?
              <span
                className="c-contact-form__label-asterisk"
                aria-hidden="true"
              >
                *
              </span>
            </p>
            <div
              role="radiogroup"
              aria-labelledby="employer-group"
              tabIndex="0"
            >
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
                onClick={handleRadioClick}
              />{' '}
              <label htmlFor="employer-no">No</label>
            </div>
          </div>

          <div>
            <label htmlFor="company-name">
              Company name
              <span
                className={
                  checked === 'yes'
                    ? 'c-contact-form__label-asterisk'
                    : 'c-contact-form__label-asterisk c-contact-form__label-asterisk--hide'
                }
                aria-hidden="true"
              >
                *
              </span>
            </label>
            <input
              className="c-contact-form__input"
              type="text"
              name="company-name"
              id="company-name"
              size="30"
              maxLength="100"
              required
              disabled={checked === 'no'}
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
              role="alert"
            >
              {checked === 'yes' ? companyName.values.errorMsg : ''}
            </label>
          </div>

          <div>
            <label htmlFor="company-url">Company website</label>
            <input
              className="c-contact-form__input"
              type="url"
              name="company-url"
              id="company-url"
              size="30"
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
              role="alert"
            >
              {checked === 'yes' ? companyUrl.values.errorMsg : ''}
            </label>
          </div>

          <div className="l-contact-form-grid__item">
            <label htmlFor="message">
              Your message
              <span
                className="c-contact-form__label-asterisk"
                aria-hidden="true"
              >
                *
              </span>
            </label>
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
            disabled={!validateAllFields(checked, inputsToValidate, message)}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

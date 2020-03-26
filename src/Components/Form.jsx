import React, { useState } from 'react';
import { validateField, validateTextarea } from '../Utils';

/* todo: https://reactjs.org/docs/uncontrolled-components.html#default-values */
// fixme: add tooLong? browser compatibility for preventing longer input?

// fixme: add default message for invalid

// fixme: eslint last comma in the object - change this setting

function useFormInput() {
  const initialValue = {
    value: '',
    valid: false,
    touched: false,
    errorMsg: '',
  };

  const [values, setValues] = useState(initialValue);

  function handleChange(e) {
    setValues({
      value: e.target.value,
      valid: e.target.validity.valid,
      touched: true,
      errorMsg: '',
    });
  }

  function handleBlur(e) {
    // touched means smt was typed in (rather than just clicked on or tabbed through)
    const { touched } = values;
    if (!touched) return;

    const errorMsg = validateField(e.target);

    setValues({ ...values, errorMsg });
  }

  return {
    values,
    handleChange,
    handleBlur,
  };
}

function Form() {
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

  return (
    <form
      action="mailto:aga.labonarska@outlook.com"
      encType="text/plain"
      method="post"
      id="jsForm"
      className="c-form"
      noValidate
    >
      <div className="l-form-grid">
        <div>
          <label htmlFor="full-name">Your full name:</label>
          <input
            className="c-form__input"
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
            className="c-form__label s1"
            htmlFor="full-name"
            // 'assertive' because this field will validate on blur  todo: test?
            aria-live="assertive"
          >
            {fullName.values.errorMsg}
          </label>
        </div>

        <div>
          <label htmlFor="pref-name">What can I call you?</label>
          <input
            className="c-form__input"
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
            className="c-form__label s1"
            htmlFor="pref-name"
            aria-live="assertive"
          >
            {prefName.values.errorMsg}
          </label>
        </div>

        <div>
          <label htmlFor="email">Your email:</label>
          <input
            className="c-form__input"
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
            className="c-form__label s1"
            htmlFor="email"
            aria-live="assertive"
          >
            {email.values.errorMsg}
          </label>
        </div>

        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            className="c-form__input"
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
            className="c-form__label"
            htmlFor="subject"
            aria-live="assertive"
          >
            {subject.values.errorMsg}
          </label>
        </div>

        <div
          className="l-form-grid__item"
          role="radiogroup"
          aria-labelledby="employer-group"
        >
          {/* <div class="l-form-grid__item" id="js-radio-btns"> */}
          {/* <!-- todo: check wai aria  */}
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
          />
          <label htmlFor="employer-yes">Yes</label>
          <input
            type="radio"
            name="employer"
            id="employer-no"
            value="no"
            required
            onClick={handleRadioClick}
          />
          <label htmlFor="employer-no">No</label>
        </div>

        <div>
          <label htmlFor="company-name">Company name:</label>
          <input
            className="c-form__input"
            type="text"
            name="company-name"
            id="company-name"
            size="30"
            maxLength="100"
            required
            disabled={checked === 'no'}
            value={companyName.values.value}
            onChange={companyName.handleChange}
            onBlur={companyName.handleBlur}
          />
          <label
            className="c-form__label s1"
            htmlFor="company-name"
            aria-live="assertive"
          >
            {checked === 'yes' ? companyName.values.errorMsg : ''}
          </label>
        </div>

        <div>
          <label htmlFor="company-url">Company website:</label>
          <input
            className="c-form__input"
            type="url"
            name="company-url"
            id="company-url"
            size="30"
            required
            disabled={checked === 'no'}
            value={companyUrl.values.value}
            onChange={companyUrl.handleChange}
            onBlur={companyUrl.handleBlur}
          />
          <label
            className="c-form__label s1"
            htmlFor="company-url"
            aria-live="assertive"
          >
            {checked === 'yes' ? companyUrl.values.errorMsg : ''}
          </label>
        </div>

        <div className="l-form-grid__item">
          <label htmlFor="message">Your message:</label>
          <textarea
            className="o-textarea c-form__input"
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
            className="c-form__counter s1"
            htmlFor="message"
            // 'polite' because this field will validate onChange
            aria-live="polite"
          >
            {message.infoMsg}
          </label>
        </div>
      </div>

      <div className="u-text-right">
        {/* todo: when submitting make sure that disabled input validity doesnt matter */}

        <button type="submit" className="o-btn" disabled={true}>
          Send
        </button>
      </div>
    </form>
  );
}

export default Form;

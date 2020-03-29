// todo: jsDoc comments?

export function getNextIndex(currentIndex, list) {
  if (currentIndex < list.length - 1) {
    return currentIndex + 1;
  }
  return 0;
}

export function getPreviousIndex(currentIndex, list) {
  if (currentIndex > 0) {
    return currentIndex - 1;
  }
  return list.length - 1;
}

export function validateField(field) {
  const { valid } = field.validity;

  if (!valid) {
    const inputType = field.getAttribute('type');
    const { valueMissing, typeMismatch, tooLong } = field.validity;

    if (valueMissing) {
      if (inputType === 'email') {
        return 'Please enter your email address.';
      }
      return 'Please fill out this field.';
    }

    if (typeMismatch) {
      return `Please enter a correct ${inputType} format.`;
    }

    if (tooLong) {
      const maxLength = field.getAttribute('maxlength');
      const inputValue = field.getAttribute('value');
      return `The maximum length for this field is ${maxLength} characters.
      You are currently using ${inputValue.length} characters`;
    }
    return 'The value you entered for this field is invalid.';
  }
  return '';
}

export function validateTextarea(textarea) {
  const { valid } = textarea.validity;

  if (!valid) {
    const { valueMissing, tooShort } = textarea.validity;
    if (valueMissing || tooShort) {
      return 'Please, fill out this field - at least say "hi" :).';
    }
    return 'The value you entered for this field is invalid.';
  }
  return '';
}

// fixme: move from utils
export function getCompanyLabelClassName(enabled, errorMsg) {
  if (enabled === 'yes') {
    if (errorMsg !== '') return 'c-contact-form__error-label s1 show';
    return 'c-contact-form__error-label s1';
  }
  return 'c-contact-form__error-label s1';
}

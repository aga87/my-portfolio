/**
 * Validates a form field using Constraint Validation API
 * @param {HTML Element} field to validate
 * @returns a custom error message
 */

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
/**
 * Validates a textarea using Constraint Validation API
 * @param {HTML Textarea Element} textarea to validate
 * @returns a custom error message
 */

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

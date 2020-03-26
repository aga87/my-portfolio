/**
 * // todo:
 * Get the index of the next element in a list
 * @param {Number} currentIndex
 * @param {*} list - an array or nodeList
 */
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
  // const inputType = field.getAttribute('type');
  const { valid } = field.validity;

  if (!valid) {
    const inputType = field.getAttribute('type');
    const { valueMissing, typeMismatch } = field.validity;

    if (valueMissing) {
      if (inputType === 'email') {
        return 'Please enter your email address.';
      }
      return 'Please fill out this field.';
    }

    if (typeMismatch) {
      return `Please enter a correct ${inputType} format.`;
    }
  }
  return '';
}

export function validateTextarea(textarea) {
  const { valid } = textarea.validity;

  if (!valid) {
    const { valueMissing, tooShort } = textarea.validity;
    if (valueMissing || tooShort) {
      return 'Please, fill out this field - at least say "hi":).';
    }
  }
  return '';
}

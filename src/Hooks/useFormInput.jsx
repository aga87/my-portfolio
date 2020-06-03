import { useState } from 'react';
import { validateField } from '../Utils';

function useFormInput(initialValue) {
  // const initialValue = {
  //   value: '',
  //   valid: false,
  //   touched: false,
  //   errorMsg: '',
  // };

  const [values, setValues] = useState(initialValue);

  //fixme:
  function resetField() {
    setValues(initialValue);
  }

  function handleChange(e) {
    setValues({
      value: e.target.value,
      valid: e.target.validity.valid,
      touched: true,
      errorMsg: '',
    });
  }

  function handleBlur(e) {
    const { touched } = values;
    // Do not validate if nothing was typed in (the input was only clicked on or tabbed through)
    if (!touched) return;
    const errorMsg = validateField(e.target);
    setValues({ ...values, errorMsg });
  }

  return {
    values,
    handleChange,
    handleBlur,
    //fixme:
    resetField,
  };
}

export default useFormInput;

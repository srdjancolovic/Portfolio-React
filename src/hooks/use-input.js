import { useState } from 'react';

const useInput = (validteInput) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setisTouched] = useState(false);

  const valueIsValid = validteInput(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangetHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setisTouched(true);
  };
  const resetValues = () => {
    setEnteredValue('');
    setisTouched('');
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangetHandler,
    inputBlurHandler,
    resetValues,
  };
};

export default useInput;

// const valideteMail = (email) => {
//   if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
//     return true;
//   } else {
//     return false;
//   }
// };
// value.trim().includes('@') && value.trim().length > 3

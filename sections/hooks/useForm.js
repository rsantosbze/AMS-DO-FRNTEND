import { useState } from 'react';

export function useForm(
  initialState = {},
  validations = [],
  onSubmit = () => {}
) {
  // Add the 'onSubmit' argument
  const { isValid: initialIsValid, errors: initialErrors } = validate(
    validations,
    initialState
  );

  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setValid] = useState(initialIsValid);
    const [touched, setTouched] = useState({});
    let newValues = {};

    const changeHandler = (event, fieldName = '', isDate=false) => {
    if (event._isAMomentObject | isDate) {
         newValues = { ...values, [fieldName]: event._d};
         setTouched({ ...touched, [fieldName]: true });
         setValues(newValues);
    } else {
        newValues = { ...values, [event.target.name]: event.target.value };
        setTouched({ ...touched, [event.target.name]: true });
          setValues(newValues);
    }

    const { isValid, errors } = validate(validations, newValues);
  
    setValid(isValid);
    setErrors(errors);
   
  };
  // Add this
  const submitHandler = (event) => {
    event.preventDefault();
    onSubmit(values);
  };
  return { values, changeHandler, isValid, errors, touched, submitHandler }; // Add 'submitHandler'
}

function validate(validations, values) {
  const errors = validations
    .map((validation) => validation(values))
    .filter((validation) => typeof validation === 'object');
  return {
    isValid: errors.length === 0,
    errors: errors.reduce((errors, error) => ({ ...errors, ...error }), {}),
  };
}
//   function isRequired(value) {
//     return value != null && value.trim().length > 0;
//   }

//   function isSame(value1, value2) {
//     return value1 === value2;
//   }

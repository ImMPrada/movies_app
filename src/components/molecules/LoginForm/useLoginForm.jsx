import React, { useState, useEffect } from 'react';
import { validationSchema } from './validations.js'


const useLoginForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(() => {
    const tempErrors = {}
    Object.keys(values).forEach(key => tempErrors[key] = null)
    return tempErrors
  })


  // Private

  const runValidations = (validations, value) => {
    
    return validations.map(validation => {
      const isError = validation.validationFunction(value)
      return isError ? validation.prompt : isError
    })

  }

  const getErrorMessage = (validationResults) => validationResults.filter(result => result != false)[0] || null


  // Public

  const updateField = (field, value) => {
    const currentErrors = errors

    const validationResults = runValidations(validationSchema[field].validations, value)
    currentErrors[field] = getErrorMessage(validationResults)
    setErrors({...currentErrors})
  }


  return {
    values,
    errors,
    updateField,
  }
}

export default useLoginForm;

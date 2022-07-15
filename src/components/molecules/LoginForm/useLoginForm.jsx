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

  const getErrorMessage = (validationResults) => (validationResults.filter(result => result != false)[0] || null)

  const validateForm = () => {
    const currentErrors = errors
    const results = []

    Object.keys(values).forEach(field => {
      const value = values[field]
      const validationResults = runValidations(validationSchema[field].validations, value)
      const errorMessaage = getErrorMessage(validationResults)

      currentErrors[field] = errorMessaage
      if(errorMessaage){results.push(errorMessaage)}
    })
    
    setErrors({...currentErrors})
    return results.length === 0
  }


  // Public

  const updateField = (field, value) => {
    const currentErrors = errors
    const currentValues = values
    const validationResults = runValidations(validationSchema[field].validations, value)

    currentValues[field] = value
    setValues({...currentValues})
    currentErrors[field] = getErrorMessage(validationResults)
    setErrors({...currentErrors})
  }

  const submitForm = (form) => {
    if(validateForm()) form.submit()
  }


  return {
    values,
    errors,
    updateField,
    submitForm,
  }
}

export default useLoginForm;

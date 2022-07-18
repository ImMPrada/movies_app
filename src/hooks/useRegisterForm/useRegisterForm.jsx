import React, { useState, useEffect } from 'react';
import { validationSchema } from './validations.js'


const useRegisterForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(() => {
    const tempErrors = {}
    Object.keys(values).forEach(key => tempErrors[key] = null)
    return tempErrors
  })


  // Private

  const runValidations = (validations, value) => (
    validations.map(validation => {
      const isError = validation.validationFunction(value)
      return isError ? validation.prompt : isError
    })
  )

  const getErrorMessage = (validationResults) => (validationResults.filter(result => result)[0])

  const runMultipleFieldValidations = () => {
    const validations = validationSchema.multipleFields
    const errors = {}

    validations.forEach(validation => {
      const valuesArray = validation.fields.map(field => values[field])
      const validationsResult = validation.validations.map(validation => validation.validationFunction(valuesArray) ? false : validation.prompt)
      validation.fields.map(field => errors[field] = getErrorMessage(validationsResult))
    })

    return errors
  }

  const mergeErrors = (mainErrors, secondErrors) => {
    Object.keys(mainErrors).forEach(key =>{
      mainErrors[key] =  secondErrors[key] || mainErrors[key]
    })

    return mainErrors
  }

  const validateForm = () => {
    const currentErrors = {...errors}
    const results = []
    
    const multipleFieldErrors = runMultipleFieldValidations()

    Object.keys(values).forEach(field => {
      const value = values[field]
      const validationResults = runValidations(validationSchema.fieldByField[field].validations, value)
      const errorMessaage = getErrorMessage(validationResults)

      currentErrors[field] = multipleFieldErrors[field] || errorMessaage
      if(errorMessaage) results.push(errorMessaage)
    })
   
    setErrors(currentErrors)
    return results.length === 0
  }


  // Public

  const updateField = (field, value) => {
    const currentErrors = {...errors}
    const currentValues = {...values}
    const validationResults = runValidations(validationSchema.fieldByField[field].validations, value)

    currentValues[field] = value
    setValues(currentValues)
    currentErrors[field] = getErrorMessage(validationResults)
    setErrors(currentErrors)
  }

  const submitForm = (e) => {
    const form = e.target
    
    e.preventDefault()
    if(validateForm()) form.submit()
  }


  return {
    values,
    errors,
    updateField,
    submitForm,
  }
}

export default useRegisterForm;

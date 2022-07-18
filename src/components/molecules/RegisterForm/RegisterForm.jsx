import React, { useState, useEffect } from 'react';
import {
  InputBox,
  Button,
} from '../../atoms';
import { useRegisterForm } from '../../../hooks';
import './styles.scss';

const formInitialValues = {
  regEmail: '',
  password1: '',
  password2: '',
}


const RegisterForm = ({}) => {
  const {
    values,
    errors,
    updateField,
    submitForm,
  } = useRegisterForm(formInitialValues);

  useEffect(() => {console.log(errors)}, [errors])

  return (
    <div className="register-form">
      <h3 className="register-form__title">
        Sign Up
      </h3>
      <form
        id='registerForm'
        className='login-form__form'
        onSubmit={(e) => submitForm(e)}
      >
        <InputBox 
          id="regEmail"
          placeHolderText="Email address"
          type="text"
          value={values.regEmail}
          onBlur={() => updateField('regEmail', regEmail.value)}
          errorText={errors.regEmail}
        />
        <InputBox 
          id="password1"
          placeHolderText="Password"
          type="password"
          value={values.password1}
          onBlur={() => updateField('password1', password1.value)}
          errorText={errors.password1}
        />
        <InputBox 
          id="password2"
          placeHolderText="Repeat password"
          type="password"
          value={values.password2}
          onBlur={() => updateField('password2', password2.value)}
          errorText={errors.password2}
        />
        <Button
          prompt='Create an account'
          type='submit'
        />
      </form>
      <div className="register-form__note">
        Already have an account? <a href="/login">Login</a>
      </div>
    </div>
  )
};

export default RegisterForm;

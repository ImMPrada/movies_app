import React, { useState, useEffect } from 'react';
import {
  InputBox,
  Button,
} from '../../atoms';
import useLoginForm from './useLoginForm';
import './styles.scss';

const formInitialValues = {
  userEmail: '',
  password: '',
}

const LoginForm = ({}) => {
  const {
    values,
    errors,
    updateField,
    submitForm,
  } = useLoginForm(formInitialValues);

  useEffect(() => {
    console.log(values)
    console.log(errors)
  }, [values, errors])


  return (
    <div className="login-form">
      <h3 className="login-form__title">
        Login
      </h3>
      <form
        id="loginForm"
        className="login-form__form"
        onSubmit={(e) => e.preventDefault()}
      >
        <InputBox 
          id="userEmail"
          placeHolderText="Email address"
          type="text"
          value={values.userEmail}
          onBlur={() => updateField("userEmail", userEmail.value)}
          errorText={errors.userEmail}
        />
        <InputBox
          id="password"
          placeHolderText="Password"
          type="password"
          value={values.password}
          onBlur={() => updateField("password", password.value)}
          errorText={errors.password}
        />
        <Button
          prompt="Login to your account"
          onClick={() => submitForm(loginForm)}
        />
      </form>
      <div className="login-form__note">
        Don't have an account? <a href="/signup">Sign Up</a>
      </div>
    </div>
  )
};

export default LoginForm;

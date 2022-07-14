import React, { useState, useEffect } from 'react';
import {
  InputBox,
  Button,
} from '../../atoms';
import './styles.scss';

const RegisterForm = ({}) => {
  const formSubmit = (e) => {
    console.log(e)
  }

  return (
    <div className="register-form">
      <h3 className="register-form__title">
        Sign Up
      </h3>
      <form
        className="register-form__form"
        action=""
        onSubmit={() => formSubmit({
          email: regEmail.value,
          password: password1.value,
          passwordChecked: password1.value === password2.value,
        })}  
      >
        <InputBox 
          id="regEmail"
          placeHolderText="Email address"
          type="text"
        />
        <InputBox
          id="password1"
          placeHolderText="Password"
          type="password"
        />
        <InputBox
          id="password2"
          placeHolderText="Repeat password"
          type="password"
        />
        <Button
          prompt="Create an account"
        />
      </form>
      <div className="register-form__note">
        Already have an account? <a href="#">Login</a>
      </div>
    </div>
  )
};

export default RegisterForm;

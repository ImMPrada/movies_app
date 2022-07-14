import React, { useState, useEffect } from 'react';
import {
  InputBox,
  Button,
} from '../../atoms';
import './styles.scss';

const LoginForm = ({}) => {
  const formSubmit = (e) => {
    console.log(e)
  }

  return (
    <div className="login-form">
      <h3 className="login-form__title">
        Login
      </h3>
      <form
        className="login-form__form"
        action=""
        onSubmit={() => formSubmit({
          email: userEmail.value,
          password: password.value,
        })}  
      >
        <InputBox 
          id="userEmail"
          placeHolderText="Email address"
          type="text"
        />
        <InputBox
          id="password"
          placeHolderText="Password"
          type="password"
        />
        <Button
          prompt="Login to your account"
        />
      </form>
      <div className="login-form__note">
        Don't have an account? <a href="#">Sign Up</a>
      </div>
    </div>
  )
};

export default LoginForm;

import React, { useState, useEffect } from 'react';
import {
  UserLogForm
} from '../../templates';
import {
  LoginForm
} from '../../molecules';
import './styles.scss';

const UserLoginForm = ({}) => {

  return (
    <UserLogForm>
      <LoginForm />
    </UserLogForm>
  )
};

export default UserLoginForm;

import React, { useState, useEffect } from 'react';
import {
  UserLogForm
} from '../../templates';
import {
  RegisterForm
} from '../../molecules';
import './styles.scss';

const UserRegisterForm = ({}) => {

  return (
    <UserLogForm>
      <RegisterForm />
    </UserLogForm>
  )
};

export default UserRegisterForm;

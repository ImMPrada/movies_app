import React, { useState, useEffect } from 'react';
import {
  RegisterForm,
} from '../../molecules';
import {
  Movie,
} from '../../../assets/icons'
import './styles.scss';

const UserLogForm = ({}) => {

  return (
    <div className="user-log-form">
      <div className="user-log-form__logo">
        <Movie />
      </div>
      <RegisterForm />
    </div>
  )
};

export default UserLogForm;

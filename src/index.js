import React from 'react';
import ReactDOM from 'react-dom/client';
import {UserLogForm} from './components/organisms'
import {
  UserLoginForm,
  UserRegisterForm,
} from './components/pages';
import './assets/styles/reset.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserLoginForm />
    <UserRegisterForm />
  </React.StrictMode>
);

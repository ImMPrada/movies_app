import React from 'react';
import ReactDOM from 'react-dom/client';
import {RegisterForm} from './components/molecules';
import {UserLogForm} from './components/organisms'
import './assets/styles/reset.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserLogForm />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import {RegisterForm} from './components/molecules';
import './assets/styles/reset.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RegisterForm />
  </React.StrictMode>
);

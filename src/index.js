import React from 'react';
import ReactDOM from 'react-dom/client';
import {InputField} from './components/atoms'
import './assets/styles/reset.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <InputField />
  </React.StrictMode>
);

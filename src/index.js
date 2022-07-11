import React from 'react';
import ReactDOM from 'react-dom/client';
import {InputBox} from './components/atoms'
import './assets/styles/reset.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <InputBox />
  </React.StrictMode>
);

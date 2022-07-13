import React from 'react';
import ReactDOM from 'react-dom/client';
import {InputBox, Button} from './components/atoms'
import './assets/styles/reset.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <InputBox 
      placeHolderText="An example of placeholder"
      errorText="An error message"
    />
    <Button
      prompt="Login to your account"
    />
  </React.StrictMode>
);

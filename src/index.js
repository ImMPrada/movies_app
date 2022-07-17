import React from 'react';
import ReactDOM from 'react-dom/client';
import {Thumbnail} from './components/atoms'
import './assets/styles/reset.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Thumbnail/>
  </React.StrictMode>
);

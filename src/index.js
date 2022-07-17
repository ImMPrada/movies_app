import React from 'react';
import ReactDOM from 'react-dom/client';
import {Thumbnail} from './components/atoms'
import './assets/styles/reset.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Thumbnail 
      imgSource='https://html.com/wp-content/uploads/flamingo.webp'
      markable
    />
    <br/>
    <Thumbnail 
      imgSource='https://html.com/wp-content/uploads/flamingo.webp'
      markable
      isMarked
    />
    <br/>
    <Thumbnail 
      imgSource='https://html.com/wp-content/uploads/flamingo.webp'
      playable
    />
  </React.StrictMode>
);

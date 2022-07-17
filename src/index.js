import React from 'react';
import ReactDOM from 'react-dom/client';
import {Thumbnail} from './components/atoms'
import './assets/styles/reset.scss';
import './assets/styles/temporary.scss'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <br/>
    <br/>
    <h2> Thumbnail not bookmarked:</h2>
    <br/>
    <Thumbnail 
      imgSource='https://html.com/wp-content/uploads/flamingo.webp'
      markable
    />
    <br/>
    <br/>
    <h2> Thumbnail bookmarked:</h2>
    <br/>
    <Thumbnail 
      imgSource='https://html.com/wp-content/uploads/flamingo.webp'
      markable
      isMarked
    />
    <br/>
    <br/>
    <h2> Thumbnail of a playable:</h2>
    <br/>
    <Thumbnail 
      imgSource='https://html.com/wp-content/uploads/flamingo.webp'
      playable
    />
  </React.StrictMode>
);

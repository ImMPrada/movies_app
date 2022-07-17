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
      imgSource='https://i.blogs.es/8f3d2e/_adult_swim____rick_and_morty_season_5_finale_promo_0_28_screenshot.0/840_560.jpeg'
      markable
    />
    <br/>
    <br/>
    <h2> Thumbnail bookmarked:</h2>
    <br/>
    <Thumbnail 
      imgSource='https://i.blogs.es/8f3d2e/_adult_swim____rick_and_morty_season_5_finale_promo_0_28_screenshot.0/840_560.jpeg'
      markable
      isMarked
    />
    <br/>
    <br/>
    <h2> Thumbnail of a playable:</h2>
    <br/>
    <Thumbnail 
      imgSource='https://i.blogs.es/8f3d2e/_adult_swim____rick_and_morty_season_5_finale_promo_0_28_screenshot.0/840_560.jpeg'
      playable
    />
  </React.StrictMode>
);

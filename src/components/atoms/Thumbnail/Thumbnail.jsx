import React, { useState, useEffect } from 'react';
import {
  PlayVideo,
  Bookmark,
} from '../../../assets/icons';
import './styles.scss'

const playableOverlay = (
  <div className="thumbnail__overlay--playable">
    <button>
      <PlayVideo />
    </button>
  </div>
)

const markableOverlay = (isMarked) => (
  <div className={`thumbnail__overlay--markable ${isMarked ? 'thumbnail__overlay--marked' : '' }`}>
    <button>
      <Bookmark />
    </button>
  </div>
)


const Thumbnail = ({
  id,
  imgSource,
  playable,
  markable,
  isMarked,
}) => {


  const setOverlayType = (playable, markable) => {
    if(playable) return playableOverlay
    if(markable) return markableOverlay(isMarked)
  }

  return (
    <div className='thumbnail'>
      {setOverlayType(playable, markable)}
      <div className="thumbnail__base">
        <img  src={imgSource} alt='' />
      </div>
    </div>
  )
};

export default Thumbnail;

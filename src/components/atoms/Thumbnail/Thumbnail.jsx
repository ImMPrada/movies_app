import React, { useState, useEffect } from 'react';
import {
  PlayVideo,
  BookMark,
} from '../../../assets/icons';
import './styles.scss'

const Thumbnail = ({
  id,
  imgSource,
  playable,
  markable,
  isMarked,
}) => {

  const playableOverlay = (
    <div className="thumbnail__overlay--playable">
      <button>
        <PlayVideo />
      </button>
    </div>
  )

  const markableOverlay = (
    <div className={`thumbnail__overlay--markable ${isMarked ? 'thumbnail__overlay--marked' : '' }`}>
      <button>
        <BookMark />
      </button>
    </div>
  )

  const setOverlayType = (playable, markable) => {
    if(playable) return playableOverlay
    if(markable) return markableOverlay
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

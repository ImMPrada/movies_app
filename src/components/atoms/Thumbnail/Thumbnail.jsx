import React, { useState, useEffect } from 'react';
import {PlayVideo} from '../../../assets/icons';
import './styles.scss'

const Thumbnail = ({
  id,
  imgSource,
}) => {


  return (
    <>
    <PlayVideo />
    <div className='thumbnail'>
      <div className="thumbnail__overlay--active">
        <button>
          <PlayVideo />
        </button>
      </div>
      <div className="thumbnail__base">
        <img  src={imgSource} alt='' />
      </div>
    </div>
    </>


  )
};

export default Thumbnail;

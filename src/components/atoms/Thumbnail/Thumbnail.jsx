import React, { useState, useEffect } from 'react';
import './styles.scss'

const Thumbnail = ({
  id,
  imgSource,
}) => {


  return (
    <div className='thumbnail'>
      <div className="thumbnail__overlay--active">
        HOLA
      </div>
      <div className="thumbnail__base">
        <img  src={imgSource} alt='' />
      </div>
    </div>


  )
};

export default Thumbnail;

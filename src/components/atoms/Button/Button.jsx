import React, { useState, useEffect } from 'react';
import './styles.scss'

const Button = ({
  id,
  prompt,
  onClick,
}) => {
  const [globalState, setGlobalState] = useState('onBlur');


  return (
    <button 
      className="button"
      onClick={onClick}  
    >
      {prompt}
    </button>
  )
};

export default Button;

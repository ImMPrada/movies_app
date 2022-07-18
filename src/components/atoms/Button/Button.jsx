import React, { useState, useEffect } from 'react';
import './styles.scss'

const Button = ({
  id,
  prompt,
  onClick,
  type,
}) => {
  const [globalState, setGlobalState] = useState('onBlur');


  return (
    <button 
      className="button"
      type={type}
      onClick={onClick}  
    >
      {prompt}
    </button>
  )
};

export default Button;

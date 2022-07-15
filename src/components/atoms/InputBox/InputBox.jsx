import React, { useState, useEffect } from 'react';
import './styles.scss'

const InputBox = ({
  id,
  placeHolderText,
  errorText,
  onFocus,
  onBlur,
  value,
  type,
}) => {
  const [globalState, setGlobalState] = useState('onBlur');

  useEffect(()=>{
    if(!errorText) return

    setGlobalState('onError')
  }, [errorText])

  return (

    <div 
      className={'input-field ' + globalState}
      onClick={() => document.getElementById(id).focus()}
    >
      <input
        id={id} 
        type={type} 
        className="input-field__input"
        placeholder={placeHolderText}
        defaultValue={value}
        onFocus={() => {
          onFocus ? onFocus() : null
          setGlobalState('onFocus')
        }}
        onBlur={() => {
          onBlur ? onBlur() : null
          setGlobalState('onBlur')
        }} 
      />
      {(errorText) && (
        <span className="input-field__error">
          {errorText}
        </span>
      )}
    </div>
  )
};

export default InputBox;

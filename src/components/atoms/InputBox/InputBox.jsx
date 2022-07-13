import React, { useState, useEffect } from 'react';
import './styles.scss'

const InputBox = ({
  id,
  placeHolderText,
  errorText,
  type,
}) => {
  const [globalState, setGlobalState] = useState('onBlur');

  useEffect(()=>{
    if(!errorText) return

    console.log(errorText)
    setGlobalState('onError')
  }, [errorText])

  const changeStyle = (newState) => {
    if (newState === 'onBlur') {
      if(!errorText) return setGlobalState('onBlur')

      return setGlobalState('onError')
    }

    return setGlobalState('onFocus')
  }

  return (

    <div 
      className={'input-field ' + globalState}
      onClick={() => document.getElementById(id).focus()}
    >
      <input
        placeholder={placeHolderText}
        onFocus={() => changeStyle('onFocus')}
        onBlur={() => changeStyle('onBlur')} 
        className="input-field__input"
        id={id} 
        type={type} 
      />
      {(errorText) && (
        <span className="input-field__error">
          Error message
        </span>
      )}
    </div>
  )
};

export default InputBox;

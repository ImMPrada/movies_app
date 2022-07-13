import React, { useState, useEffect } from 'react';
import './styles.scss'

const InputBox = ({
  id,
  placeHolderText,
  errorText,
}) => {
  const [globalState, setGlobalState] = useState('onBlur');
  useEffect(()=>{
    if(!errorText) return

    setGlobalState('onError')
  }, [errorText])
  return (

    <div className={'input-field ' + globalState}>
      <input
        onFocus={() => setGlobalState('onFocus')}
        onBlur={() => setGlobalState('onBlur')} 
        className="input-field__input"
        id={id} 
        placeHolder={placeHolderText} 
        type="text" 
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

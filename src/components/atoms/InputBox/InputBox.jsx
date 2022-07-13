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

    <div className={'input-field ' + globalState}>
      <input
        placeHolder={placeHolderText}
        onFocus={() => changeStyle('onFocus')}
        onBlur={() => changeStyle('onBlur')} 
        className="input-field__input"
        id={id} 
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

import React, { useState, useEffect } from 'react';
import './styles.scss';

const INPUT_STATES = {
  blur: 'onBlur',
  error: 'onError',
  focus: 'onFocus'
}


const InputBox = ({
  id,
  placeHolderText,
  errorText,
  value,
  type,
  onBlur,
  onFocus,
}) => {
  const [globalState, setGlobalState] = useState(INPUT_STATES.blur);

  useEffect(()=>{
    if(!errorText) return

    setGlobalState(INPUT_STATES.error)
    if(errorText == '') setGlobalState(INPUT_STATES.blur)
  }, [errorText])

  useEffect(() => {
    if(!globalState) return

    if(globalState == INPUT_STATES.blur && errorText != null) setGlobalState(INPUT_STATES.error)
  }, [globalState])

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
          setGlobalState(INPUT_STATES.focus)
        }}
        onBlur={() => {
          onBlur ? onBlur() : null
          setGlobalState(INPUT_STATES.blur)
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

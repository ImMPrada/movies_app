import React from 'react';
import './styles.scss'

const InputBox = ({
  id,
  placeHolderText,
}) => (
<div className="input-field">
  <input 
    id={id} 
    placeHolder={placeHolderText} 
    type="text" 
  />
  <span>Error message</span>
</div>);

export default InputBox;

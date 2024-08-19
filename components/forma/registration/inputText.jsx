"use client";
import { useContext } from 'react';
import ContextForm from '../contextForm';

const InputText = (props) => {
  const context = useContext(ContextForm);
  return (
    <>
      <input className={props.styles.inputText}
        type="text"
        name="name"
        placeholder="введите ник"
        autoComplete="off"
        onChange={context.handleChangeInput}
        value={context.inputValues}
        />
    </>
  )
}

export default InputText

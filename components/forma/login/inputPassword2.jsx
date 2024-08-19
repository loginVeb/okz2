'use client'
import React, { useState } from 'react';

const InputPassword2 = (props) => {

  const [password2, setPassword2] = useState('');


  const handlePasswordChange2 = (event) => {
    setPassword2(event.target.value);
  };


  return (
    <>
       <input className={props.styles.inputPassword2}
        type="password"
        placeholder="повторите  пароль"
        autoComplete="off"
          name='password2'
        />

    </>
  )
}

export default InputPassword2

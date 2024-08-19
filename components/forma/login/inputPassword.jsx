'use client'
import { useContext} from 'react';
import ContextForm from '../contextForm';


const InputPassword = (props) => {

  const context = useContext(ContextForm);
  
  return (
    <>
      <input className={props.styles.inputPassword} 
      
        type="password"
        name="password"
        placeholder="введите пароль"
        autoComplete="off"
        onChange={context.handleChangePassword}
        value={context.inputPassword}
        />
    </>
  )
}

export default InputPassword

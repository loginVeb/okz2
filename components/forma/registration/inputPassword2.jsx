'use client'
import { useContext} from 'react';
import ContextForm from '../contextForm';

const InputPassword2 = (props) => {
const context = useContext(ContextForm);

  return (
    <>
       <input className={props.styles.inputPassword2}
        type="password"
        placeholder="повторите  пароль"
        autoComplete="off"
          name='password2'
          onChange={context.handleChangePassword2}
        value={context.inputPassword2}
        />
    </>
  )
}

export default InputPassword2

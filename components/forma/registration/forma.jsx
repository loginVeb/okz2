"use client";
import InputText from '@/components/forma/registration/inputText';
import InputPassword from '@/components/forma/registration/inputPassword';
import InputPassword2 from '@/components/forma/registration/inputPassword2';
import ErrorPass from '@/components/forma/registration/errorPass';
import ErrorName from '@/components/forma/registration/errorName';
import Button from "@/components/forma/registration/button";
import LinkComp from "@/components/forma/registration/link";
import ContextForm from '../contextForm';
import { useState, useEffect } from 'react';
//import { useAuth } from '../../../app/authContext.js'; 
const Forma = (props) => {
  const { styles } = props;

  const [inputValues, setInputValues] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputPassword2, setInputPassword2] = useState('');
  const [arePasswordsMatching, setArePasswordsMatching] = useState(true);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    console.log(inputValues);
  }, [inputValues]);

  useEffect(() => {
    console.log(inputPassword);
  }, [inputPassword]);

  useEffect(() => {
    console.log(inputPassword2);
    if (inputPassword2.length > 0 && inputPassword !== inputPassword2) {
      setArePasswordsMatching(false);
    } else if (inputPassword2.length > 0 && inputPassword === inputPassword2) {
      setArePasswordsMatching(true);
    }
  }, [inputPassword2, inputPassword]);

  const handleChangeInput = (event) => {
    setShowError(false); // Сбрасываем ошибку при начале ввода имени пользователя
    let inputValue = event.target.value;

    if (/[\s]/.test(inputValue)) {
      console.log("Пробелы не допускаются");
      return;
    }

    if (inputValue.length > 20) {
      console.log("Максимальное количество символов - 10");
      return;
    }
    setInputValues(inputValue);
  };

  const handleChangePassword = (event) => {
    setShowError(false); // Сбрасываем ошибку при начале ввода пароля
    let inputPassword = event.target.value;

    if (/[\s]/.test(inputPassword)) {
      console.log("Пробелы не допускаются");
      return;
    }

    if (inputPassword.length > 20) {
      console.log("Максимальное количество символов - 10");
      return;
    }
    setInputPassword(inputPassword);
  };

  const handleChangePassword2 = (event) => {
    setShowError(false); // Сбрасываем ошибку при начале ввода повторного пароля
    let inputPassword2 = event.target.value;

    if (/[\s]/.test(inputPassword2)) {
      console.log("Пробелы не допускаются");
      return;
    }

    if (inputPassword2.length > 20) {
      console.log("Максимальное количество символов - 10");
      return;
    }
    setInputPassword2(inputPassword2);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await checkUsernameAvailability(); 
    
    if (inputPassword !== inputPassword2 || showError) {
      return;
    }

    try {
      const response = await fetch('/api/registration/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: inputValues,
          password: inputPassword,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);

      setInputValues('');
      setInputPassword('');
      setInputPassword2('');
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const checkUsernameAvailability = async () => {
    try {
      const response = await fetch('/api/registration/checkUsername', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: inputValues }),
      });

      const data = await response.json();
      setShowError(!data.success);
    } catch (error) {
      console.error("Error checking username:", error);
    }
  };

  return (
    <ContextForm.Provider value={{ handleChangeInput, handleChangePassword, handleChangePassword2, inputValues, inputPassword, inputPassword2 }}>
      <form className={styles.forma} method="post" onSubmit={handleSubmit}>
        {showError && <ErrorName styles={styles} errorName={'такое имя уже есть'}/>}
        <InputText styles={styles} />
        <InputPassword styles={styles} />
        {inputPassword2.length > 0 && !arePasswordsMatching && <ErrorPass styles={styles} errortext={'Пароли не совпадают'} />}
        <InputPassword2 styles={styles} />
        <Button styles={styles}>регистрация</Button>
        <LinkComp styles={styles} patchUrl={'/'}>войти</LinkComp>
      </form>
    </ContextForm.Provider>
  );
};

export default Forma;
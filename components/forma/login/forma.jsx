"use client";
import InputText from '@/components/forma/login/inputText';
import InputPassword from '@/components/forma/login/inputPassword';
import ErrorNamePass from '@/components/forma/login/errorNamePass';
import Button from "@/components/forma/login/button";
import LinkComp from "@/components/forma/login/link";
import ContextForm from '../contextForm';
import { useState, useEffect } from 'react';

const Forma = (props) => {
  const { styles } = props;

  const [inputValues, setInputValues] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    console.log(inputValues);
  }, [inputValues]);

  useEffect(() => {
    console.log(inputPassword);
  }, [inputPassword]);

  const handleChangeInput = (event) => {
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: inputValues,
          password: inputPassword,
        }),
      });
     
      console.log('Status:', response.status);
  
      if (response.status === 200) { // Проверяем статус ответа на 200
        const data = await response.json();
        console.log("Server response:", data);
        
        if (data.success) {
          console.log('Аутентификация прошла успешно');
          window.location.href = '/mainPageChat';
          setShowError(false); 
        } else {
          console.log('Ошибка аутентификации');
          setShowError(true); 
        }
      } else if (response.status === 400) { // Обработка статуса 400
        console.error("Bad request during authentication:", response.statusText);
        setShowError(true); 
      } else {
        // Обработка других статусов ответа
        console.error("Unexpected status code:", response.status);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      setIsSubmitting(false);
    }
  
    console.log("Current showError value:", showError);
  };
  return (
    <ContextForm.Provider value={{ handleChangeInput, handleChangePassword, inputValues, inputPassword }}>
      <form className={styles.forma} onSubmit={handleSubmit} method="post">
        {showError && <ErrorNamePass styles={styles} errortext={'нет таких данных'} />}
        <InputText styles={styles} />
        <InputPassword styles={styles} />
        <Button styles={styles} disabled={isSubmitting}>войти</Button>
        <LinkComp styles={styles} patchUrl={'/registration'} >зарегистрация</LinkComp>
      </form>
    </ContextForm.Provider>
  );
};

export default Forma;
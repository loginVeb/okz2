"use client";
import InputText from '@/components/forma/login/inputText';
import InputPassword from '@/components/forma/login/inputPassword';
import Button from "@/components/forma/login/button";
import LinkComp from "@/components/forma/login/link";
import ContextForm from '../contextForm';
import { useState, useEffect } from 'react';

const Forma = (props) => {
  const { styles } = props;


  const [inputValues, setInputValues] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {

    console.log(inputValues);
  }, [inputValues]);

  useEffect(() => {
    console.log(inputPassword);
  }, [inputPassword]);

  const handleChangeInput = (event) => {
    let inputValue = event.target.value;
    // Проверяем, содержит ли значение пробелы
    if (/[\s]/.test(inputValue)) {
        console.log("Пробелы не допускаются");
        return; // Прекратите выполнение функции, если найден пробел
    }
    setInputValues(inputValue);
    console.log(inputValues);
};

const handleChangePassword = (event) => {
    let inputPassword = event.target.value;
    // Проверяем, содержит ли значение пробелы
    if (/[\s]/.test(inputPassword)) {
        console.log("Пробелы не допускаются");
        return; // Прекратите выполнение функции, если найден пробел
    }
    setInputPassword(inputPassword);
    console.log(inputPassword);
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

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);

      if (data.success) {
        // Обработка успешной аутентификации
        console.log('Аутентификация прошла успешно');
        window.location.href = '/mainPageChat';
      } else {
        // Обработка ошибки аутентификации
        console.log('Ошибка аутентификации');
      }
    } catch (error) {
      console.error("Error during authentication:", error);
    } finally {
      setIsSubmitting(false); // Сбросить в false после завершения запроса
    }
  };


  return (
    <ContextForm.Provider value={{ handleChangeInput, handleChangePassword, inputValues, inputPassword }}>
      <form className={styles.forma} onSubmit={handleSubmit}>
        <InputText styles={styles} />
        <InputPassword styles={styles} />
        <Button styles={styles} disabled={isSubmitting}>войти</Button>
        <LinkComp styles={styles} patchUrl={'/registration'} >зарегистрация</LinkComp>
      </form>
    </ContextForm.Provider>
  );
};

export default Forma;

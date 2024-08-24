'use client'
import React from 'react'
import styles from './mainPageChat.module.css'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '../authContext';
async function MainPageChat() {

  console.log(useAuth);
  const  { isAuthenticated } = useAuth(); // Убедитесь, что isAuthenticated  = useAuth(); // Убедитесь, что useAuth корректно экспортирован и импортирован
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/'); // Используйте replace вместо push для перенаправления, чтобы избежать добавления страницы в историю браузера
    }
  }, [isAuthenticated]);

  return (
    <div className={styles.mainPageChat}>MainPageChat</div>
  )
  }
export default MainPageChat;
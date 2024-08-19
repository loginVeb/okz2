

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handleAuth(req, res) {
    //console.log('Request received:', req.body);
  if (req.method === 'POST') {
    // Получаем данные пользователя из тела запроса
    const { name, password } = req.body;

    // Используем Prisma для поиска пользователя в базе данных
    const user = await prisma.user.findFirst({
        where: {
          AND: [
            { name: name },
            { password: password },
          ],
        },
      });

    if (user) {
      // Пользователь найден, отправляем ответ о успешной аутентификации
      res.status(200).json({ success: true, message: 'Пользователь найден' });
      res.redirect('/mainPageChat');
    } else {
      // Пользователь не найден, отправляем ответ об ошибке
      res.status(404).json({ success: false, message: 'Пользователь не найден' });
    }
  } else {
    // Метод запроса не поддерживается
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
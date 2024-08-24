import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handleAuth(req, res) {
  if (req.method === 'POST') {
    const { name, password } = req.body;

    // Проверка наличия имени пользователя в базе данных
    const existingUser = await prisma.user.findUnique({
      where: { name: name },
    });

    if (existingUser) {
      res.status(409).json({ success: false, message: 'Username already exists' });
      return;
    }

    // Создание нового пользователя, если имя не занято
    try {
      await prisma.user.create({
        data: {
          name,
          password,
        },
      });
      res.status(201).json({ success: true, message: 'User created' });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ success: false, message: 'Error creating user' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function checkUsername(req, res) {
  if (req.method === 'POST') {
    const { username } = req.body;
    const existingUser = await prisma.user.findUnique({
      where: { name: username },
    });

    if (existingUser) {
      res.status(409).json({ success: false, message: 'Username already exists' });
    } else {
      res.status(200).json({ success: true, message: 'Username available' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
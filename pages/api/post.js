import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function createUser(req, res) {
  if (req.method === 'POST') {
    const { name, password } = req.body;

    if (!name || !password) {
      return res.status(400).json({ success: false, error: 'Name and password are required' });
    }

    try {
      const result = await prisma.user.create({
        data: {
          name: name,
          password: password,
        },
      });
      res.status(200).json({ success: true, data: result });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
//createUser('ff','ddd')
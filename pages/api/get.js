const { PrismaClient } = require('@prisma/client');



const prisma = new PrismaClient()

async function apiGet() {
  const allAuth = await prisma.user.findMany()
  // console.log(allGender)
  await prisma.$disconnect();
  return allAuth
}



  export default apiGet;
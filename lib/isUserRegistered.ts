import { prisma } from "../db";

export async function isUserRegistered(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return user;
}

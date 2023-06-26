import { authConfig } from "./auth";
import { getServerSession } from "next-auth";

export default async function getUserId() {
  const session = await getServerSession(authConfig);
  const userId = await session?.user.id;

  return Number(userId);
}

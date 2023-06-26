import { getServerSession } from "next-auth";
import { authConfig } from "./auth";

export async function isLoggedIn() {
  const loggedIn = await getServerSession(authConfig)
  return loggedIn;
}

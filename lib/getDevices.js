import { getServerSession } from "next-auth";
import { authConfig } from "./auth";
import GET_DEVICES_BY_USER_ID from "./getDevicesByUserId";

export default async function getDevices() {
  const session = await getServerSession(authConfig);
  const userId = await session?.user.id;

  const data = await GET_DEVICES_BY_USER_ID(userId);

  return data?.data;
}

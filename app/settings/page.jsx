import { getDeviceTypes } from "./api";
import DeviceTypes from "./components/DeviceTypes";
import Devices from "./components/Devices";
import getDevices from "../../lib/getDevices.js";
import getUserId from "../../lib/getUserId";

export default async function Settings() {
  const deviceTypesData = await getDeviceTypes();
  const optionsData = await getDeviceTypes(true);
  const devices = await getDevices();
  const userId = await getUserId();

  return (
    <>
      <Devices data={devices} options={optionsData} userId={userId} />
      <DeviceTypes data={deviceTypesData} userId={userId} />
    </>
  );
}

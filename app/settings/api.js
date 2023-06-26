import GET_DEVICE_TYPES_BY_ID from "../../lib/getDeviceTypesById";
import getUserId from "../../lib/getUserId";

export async function getDeviceTypes(options) {
  const userId = await getUserId();

  const data = await GET_DEVICE_TYPES_BY_ID(userId);

  if (options) {
    let optionsData = await data?.data?.map((el) => {
      return { label: el.name, value: el.id };
    });

    return optionsData;
  }

  let newData = data?.data?.map((el) => {
    return { id: el.id, name: el.name, hourRate: el.hourRate };
  });

  return newData;
}

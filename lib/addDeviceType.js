import { ApiBaseUrl } from "../Services/Config";
import REQUEST from "../Services/Request";

export default async function ADD_DEVICE_TYPE(data) {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `deviceTypes`,
    data,
  }).catch((error) => console.log(error));
}

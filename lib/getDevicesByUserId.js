import { ApiBaseUrl } from "../Services/Config";
import REQUEST from "../Services/Request";

export default async function GET_DEVICES_BY_USER_ID(id) {
  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + `devices/${id}`,
  }).catch((error) => console.log(error));
}

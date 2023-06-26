import { ApiBaseUrl } from "../Services/Config";
import REQUEST from "../Services/Request";

export default async function GET_DEVICE_TYPES_BY_ID(id) {
  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + `/deviceTypes/${id}`,
  }).catch((error) => console.log(error));
}

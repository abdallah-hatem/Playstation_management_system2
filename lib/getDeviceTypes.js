import { ApiBaseUrl } from "../Services/Config";
import REQUEST from "../Services/Request";

export default async function GET_DEVICE_TYPES() {
  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + `/deviceTypes`,
  }).catch((error) => console.log(error));
}

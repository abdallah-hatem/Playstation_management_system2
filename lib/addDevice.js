import { ApiBaseUrl } from "../Services/Config";
import REQUEST from "../Services/Request";

export default async function ADD_DEVICE(data) {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `devices`,
    data,
  }).catch((error) => console.log(error));
}

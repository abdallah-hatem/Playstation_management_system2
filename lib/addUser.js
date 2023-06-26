import { ApiBaseUrl } from "../Services/Config";
import REQUEST from "../Services/Request";

export default async function ADD_USER(data) {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `auth/signup`,
    data,
  }).catch((error) => console.log(error));
}

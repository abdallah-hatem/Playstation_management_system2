import { ApiBaseUrl } from "../Services/Config";
import REQUEST from "../Services/Request";

export default async function DELETE_DEVICE(id) {
  return await REQUEST({
    method: "DELETE",
    url: ApiBaseUrl + `devices/${id}`,
  }).catch((error) => console.log(error));
}

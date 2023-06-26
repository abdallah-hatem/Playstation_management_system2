import { ApiBaseUrl } from "../Services/Config";
import REQUEST from "../Services/Request";

export default async function DELETE_DEVICE_TYPE(id) {
  return await REQUEST({
    method: "DELETE",
    url: ApiBaseUrl + `deviceTypes/${id}`,
  }).catch((error) => console.log(error));
}

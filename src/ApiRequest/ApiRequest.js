import axios from "axios";

const BaseURL = "https://jsonplaceholder.typicode.com";

//show menu on header
export async function users() {
  let res = await axios.get(BaseURL + "/users");
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}
// Axios
import axios from "axios";
// Axios

// Constants
import { AxiosV1_BaseUrl } from "./AxiosV1.constants";
// Constants

export const AxiosV1 = axios.create({
  baseURL: AxiosV1_BaseUrl,
});

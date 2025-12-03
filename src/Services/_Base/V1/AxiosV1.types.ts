// Axios
import { AxiosResponse } from "axios";
// Axios

export type T_AxiosV1Response<T> = Promise<
  AxiosResponse<{
    status: string;
    "message-type": string;
    "message-version": `${number}.${number}.${number}`;
    message: {
      facets: object;
      "total-results": number;
      items: T;
      "items-per-page": number;
      query: {
        "start-index": number;
        "search-terms": number | null;
      };
    };
  }>
>;

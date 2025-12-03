// Axios
import { AxiosV1 } from "@/Services/_Base/V1/AxiosV1";
// Axios

// Models
import { I_WorkAuthor } from "@/Models/Work/Work.interfaces";
// Models

// Types
import { T_AxiosV1Response } from "@/Services/_Base/V1/AxiosV1.types";
// Types

export const getAllAuthorsService = (): T_AxiosV1Response<I_WorkAuthor[]> => {
  return AxiosV1.get(
    "/works?filter=has-abstract:true,type:journal-article&rows=50&select=author,title"
  );
};

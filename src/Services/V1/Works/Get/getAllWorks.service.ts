// Axios
import { AxiosV1 } from "@/Services/_Base/V1/AxiosV1";
// Axios

// Interfaces
import { I_WorkArticle } from "@/Models/Work/Work.interfaces";
// Interfaces

// Types
import { T_AxiosV1Response } from "@/Services/_Base/V1/AxiosV1.types";
// Types

export const getAllWorksService = (): T_AxiosV1Response<I_WorkArticle[]> => {
  return AxiosV1.get(
    "/works?filter=from-pub-date:2024,type:journal-article&rows=25&select=DOI,title,author,published,abstract"
  );
};

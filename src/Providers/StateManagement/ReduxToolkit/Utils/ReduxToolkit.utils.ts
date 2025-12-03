// Types
import { I_ReduxAsyncBasicType } from "../Types/ReduxToolkit.types";
// Types

export function setIsPending<T extends object & I_ReduxAsyncBasicType>(
  data: T
): T {
  data.isPending = true;
  data.isDone = false;
  data.isError = false;
  return data;
}

export function setIsDone<T extends object & I_ReduxAsyncBasicType>(
  data: T
): T {
  data.isPending = false;
  data.isDone = true;
  data.isError = false;
  return data;
}

export function setIsError<T extends object & I_ReduxAsyncBasicType>(
  data: T
): T {
  data.isPending = false;
  data.isDone = false;
  data.isError = true;
  return data;
}

// Redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Redux

// Types
import { I_ReduxAsyncBasicType } from "../../Types/ReduxToolkit.types";
// Types

// Models
import { I_WorkAuthor } from "@/Models/Work/Work.interfaces";
// Models

// Services
import { getAllAuthorsService } from "@/Services/V1/Authors/Get/getAllAuthors.service";
// Services

// Utils
import {
  setIsPending,
  setIsDone,
  setIsError,
} from "../../Utils/ReduxToolkit.utils";
// Utils

const initialState: {
  allAuthors: I_ReduxAsyncBasicType & {
    data: I_WorkAuthor[];
  };
} = {
  allAuthors: {
    isDone: false,
    isError: false,
    isPending: true,
    data: [],
  },
};

export const getAsyncAllAuthors = createAsyncThunk(
  "Authors/getAll",
  async () => {
    try {
      const { data } = await getAllAuthorsService();
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

export const getAsyncAllAuthorsWithoutPending = createAsyncThunk(
  "Authors/getAllWithoutPending",
  async () => {
    try {
      const { data } = await getAllAuthorsService();
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

export const AuthorsSlice = createSlice({
  name: "Authors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //
    //
    //
    //
    //
    //
    builder.addCase(getAsyncAllAuthors.pending, (state) => {
      setIsPending(state.allAuthors);
    });
    builder.addCase(getAsyncAllAuthors.fulfilled, (state, action) => {
      setIsDone(state.allAuthors);
      state.allAuthors.data = action.payload?.message.items;
    });
    builder.addCase(getAsyncAllAuthors.rejected, (state) => {
      setIsError(state.allAuthors);
    });
    //
    //
    //
    //
    //
    //
    builder.addCase(getAsyncAllAuthorsWithoutPending.pending, () => {});
    builder.addCase(
      getAsyncAllAuthorsWithoutPending.fulfilled,
      (state, action) => {
        state.allAuthors.data = action.payload?.message.items;
      }
    );
    builder.addCase(getAsyncAllAuthorsWithoutPending.rejected, () => {});
    //
    //
    //
    //
    //
    //
  },
});

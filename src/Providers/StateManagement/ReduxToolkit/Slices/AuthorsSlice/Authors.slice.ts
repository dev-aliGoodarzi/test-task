// Redux
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// Redux

// Types
import { I_ReduxAsyncBasicType } from "../../Types/ReduxToolkit.types";
// Types

// Models
import { I_WorkArticle, I_WorkAuthor } from "@/Models/Work/Work.interfaces";
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
import { customizedToast } from "@/Utils/Toasters/customizedToast";
// Utils

const initialState: {
  allAuthors: I_ReduxAsyncBasicType & {
    data: I_WorkAuthor[];
  };
  localAuthors: Record<string, I_WorkArticle[]>;
} = {
  allAuthors: {
    isDone: false,
    isError: false,
    isPending: true,
    data: [],
  },
  localAuthors: {},
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
  reducers: {
    addArticleToSingleAuthor: (
      state,
      action: PayloadAction<{
        authorName: string;
        article: I_WorkArticle;
        onDone: () => void;
      }>
    ) => {
      const key: string = action.payload.authorName;
      if (!state.localAuthors[key]) {
        state.localAuthors[key] = [];
      }

      if (
        state.localAuthors[key].findIndex(
          (item) => item.abstract === action.payload.article.abstract
        ) >= 0
      ) {
        customizedToast("Assigned Earlier", "warning");
        return;
      }

      customizedToast("Assigned Successfully", "success");
      state.localAuthors = {
        ...state.localAuthors,
        [key]: [...state.localAuthors[key], action.payload.article],
      };

      action.payload.onDone();
    },
  },
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

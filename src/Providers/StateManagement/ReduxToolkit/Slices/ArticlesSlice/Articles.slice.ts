// Redux
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// Redux

// Utils
import {
  setIsPending,
  setIsDone,
  setIsError,
} from "../../Utils/ReduxToolkit.utils";
// Utils

// Types
import { I_ReduxAsyncBasicType } from "../../Types/ReduxToolkit.types";
// Types

// Services
import { I_WorkArticle } from "@/Models/Work/Work.interfaces";
import { getAllWorksService } from "@/Services/V1/Works/Get/getAllWorks.service";
// Services

const initialState: {
  allArticles: I_ReduxAsyncBasicType & {
    data: I_WorkArticle[];
  };
} = {
  allArticles: {
    isDone: false,
    isError: false,
    isPending: true,
    data: [],
  },
};

export const getAsyncAllArticles = createAsyncThunk(
  "Articles/getAll",
  async () => {
    try {
      const { data } = await getAllWorksService();
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

export const getAsyncAllArticlesWithoutPending = createAsyncThunk(
  "Articles/getAllWithoutPending",
  async () => {
    try {
      const { data } = await getAllWorksService();
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

export const ArticlesSlice = createSlice({
  name: "Articles",
  initialState,
  reducers: {
    removeSingleArticle: (state, action: PayloadAction<string>) => {
      const article = JSON.parse(action.payload);
      const desiredArticleIndex = state.allArticles.data.findIndex(
        (item) => item.abstract === article.abstract
      );
      if (desiredArticleIndex === -1) {
        return;
      }

      state.allArticles.data = state.allArticles.data.filter(
        (_, index) => index !== desiredArticleIndex
      );
    },
  },
  extraReducers: (builder) => {
    //
    //
    //
    //
    //
    //
    builder.addCase(getAsyncAllArticles.pending, (state) => {
      setIsPending(state.allArticles);
    });
    builder.addCase(getAsyncAllArticles.fulfilled, (state, action) => {
      setIsDone(state.allArticles);
      state.allArticles.data = action.payload?.message.items;
    });
    builder.addCase(getAsyncAllArticles.rejected, (state) => {
      setIsError(state.allArticles);
    });
    //
    //
    //
    //
    //
    //
    builder.addCase(getAsyncAllArticlesWithoutPending.pending, () => {});
    builder.addCase(
      getAsyncAllArticlesWithoutPending.fulfilled,
      (state, action) => {
        state.allArticles.data = action.payload?.message.items;
      }
    );
    builder.addCase(getAsyncAllArticlesWithoutPending.rejected, () => {});
    //
    //
    //
    //
    //
    //
  },
});

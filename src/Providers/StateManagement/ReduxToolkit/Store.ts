"use client";

// Redux
import { configureStore } from "@reduxjs/toolkit";
// Redux

// Bindings
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// Bindings

// Slices
import { ArticlesSlice } from "./Slices/ArticlesSlice/Articles.slice";
// Slices

export const Store = configureStore({
  reducer: { Articles: ArticlesSlice.reducer },
});

export const useReduxDispatch: () => typeof Store.dispatch = useDispatch;
export const useReduxSelector: TypedUseSelectorHook<
  ReturnType<typeof Store.getState>
> = useSelector;

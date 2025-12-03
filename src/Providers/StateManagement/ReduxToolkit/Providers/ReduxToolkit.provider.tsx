"use client";

// React
import { PropsWithChildren } from "react";
// React

// Bindings
import { Provider } from "react-redux";
// Bindings

// Store
import { Store } from "../Store";
// Store

export const ReduxToolkitProvider = ({
  children,
}: PropsWithChildren<object>) => {
  return <Provider store={Store}>{children}</Provider>;
};

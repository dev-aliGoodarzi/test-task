"use client";

// React
import { PropsWithChildren } from "react";
// React

// DND
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// DND

export const DND_PROVIDER = ({ children }: PropsWithChildren<object>) => {
  return <DndProvider backend={HTML5Backend}>{children}</DndProvider>;
};

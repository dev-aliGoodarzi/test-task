"use client";

// React DND
import { useDrag, useDrop } from "react-dnd";
// React DND

export const useCustomDND = (extra?: {
  onDrop?: (draggedItem?: object | undefined, monitor?: object) => void;
  dragData?: object;
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "BOX",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    item: extra?.dragData || {},
  }));

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "BOX",
    // receives the dragged item as first arg
    drop: (draggedItem, monitor) => {
      if (typeof extra?.onDrop === "function") {
        extra?.onDrop(draggedItem!, monitor);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return {
    drag: { isDragging, ref: drag },
    drop: {
      isOver,
      dropRef: drop,
    },
  };
};

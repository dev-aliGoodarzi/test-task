// React DND
import { useDrag, useDrop } from "react-dnd";
// React DND

export const useCustomDND = (extra?: { onDrop?: () => void }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "BOX",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "BOX",
    drop: () => {
      if (typeof extra?.onDrop === "function") {
        extra.onDrop();
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

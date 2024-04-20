import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { DRAGGABLE_DROPPABLE_STYLES } from "../../../common/constants";


export function Droppable({ children }) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable"
  });
  const style = {
    color: isOver ? "9DBF9E" : undefined
  };

  return (
    <div ref={setNodeRef} style={{ ...style, ...DRAGGABLE_DROPPABLE_STYLES }}>
      {children}
    </div>
  );
}

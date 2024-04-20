import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { DRAGGABLE_DROPPABLE_STYLES } from "../../../common/constants";



export function Draggable({ id, content, styles }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
      }
    : {};

  return (
    <div
      ref={setNodeRef}
      style={{ ...style, ...DRAGGABLE_DROPPABLE_STYLES, ...styles }}
      {...listeners}
      {...attributes}
    >
      {content}
    </div>
  );
}
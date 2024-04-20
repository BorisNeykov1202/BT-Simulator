import React from "react";
import { useState } from "react";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";
import {DndContext} from '@dnd-kit/core';
import Error from '../Error/Error'
import {MouseSensor, TouchSensor, useSensor} from '@dnd-kit/core';
import { useSensors } from "@dnd-kit/core";
export default function BinaryTreeVisualizer({ nodeArray,leafNodes }) {
  
   const filteredArr = [...nodeArray].filter((node) => node.left !== null && node.right !== null);
   if(leafNodes.length % 2 == 1){
   const lastLeafNode = leafNodes.slice(-1)[0];
   filteredArr.push(lastLeafNode);
   }
   
   const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor,touchSensor);
  
  const [nodes,setNodes] = useState(filteredArr);

  function handleDragEnd(ev) {
    const node = nodes.find((x) => x.id === ev.active.id);
    node.position.x += ev.delta.x;
    node.position.y += ev.delta.y;
    const _nodes = nodes.map((x) => {
      if (x.id === node.id) return node;
      return x;
    });
    setNodes(_nodes);
  }
   
  const renderTree = (node) => {
    if (node === null) return null;

    return (
      <div key={node.id} >
        <div className="tree-node">
          <p> {node.value}</p>
          <div className="children">
            {renderTree(node.left)}
            {renderTree(node.right)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
    
    <DndContext sensors={sensors}  onDragEnd={handleDragEnd}>
      <Droppable>
        {filteredArr.length < 1 ? (<Error/> ) : (
      filteredArr.map((node) => (
       <Draggable
      styles={{
      position: "relative",
      left: `${node.position.x}px`,
      top: `${node.position.y}px`
        }}
      key={node.id}
      id={node.id}
      content={renderTree(node)}
      />
        )))}
      </Droppable>
    </DndContext>
    </>
  );
}
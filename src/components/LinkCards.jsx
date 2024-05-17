'use client'
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const LinkCards = () => {
  const [matrix, setMatrix] = useState([
    // Ejemplo de matriz de datos
    ['Item 1', 'Item 2', 'Item 3'],
    ['Item 4', 'Item 5', 'Item 6'],
    ['Item 7', 'Item 8', 'Item 9'],
  ]);

  const onDragEnd = (result) => {
   alert("hola")
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable>
        <Draggable></Draggable>
        <Draggable></Draggable>
      </Droppable>
    </DragDropContext>
  );
};

export default LinkCards;

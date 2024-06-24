// src/components/DroppableArea.jsx
import React from 'react';
import { useDrop } from 'react-dnd';

const DroppableArea = ({ accept, onDrop, children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept,
    drop: (item) => {
      onDrop(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        backgroundColor: isOver ? 'lightgreen' : 'white',
        minHeight: '50px',
        padding: '8px',
        border: '1px solid black',
      }}
    >
      {children}
    </div>
  );
};

export default DroppableArea;

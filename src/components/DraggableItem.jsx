// src/components/DraggableItem.jsx
import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableItem = ({ type, item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item: { type, item },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        backgroundColor: type === 'teacher' ? 'blue' : 'yellow',
        color: 'white',
        padding: '8px',
        margin: '4px',
        borderRadius: '4px',
      }}
    >
      {item}
    </div>
  );
};

export default DraggableItem;

import React, { useState } from "react";
import CharacterWindow from "../Character/characterWindow";

const DraggableWindow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setOffset({
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    });
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    setPosition({
      x: event.clientX - offset.x,
      y: event.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        cursor: isDragging ? "grabbing" : "grab",
        background: "lightgrey", // Add light grey background
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Your draggable window content goes here */}
      <CharacterWindow />
    </div>
  );
};

export default DraggableWindow;

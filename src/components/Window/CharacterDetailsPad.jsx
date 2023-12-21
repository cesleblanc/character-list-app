import React, { useState } from "react";
import CharacterWindow from "../CharacterBanner/characterWindow";

const DraggableContainer = () => {
  const [dragging, setDragging] = useState(false);
  const [components, setComponents] = useState([]);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
    setDragging(true);
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const handleAddComponent = () => {
    setComponents([...components, <CharacterWindow />]);
  };

  return (
    <div
      className={`draggable-container ${dragging ? "dragging" : ""}`}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      draggable
      style={{ backgroundColor: "lightbrown" }} // Add the background color here
    >
      <div>
        <button onClick={handleAddComponent}>Add Character</button>
      </div>
      {/* Render your draggable components here */}
      {components.map((component, index) => (
        <div key={index}>{component}</div>
      ))}
    </div>
  );
};

export default DraggableContainer;

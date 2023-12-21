import React, { useState } from "react";
import { Resizable, ResizableBox } from "react-resizable";

const CharacterWindow = ({ initialPosition, initialSize, children }) => {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);

  const handleDrag = (e, { deltaX, deltaY }) => {
    setPosition({ x: position.x + deltaX, y: position.y + deltaY });
  };

  const handleResize = (e, { size }) => {
    setSize(size);
  };

  return (
    <div
      style={{
        top: position.y,
        left: position.x,
        width: size.width,
        height: size.height,
        backgroundColor: "lightbrown", // Add light brown background color
      }}
    >
      <Resizable
        width={size.width}
        height={size.height}
        onResize={handleResize}
        draggableOpts={{ grid: [1, 1] }}
      >
        <ResizableBox
          width={size.width}
          height={size.height}
          minConstraints={[100, 100]}
          maxConstraints={[500, 500]}
          onResize={handleResize}
          onDrag={handleDrag}
        >
          {children}
        </ResizableBox>
      </Resizable>
    </div>
  );
};

export default CharacterWindow;

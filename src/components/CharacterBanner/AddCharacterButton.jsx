import React, { useState } from "react";
import CharacterWindow from "./characterWindow";

const AddCharacterButton = ({ onButtonClick }) => {
  const [showCharacterWindow, setShowCharacterWindow] = useState(false);

  const handleButtonClick = () => {
    setShowCharacterWindow(true);
    onButtonClick(); // Call the callback function from the parent component
  };

  return (
    <>
      <button onClick={handleButtonClick}>Add Character</button>
      {showCharacterWindow && <CharacterWindow />}
    </>
  );
};

export default AddCharacterButton;

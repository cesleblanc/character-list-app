import React, { useState } from "react";
import CharacterWindow from "./characterWindow";

const AddCharacterButton = () => {
  const [showCharacterWindow, setShowCharacterWindow] = useState(false);

  const handleButtonClick = () => {
    setShowCharacterWindow(true);
  };

  return (
    <>
      <button onClick={handleButtonClick}>Add Character</button>
      {showCharacterWindow && <CharacterWindow />}
    </>
  );
};

export default AddCharacterButton;

import React, { useState } from "react";
import characterList from "../../character_list.json";

const CharacterWindow = ({ action, selectedCharacter }) => {
  const [character, setCharacter] = useState(selectedCharacter || {});
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      [name]: value,
    }));
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setPosition({
      x: e.clientX - e.target.offsetLeft,
      y: e.clientY - e.target.offsetTop,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - e.target.offsetWidth / 2,
      y: e.clientY - e.target.offsetHeight / 2,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const renderEditableField = (fieldName, label) => {
    return (
      <div>
        <label style={{ display: "inline-block", width: "150px" }}>
          {label}:{" "}
        </label>
        <input
          type="text"
          name={fieldName}
          value={character[fieldName] || ""}
          onChange={handleInputChange}
          style={{ width: "150px" }}
        />
      </div>
    );
  };

  const renderCharacterWindow = () => {
    // if (action === "addCharacter" || action === "editCharacter") {
    if (true) {
      return (
        <div
          style={{
            border: "2px solid black",
            padding: "10px",
            position: "absolute",
            top: `${position.y}px`,
            left: `${position.x}px`,
            width: "400px",
            height: "300px",
            backgroundColor: "white",
            zIndex: 999,
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {renderEditableField("name", "Name")}
          {renderEditableField("fightingStyle", "Fighting Style")}
          {renderEditableField("proficiencies", "Proficiencies")}
          {renderEditableField("listOfAbilities", "List of Abilities")}
          {renderEditableField("Armor", "Armor")}
          {renderEditableField("Weapon", "Weapon")}
          {renderEditableField("Shield", "Shield")}
          {renderEditableField("moveSpeed", "Move Speed")}
          {renderEditableField("accessories", "Accessories")}
          {renderEditableField(
            "resistancesAndImmunities",
            "Resistances and Immunities"
          )}
          <button onClick={handleSave}>Save</button>
          <button onClick={handleExit}>Exit</button>
        </div>
      );
    }
  };

  const handleSave = () => {
    // Save logic here
  };

  const handleExit = () => {
    // Exit logic here
  };

  return <div>{renderCharacterWindow()}</div>;
};

export default CharacterWindow;

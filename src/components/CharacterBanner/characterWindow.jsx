import React, { useState } from "react";
import { saveCharacter } from "../../data";

const CharacterWindow = ({ action, selectedCharacter }) => {
  const [character, setCharacter] = useState(selectedCharacter || {});
  const [showWindow, setShowWindow] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      [name]: value,
    }));
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
    if (showWindow) {
      return (
        <div
          style={{
            border: "2px solid black",
            padding: "10px",
            width: "400px",
            height: "300px",
            backgroundColor: "white",
            zIndex: 999,
          }}
        >
          <div
            style={{
              backgroundColor: "lightblue",
              textAlign: "center",
              fontWeight: "bold",
              padding: "10px",
            }}
          >
            Character Profile
          </div>
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
    saveCharacter(character);
  };

  const handleExit = () => {
    setShowWindow(false);
  };

  return <div>{renderCharacterWindow()}</div>;
};

export default CharacterWindow;

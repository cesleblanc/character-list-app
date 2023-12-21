import React from "react";
import data from "../../data";
import AddCharacterButton from "./AddCharacterButton";

const CharacterBanner = () => {
  const sortedCharacterList = data.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div
      className="banner"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        border: "1px solid black",
        padding: "10px",
        position: "fixed",
        left: "0",
        top: "0",
        height: "100vh",
      }}
    >
      <h1
        style={{
          backgroundColor: "silver",
          borderBottom: "1px solid black",
          padding: "10px",
        }}
      >
        List of Characters
      </h1>
      <ul style={{ listStyleType: "none", paddingLeft: "0", fontSize: "18px" }}>
        {sortedCharacterList.map((character) => (
          <li key={character.id} style={{ textAlign: "left" }}>
            <a href={`/${character.name}`} style={{ color: "blue" }}>
              {character.name}
            </a>
          </li>
        ))}
      </ul>
      <AddCharacterButton />
    </div>
  );
};

export default CharacterBanner;

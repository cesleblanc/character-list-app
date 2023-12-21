import React from "react";
import CharacterBanner from "../CharacterBanner/characterBanner";
import CharacterDetailsPad from "./CharacterDetailsPad";
import CharacterWindow from "./CharacterDetailsPad";

const CharacterListWrapper = () => {
  return (
    <div>
      <div style={{ width: "70%", display: "inline-block" }}>
        <CharacterBanner />
      </div>
      <div style={{ width: "30%", display: "inline-block" }}>
        <CharacterDetailsPad />
      </div>
    </div>
  );
};

export default CharacterListWrapper;

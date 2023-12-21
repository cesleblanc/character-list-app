import React from "react";
import CharacterBanner from "../CharacterBanner/characterBanner";
import CharacterDetailsPad from "./CharacterDetailsPad";

const CharacterListWrapper = () => {
  return (
    <div>
      <div style={{ float: "left", width: "30%" }}>
        <CharacterBanner />
      </div>
      <div style={{ float: "left", width: "70%" }}>
        {/* <CharacterDetailsPad /> */}
      </div>
    </div>
  );
};

export default CharacterListWrapper;

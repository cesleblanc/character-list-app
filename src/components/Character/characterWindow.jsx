import React from "react";
import characterList from "../../character_list.json";

const CharacterWindow = () => {
  const character = characterList[0]; // Assuming there is only one character in the list

  return (
    <div>
      <h2>{character.name}</h2>
      <p>Fighting Style: {character.fightingStyle}</p>
      <p>Proficiencies: {character.proficiencies}</p>
      <p>List of Abilities: {character.listOfAbilities}</p>
      <p>Armor: {character.Armor}</p>
      <p>Weapon: {character.Weapon}</p>
      <p>Shield: {character.Shield}</p>
      <p>Move Speed: {character.moveSpeed}</p>
      <p>Accessories: {character.accessories}</p>
      <p>Resistances and Immunities: {character.resistancesAndImmunities}</p>
    </div>
  );
};

export default CharacterWindow;

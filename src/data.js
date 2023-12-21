const data = [
  {
    id: 1,
    name: "Rachel",
    fighitingStyle: "Karate",
    proficiencies: "Karate, Judo, Boxing",
    listOfAbilities: "Punch, Kick, Block",
    Armor: "None",
    Weapon: "None",
    Shield: "None",
    moveSpeed: "30",
    accessories: "None",
    resistancesAndImmunities: "None",
  },
  {
    id: 2,
    name: "Beauregard",
    fighitingStyle: "Karate",
    proficiencies: "Karate, Judo, Boxing",
    listOfAbilities: "Punch, Kick, Block",
    Armor: "None",
    Weapon: "None",
    Shield: "None",
    moveSpeed: "30",
    accessories: "None",
    resistancesAndImmunities: "None",
  },
  {
    id: 3,
    name: "John",
    fighitingStyle: "Karate",
    proficiencies: "Karate, Judo, Boxing",
    listOfAbilities: "Punch, Kick, Block",
    Armor: "None",
    Weapon: "None",
    Shield: "None",
    moveSpeed: "30",
    accessories: "None",
    resistancesAndImmunities: "None",
  },
];

function saveCharacter(character) {
  const newCharacter = {
    id: data.length + 1,
    ...character,
  };
  data.push(newCharacter);
  console.log(data.length);
}

export default data;
export { saveCharacter };

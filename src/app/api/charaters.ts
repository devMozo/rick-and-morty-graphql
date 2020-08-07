const { URL_RICK_AND_MORTY_API } = process.env;

export type CharaterStatus = "Alive" | "Dead" | "unknown";
export type CharacterSpecies =
  | "Human"
  | "Alien"
  | "Humanoid"
  | "Vampire"
  | "Robot";
export type CharacterGender = "Male" | "Female" | "Genderless" | "unknown";

export interface Character {
  id: number;
  name: string;
  status: CharaterStatus;
  species: CharacterSpecies;
  gender: CharacterGender;
  image: string;
}

const URL_GET_CHARACTERS = () => {
  return URL_RICK_AND_MORTY_API + "/character/";
};

export { URL_GET_CHARACTERS };

const URL_RICK_AND_MORTY_API = process.env.REACT_APP_URL_RICK_AND_MORTY_API;

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

const URL_GET_CHARACTERS_API = URL_RICK_AND_MORTY_API + "/character/";
const getCharactersAPI = () => {
  return fetch(URL_GET_CHARACTERS_API).then((res) => res.json());
};

export { URL_GET_CHARACTERS_API, getCharactersAPI };

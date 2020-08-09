const URL_RICK_AND_MORTY_API = process.env.REACT_APP_URL_RICK_AND_MORTY_API;

export type CharacterStatus = "Alive" | "Dead" | "Unknown";
export const CharacterStatusArray: CharacterStatus[] = [
  "Alive",
  "Dead",
  "Unknown",
];
export type CharacterSpecies =
  | "Human"
  | "Alien"
  | "Humanoid"
  | "Vampire"
  | "Robot";
export const CharacterSpeciesArray: CharacterSpecies[] = [
  "Human",
  "Alien",
  "Humanoid",
  "Vampire",
  "Robot",
];
export type CharacterGender = "Male" | "Female" | "Genderless" | "Unknown";
export const CharacterGenderArray: CharacterGender[] = [
  "Male",
  "Female",
  "Genderless",
  "Unknown",
];

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: CharacterSpecies;
  gender: CharacterGender;
  image: string;
}

const URL_GET_CHARACTERS_API = URL_RICK_AND_MORTY_API + "/character/?";
const getCharactersAPI = (filters: any) => {
  let filtersText = "";

  for (const filter in filters) {
    if (filters.hasOwnProperty(filter) && filters[filter]) {
      filtersText += `${filter}=${filters[filter]}&`;
    }
  }

  return fetch(encodeURI(URL_GET_CHARACTERS_API + filtersText)).then((res) =>
    res.json()
  );
};

export { URL_GET_CHARACTERS_API, getCharactersAPI };

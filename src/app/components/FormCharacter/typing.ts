import {
  Character,
  CharacterGender,
  CharacterSpecies,
  CharacterStatus,
} from "../../api/charaters";

export interface Props {
  character?: Character;
}

export interface State {
  name: string;
  status: CharacterStatus;
  species: CharacterSpecies;
  gender: CharacterGender;
}

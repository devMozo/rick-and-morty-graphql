import { Character } from "../../api/charaters";

export interface Props {
  character?: Character;
  onModify?: (character: Character) => void;
  onCreate?: (character: Character) => void;
}

export interface State extends Character {}

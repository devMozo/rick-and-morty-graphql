import { Character } from "../../api/charaters";

export interface Props {
  character?: Character;
  onModify?: (character: Character) => void;
  onCreate?: (character: Character) => void;
  onCancel?: () => void;
}

export interface State extends Character {}

import * as React from "react";
import { Character } from "../../../api/charaters";

export const CharacterContext = React.createContext({
  onRemove: (characterId: number) => {},
  onModify: (character: Character) => {},
});

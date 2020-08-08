import { ThunkDispatch } from "@reduxjs/toolkit";
import {
  CharacterGender,
  CharacterSpecies,
  CharacterStatus,
} from "../../../api/charaters";

export interface Props {
  dispatch: ThunkDispatch<any, any, any>;
}

export interface State {
  name: string;
  status: CharacterStatus;
  specie: CharacterSpecies;
  gender: CharacterGender;
  hasBeenModified: boolean;
}

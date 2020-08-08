import { Character } from "../../api/charaters";

interface CharactersRequestStatus {
  error: string;
  loading: boolean;
}

export interface CharactersState {
  characters: Character[];
  request: Partial<CharactersRequestStatus>;
}

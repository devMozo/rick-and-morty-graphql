import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
  nanoid,
} from "@reduxjs/toolkit";
import { getCharactersAPI } from "../../api/charaters";
import { CharactersState } from "./typing";

const initialState: CharactersState = {
  characters: [],
  request: {},
};

export const getCharacters: AsyncThunk<any, any, {}> = createAsyncThunk(
  "characters/get",
  async (filters, thunkAPI) => {
    const response = await getCharactersAPI(filters);
    return response.results;
  }
);

export default createSlice({
  name: "characters",
  initialState,
  reducers: {
    createCharacter: (state, action) => {
      state.characters = [
        {
          ...action.payload.character,
          id: nanoid(),
        },
        ...state.characters,
      ];
    },
    removeCharacter: (state, action) => {
      state.characters = state.characters.filter(
        (character) => character.id !== action.payload
      );
    },
    modifyCharacter: (state, action) => {
      state.characters = state.characters.map((character) => {
        if (character.id === action.payload.character.id) {
          return action.payload.character;
        }

        return character;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.characters = action.payload;
      state.request.error = "";
      state.request.loading = false;
    });
    builder.addCase(getCharacters.pending, (state) => {
      state.request.error = "";
      state.request.loading = true;
    });
    builder.addCase(getCharacters.rejected, (state, action) => {
      state.request.error = action.error.message;
      state.request.loading = false;
    });
  },
});

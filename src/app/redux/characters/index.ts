import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCharactersAPI } from "../../api/charaters";
import { CharactersState } from "./typing";

const initialState: CharactersState = {
  characters: [],
  request: {},
};

export const getCharacters = createAsyncThunk("characters/get", async () => {
  const response = await getCharactersAPI();
  return response.results;
});

export default createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.characters = [...state.characters, ...action.payload];
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

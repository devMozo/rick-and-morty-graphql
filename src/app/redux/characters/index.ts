import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
  reducers: {},
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

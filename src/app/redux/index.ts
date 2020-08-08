import { configureStore, Slice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import charactersReducer from "./characters";

const reducer = combineReducers({
  charactersReducer: (charactersReducer as Slice).reducer,
});

export type AppState = ReturnType<typeof reducer>;

export default configureStore({
  reducer,
  middleware: [thunk],
});

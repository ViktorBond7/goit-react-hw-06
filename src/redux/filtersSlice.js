import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

const persistConfig = {
  key: "filters",
  storage,
  whitelist: ["value"],
};

export const filterReduser = persistReducer(persistConfig, filterSlice.reducer);

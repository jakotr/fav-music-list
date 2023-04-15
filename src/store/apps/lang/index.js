import { createSlice } from "@reduxjs/toolkit";

//initial State
const initialState = {
  currentLang: "pl",
  languages: [
    {
      value: "pl",
      label: "Polski",
    },
    {
      value: "en",
      label: "English",
    },
  ],
  translations: {
    pl: {},
    en: {},
  },
};

//translation Slice
export const langSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLang: () => {
      //TODO changeLang logic
    },
  },
});

//export actions
export const { changeLang } = langSlice.actions;

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
    pl: {
      header: {
        title: "Ulubione utwory",
      },
      sortOptions: {
        id: "ID rosnąco",
        name: "Nazwa rosnąco",
      },
      list: {
        name: "Nazwa",
        date: "Data",
        empty: "Lista jest pusta",
      },
      form: {
        title: "Dodaj nowy element do listy",
        placeholder: "Podaj nazwę utworu",
        button: "Dodaj",
      },
    },
    en: {
      header: {
        title: "Favourite music",
      },
      sortOptions: {
        id: "ID inc",
        name: "Nazwa inc",
      },
      list: {
        name: "Name",
        date: "Date",
        empty: "List is empty",
      },
      form: {
        title: "Add a new item to the list",
        placeholder: "Name the song",
        button: "Add",
      },
    },
  },
};

//translation Slice
const langSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLang: (state, { payload }) => {
      state.currentLang = payload;
    },
  },
});

//export actions
export const { changeLang } = langSlice.actions;

//export current translation
export const selectTranslation = (state) =>
  state.language.translations[state.language.currentLang];

export default langSlice.reducer;

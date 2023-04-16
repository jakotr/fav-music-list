import { createSlice } from "@reduxjs/toolkit";

//initial State
const initialState = {
  list: [
    {
      id: 1,
      name: "Don't stop believing",
      isBest: true,
      date: new Date("2020-05-14").toLocaleDateString(),
    },
    {
      id: 2,
      name: "We are the champion",
      isBest: false,
      date: new Date("2020-05-12").toLocaleDateString(),
    },
  ],
  id: 2,
};

//music Slice
const musicSlice = createSlice({
  name: "musicList",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      console.log(payload);
      state.list.push({
        id: state.id + 1,
        name: payload,
        isBest: false,
        date: new Date().toLocaleDateString(),
      });
      state.id += 1;
    },
    removeItem: (state, { payload }) => {
      state.list = state.list.filter((item) => item.id !== payload)
    },
    toggleBest: (state, { payload }) => {
      state.list = state.list.map((item) => item.id === payload ? {...item, isBest: !item.isBest} : item)
    },
    sortList: (state, { payload }) => {
      //TODO - toggleBest
    },
  },
});

//export actions
export const { addItem, removeItem, toggleBest } = musicSlice.actions;

export default musicSlice.reducer;

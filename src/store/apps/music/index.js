import { createSlice } from "@reduxjs/toolkit";

//initial State
const initialState = {
  list: [
    {
      id: 1,
      name: "Don't stop believing",
      isBest: true,
      date: new Date("2020-05-14T23:50:21.817Z").toLocaleDateString(),
    },
    {
      id: 2,
      name: "We are the champion",
      isBest: false,
      date: new Date("2020-05-12T23:50:21.817Z").toLocaleDateString(),
    },
  ]
};

//music Slice
const musicSlice = createSlice({
  name: "musicList",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      //TODO - addItem
    },
    removeItem: (state, { payload }) => {
      //TODO - removeItem
    },
    toggleBest: (state, { payload }) => {
      //TODO - toggleBest
    },
    sortList: (state, { payload }) => {
      //TODO - toggleBest
    },
  },
});

//export actions
export const { addItem, removeItem, toggleBest } = musicSlice.actions;


export default musicSlice.reducer;

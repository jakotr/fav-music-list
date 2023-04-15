import { createSlice } from "@reduxjs/toolkit";

//images
import { grid, list } from "../../../assets";

//initial State
const initialState = {
  currentView: "list",
  viewOptions: [
    {
      name: "list",
      icon: list,
    },
    {
      name: "grid",
      icon: grid,
    },
  ],
};

//viewSlice
export const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    changeView: () => {
      //TODO - change the view
    },
  },
});

//export actions
export const { changeView } = viewSlice.actions;

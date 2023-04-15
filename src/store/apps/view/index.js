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
const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    changeView: (state, { payload }) => {
      state.currentView = payload
    },
  },
});

//export actions
export const { changeView } = viewSlice.actions;

export default viewSlice.reducer;

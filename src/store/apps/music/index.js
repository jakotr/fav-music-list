import { createSlice } from "@reduxjs/toolkit";

//config
import { DUMMY_DATA } from "../../../config";

//utils
import { formatTodayDate } from "../../../utils";

//initial State
const initialState = {
  list: DUMMY_DATA,
  currentSortOption: "id-asc",
  idInc: DUMMY_DATA.length,
};

//music Slice
const musicSlice = createSlice({
  name: "musicList",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.list.push({
        id: state.idInc + 1,
        name: payload,
        isBest: false,
        date: formatTodayDate(),
      });
      state.idInc += 1;
    },
    removeItem: (state, { payload }) => {
      state.list = state.list.filter((item) => item.id !== payload);
    },
    toggleBest: (state, { payload }) => {
      state.list = state.list.map((item) =>
        item.id === payload ? { ...item, isBest: !item.isBest } : item
      );
    },
    sortList: (state, { payload }) => {
      const [key, order] = payload.split('-');
      state.list = state.list.sort((a, b) => {
        if (a[key] < b[key]) {
          return order === "asc" ? -1 : 1;
        } else if (a[key] > b[key]) {
          return order === "asc" ? 1 : -1;
        } else {
          return 0;
        }
      });
      state.currentSortOption = payload;
    },
  },
});

//export actions
export const { addItem, removeItem, toggleBest, sortList } = musicSlice.actions;

export default musicSlice.reducer;

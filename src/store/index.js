import { configureStore } from "@reduxjs/toolkit";

//Slices
import viewSlice from "./apps/view";
import langSlice from "./apps/lang";
import musicSlice from "./apps/music";

//Store
export const store = configureStore({
  reducer: {
    view: viewSlice,
    language: langSlice,
    music: musicSlice,
  },
});

import { configureStore } from "@reduxjs/toolkit";

//Slices
import { viewSlice } from "./apps/view";
import { langSlice } from "./apps/lang";

//Store
export const store = configureStore({
  reducer: {
    view: viewSlice,
    language: langSlice,
  },
});

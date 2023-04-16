import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";

//Slices
import viewSlice from "./apps/view";
import langSlice from "./apps/lang";
import musicSlice from "./apps/music";

//combine reducers
const rootReducer = combineReducers({
  view: viewSlice,
  language: langSlice,
  music: musicSlice,
});

//config for localStorage
const persistConfig = {
  key: "root",
  storage,
};

// persist all reducer into localStorage
const persistedReducer = persistReducer(persistConfig, rootReducer);

//Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

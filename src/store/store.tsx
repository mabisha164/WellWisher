import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;

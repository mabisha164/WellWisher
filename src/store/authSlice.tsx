import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  userData: {
    id: string;
    name: string;
    email: string;
  } | null;
  status: boolean; 
}
const initialState : AuthState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

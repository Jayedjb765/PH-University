import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
type TAuthState = {
  user: null | object;
  token: null | string;
};
const initialState: TAuthState = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;

export const userCurrentToken = (state: RootState) => {
  return state.auth.token;
};

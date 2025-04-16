import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking",
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMessage: null,
  },
  reducers: {
    register: (state, action) => {
      state.status = "authenticated";
      state.email = action.payload.email;
      state.errorMessage = null;
    },
    login: (state, action) => {
      state.status = "authenticated";
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.displayName = action.payload.displayName; // 🔥 Agregado
      state.photoUrl = action.payload.photoURL;
      state.errorMessage = null;
    },
    logout: (state) => {
      state.status = "not-authenticated";
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoUrl = null;
      state.errorMessage = null;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
      console.log("checking");
    },
  },
});

export const { register, login, logout, checkingCredentials } =
  authSlice.actions;
export default authSlice.reducer;

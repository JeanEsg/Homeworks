// src/redux/slices/firebaseSlice.js
import { createSlice } from "@reduxjs/toolkit";

const firebaseSlice = createSlice({
  name: "firebase",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      const exists = state.messages.find((msg) => msg.id === action.payload.id);
      if (!exists) {
        state.messages.push(action.payload);
      }
    },
  },
});

export const { addMessage } = firebaseSlice.actions;
export default firebaseSlice.reducer;

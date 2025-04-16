import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/firebaseConfig";
import { ref, push, set } from "firebase/database";

export const sendMessageThunk = createAsyncThunk(
  "firebase/sendMessage",
  async ({ text, user }) => {
    const messagesRef = ref(db, "messages");
    const newRef = push(messagesRef);
    await set(newRef, {
      text,
      user,
      timestamp: Date.now(),
    });
  },
);

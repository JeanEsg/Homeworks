import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/firebaseConfig";
import { ref, onChildAdded } from "firebase/database";
import { addMessage } from "./firebaseSlice";

export const listenMessagesThunk = createAsyncThunk(
  "firebase/listenMessages",
  async (_, { dispatch }) => {
    const messagesRef = ref(db, "messages");

    onChildAdded(messagesRef, (snapshot) => {
      const msg = snapshot.val();
      const id = snapshot.key;
      dispatch(addMessage({ id, ...msg }));
    });
  },
);

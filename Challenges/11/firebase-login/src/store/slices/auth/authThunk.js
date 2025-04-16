import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  deleteUser,
} from "firebase/auth";
import { checkingCredentials, login, logout } from "./AuthSlice";
import { auth } from "../../../firebase/config";
import { doc, deleteDoc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";

export const registerAuth = (email, password) => {
  return async (dispatch) => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    if (response) {
      await updateProfile(auth.currentUser, {
        displayName: "Jean Pool",
        photoURL: "",
      });
      const { uid, email: userEmail, displayName, photoURL } = auth.currentUser;
      await setDoc(doc(db, "usuarios", uid), {
        uid,
        email: userEmail,
        displayName,
        photoURL,
      });

      dispatch(
        login({
          uid,
          email: userEmail,
          displayName,
          photoURL,
        }),
      );
    } else {
      throw new Error("login failed");
    }
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const { uid, displayName, email: userEmail, photoURL } = result.user;

      dispatch(login({ uid, displayName, email: userEmail, photoURL }));
    } catch (error) {
      dispatch(logout({ errorMessage: error.message }));
    }
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const { uid, displayName, email, photoURL } = result.user;

      dispatch(login({ uid, displayName, email, photoURL }));
    } catch (error) {
      dispatch(logout({ errorMessage: error.message }));
    }
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await signOut(auth);
    dispatch(logout());
  };
};

//Challenge 12
export const updateUserData = (uid, newData) => {
  return async (dispatch) => {
    if (!uid) {
      console.error("updateUserData: UID es nulo o indefinido");
      return;
    }
    try {
      const userRef = doc(db, "usuarios", uid);
      await setDoc(userRef, newData, { merge: true });

      const user = auth.currentUser;
      if (user && (newData.displayName || newData.photoURL)) {
        await updateProfile(user, {
          displayName: newData.displayName || user.displayName,
          photoURL: newData.photoURL || user.photoURL,
        });
      }
      dispatch(
        login({
          uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        }),
      );
    } catch (error) {
      console.error("Error actualizando el usuario:", error.message);
    }
  };
};

export const deleteUserData = (uid) => {
  return async (dispatch) => {
    const userRef = doc(db, "usuarios", uid);

    try {
      await deleteDoc(userRef);
      const user = auth.currentUser;
      if (user && user.uid === uid) {
        await deleteUser(user);
      }

      // 3. Desloguear
      dispatch(logout());
    } catch (error) {
      console.error("Error eliminando el usuario:", error.message);
    }
  };
};

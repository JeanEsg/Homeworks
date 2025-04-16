import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth, googleProvider } from "./firebase/config";
import {
  registerAuth, updateUserData,
  deleteUserData
} from "./store/slices/auth/authThunk";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { login, logout } from "./store/slices/auth/AuthSlice";

function App() {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    email: 'jpesguerra2@gmail.com',
    password: '123456'
  });

  const [newDisplayName, setNewDisplayName] = useState(""); // 🔹 Nuevo estado

  const { status, email, displayName, uid } = useSelector((state) => state.auth);

  const loginWithEmail = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, formState.email, formState.password);
      const { uid, email, displayName, photoURL } = res.user;

      dispatch(login({ uid, email, displayName, photoURL }));

      // Este console.log sí tiene los valores correctos
      console.log("uid:", uid, "Name:", displayName);
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };


  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(registerAuth(formState.email, formState.password));
  };

  const loginWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      dispatch(login(res.user));
    } catch (error) {
      console.error("Google login error:", error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(logout());
  };

  const handleUpdateUser = () => {
    if (newDisplayName.trim() !== "") {
      dispatch(updateUserData(uid, { displayName: newDisplayName }));
    }
  };

  return (
    <div>
      {status === "authenticated" ? (
        <>
          {console.log("displayName desde redux:", displayName)}
          <h2>Bienvenido, {displayName || email || "Usuario"}</h2>

          <input
            type="text"
            placeholder="Nuevo nombre"
            value={newDisplayName}
            onChange={(e) => setNewDisplayName(e.target.value)}
          />
          <button onClick={handleUpdateUser}>Actualizar Usuario</button>

          <button onClick={() => dispatch(deleteUserData(uid))}>
            Eliminar Usuario
          </button>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h1>Auth Form</h1>
          <form onSubmit={onSubmit}>
            <input name='email' type='email' onChange={onInputChange} value={formState.email} />
            <input name='password' type='password' minLength={6} onChange={onInputChange} value={formState.password} required />
            <button type='submit'>Register</button>
          </form>
          <button onClick={loginWithEmail}>Login</button>
          <button onClick={loginWithGoogle}>Login con Google</button>
        </>
      )}
    </div>
  );
}

export default App;

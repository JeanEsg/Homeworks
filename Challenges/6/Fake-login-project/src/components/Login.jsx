import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const { login, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!username.trim()) {
            setError("El nombre de usuario es requerido");
            return;
        }
        setError("");

        login({ username });

        if (user) {

            const from = location.state?.from || "/dashboard";
            navigate(from);
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleLogin}>Iniciar sesión</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default Login;

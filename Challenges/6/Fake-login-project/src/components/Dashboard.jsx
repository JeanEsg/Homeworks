import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/"),
            { replace: true }
    }

    return (
        <div className="container">
            <h1>Dashboard</h1>
            <p><strong>{user?.username}</strong></p>
            <button onClick={handleLogout}>Cerrar sesion</button>
        </div>
    )
}
export default Dashboard;
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Pagar from "./components/Pagar";

const PrivateRoute = ({ element }) => {
    const { logged } = useAuth();
    const location = useLocation();
    return logged ? ( element ) : ( <Navigate to="/login" state={{ from: location }} /> );
};



const App = () => {
  return (
    <AuthProvider>
        <Router>
            <Routes>
                {/* Rutas publicas */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} /> 
                <Route path="/login" element={<Login />} />

                {/* Rutas privadas */}
                <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />

                <Route path="/pagar" element={<PrivateRoute element={<Pagar />} />} />
            </Routes>
        </Router>
    </AuthProvider>
  )
}

export default App;

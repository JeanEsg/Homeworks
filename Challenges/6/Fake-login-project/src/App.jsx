import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Pagar from "./components/Pagar";
import PrivateRoute from "./routes/PrivateRoute"


const App = () => {
  return (
    <Routes>
      {/* Rutas publicas */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />

      {/* Rutas privadas */}
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      } />
      <Route path="/pagar" element={
        <PrivateRoute>
          <Pagar />
        </PrivateRoute>
      } />
    </Routes >
  )
}

export default App;

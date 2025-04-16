import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Pagar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="container">
      <h2>Pagar</h2>
      <p><strong>{user?.username}</strong></p>
      <p>Bienvenido, aquí puedes realizar tu pago.</p>
    </div>
  );
};

export default Pagar
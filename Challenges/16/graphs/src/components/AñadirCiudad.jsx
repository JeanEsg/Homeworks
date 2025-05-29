import { useState } from "react";

const AñadirCiudad = ({ onAñadirCiudad }) => {
    const [nombreCiudad, setNombreCiudad] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombreCiudad.trim()) return;
        onAñadirCiudad({
            nombre: nombreCiudad.trim(),
            type: "ciudad",
        });
        setNombreCiudad("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre de la ciudad"
                value={nombreCiudad}
                onChange={(e) => setNombreCiudad(e.target.value)}
            />
            <button type="submit">Agregar Ciudad</button>
        </form>
    );
}
export default AñadirCiudad;

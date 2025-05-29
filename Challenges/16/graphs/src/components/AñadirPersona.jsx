import { useState } from "react";

const AñadirPersona = ({ ciudades, onAñadirPersona }) => {
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [ciudad, setCiudad] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre.trim() || !edad || !ciudad) return;
        onAñadirPersona({
            nombre: nombre.trim(),
            edad: Number(edad),
            ciudad,
            type: "person",
        });
        setNombre("");
        setEdad("");
        setCiudad("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre de la persona"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <input
                type="number"
                placeholder="Edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
                min="0"
            />
            <select value={ciudad} onChange={(e) => setCiudad(e.target.value)}>
                <option key="default" value="">Selecciona una ciudad</option>
                {ciudades.map((c) => (
                    <option key={c.nombre} value={c.nombre}>
                        {c.nombre}
                    </option>
                ))}
            </select>
            <button type="submit">Agregar Persona</button>
        </form>
    );
}

export default AñadirPersona;

import { useState } from "react";

const ListaPersonasPorCiudad = ({ ciudades, people }) => {
    const [ciudadSeleccionada, setCiudadSeleccionada] = useState("");
    const personasFiltradas = ciudadSeleccionada
        ? people.filter((p) => p.ciudad === ciudadSeleccionada)
        : [];

    return (
        <div>
            <h3>Selecciona una ciudad para ver sus residentes</h3>
            <select
                value={ciudadSeleccionada}
                onChange={(e) => setCiudadSeleccionada(e.target.value)}
            >
                <option value="">-- Seleccionar ciudad --</option>
                {ciudades.map((c) => (
                    <option key={c.name || c.nombre} value={c.name || c.nombre}>
                        {c.name || c.nombre}
                    </option>
                ))}
            </select>

            {ciudadSeleccionada && (
                <div>
                    <h4>Personas en {ciudadSeleccionada}:</h4>
                    {personasFiltradas.length > 0 ? (
                        <ul>
                            {personasFiltradas.map((p) => (
                                <li key={p.name || p.nombre}>
                                    {p.name || p.nombre} — Edad: {p.edad}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No hay personas registradas en esta ciudad.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default ListaPersonasPorCiudad;

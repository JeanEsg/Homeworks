import { useState, useEffect } from "react";
import { Graph } from "../models/Graph";
import AñadirCiudad from "../components/AñadirCiudad";
import AñadirPersona from "../components/AñadirPersona";
import ListaPersonasPorCiudad from "../components/ListaPersonasPorCiudad";
import Grafo from "../components/Grafo";

const Home = () => {
    const [graph, setGraph] = useState(new Graph());
    const [graphData, setGraphData] = useState({ nodes: [], links: [] });
    const [ciudades, setCiudades] = useState([]);
    const [people, setPeople] = useState([]);

    const refreshGraphData = (g) => {
        if (!g || !g.nodes || !g.adjList) {
            setGraphData({ nodes: [], links: [] });
            return;
        }
        const nodes = (g.nodes || []).map((n, i) => ({
            id: n.nombre ? n.nombre.toString() : `node_${i}`,
            label: n.nombre || `Nodo ${i}`,
            color: n.type === "ciudad" ? "orange" : "lightblue",
            size: n.type === "ciudad" ? 400 : 300,
            x: n.type === "ciudad" ? 100 * i : 100 * i,
            y: n.type === "ciudad" ? 100 : 50 * (i + 1),
        }));

        let links = [];
        Object.entries(g.adjList).forEach(([node, neighbors]) => {
            if (!node) return;
            neighbors.forEach((neighbor) => {
                if (node && neighbor && node < neighbor) {
                    links.push({ source: node, target: neighbor });
                }
            });
        });


        setGraphData({ nodes, links });
    };

    const handleAñadirCiudad = (ciudad) => {
        if (ciudades.some((c) => c.nombre === ciudad.nombre)) {
            alert("Ciudad ya existe");
            return;
        }
        const newGraph = new Graph();
        newGraph.nodes = [...graph.nodes];
        newGraph.adjList = { ...graph.adjList };
        newGraph.addNode(ciudad);
        setGraph(newGraph);

        setCiudades((prev) => [...prev, ciudad]);

        refreshGraphData(newGraph);
    };

    const handleAñadirPersona = (persona) => {
        if (people.some((p) => p.nombre === persona.nombre)) {
            alert("Persona ya existe");
            return;
        }
        const ciudadNode = graph.searchNode(persona.ciudad);
        if (!ciudadNode) {
            alert("La ciudad debe existir antes de agregar persona");
            return;
        }

        const newGraph = new Graph();
        newGraph.nodes = [...graph.nodes];
        newGraph.adjList = { ...graph.adjList };
        newGraph.addNode(persona);
        newGraph.addEdge(persona, ciudadNode);
        setGraph(newGraph);

        setPeople((prev) => [...prev, persona]);

        refreshGraphData(newGraph);
    };

    useEffect(() => {
        refreshGraphData(graph);
    }, [graph]);

    return (
        <div>
            <h2>Agregar Ciudad</h2>
            <AñadirCiudad onAñadirCiudad={handleAñadirCiudad} />

            <h2>Agregar Persona</h2>
            <AñadirPersona ciudades={ciudades} onAñadirPersona={handleAñadirPersona} />
            <h2>Personas por Ciudad</h2>
            <ListaPersonasPorCiudad ciudades={ciudades} people={people} />

            <h2>Grafo de Amigos y Ciudades</h2>
            <Grafo graphData={graphData} />

        </div>
    );
};

export default Home;

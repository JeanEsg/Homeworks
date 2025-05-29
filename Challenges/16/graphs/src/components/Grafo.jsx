import { Graph } from "react-d3-graph";

const Grafo = ({ graphData }) => {
    if (!graphData || graphData.nodes.length === 0) {
        return <p>Agrega ciudades o personas para visualizar el grafo.</p>;
    }

    const myConfig = {
        nodeHighlightBehavior: true,
        node: {
            color: "lightgreen",
            size: 400,
            highlightStrokeColor: "blue",
        },
        link: {
            highlightColor: "lightblue",
        },
        directed: false,
    };

    return (
        <div style={{ width: "100%", height: "500px" }}>
            <Graph
                id="graph-id"
                data={graphData}
                config={myConfig}
            />
        </div>
    );
};

export default Grafo;
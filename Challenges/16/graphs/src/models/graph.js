export class Graph {
  constructor() {
    this.nodes = [];
    this.adjList = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjList[node.nombre] = [];
  }

  addEdge(node1, node2) {
    this.adjList[node1.nombre].push(node2.nombre);
    this.adjList[node2.nombre].push(node1.nombre);
  }

  searchNode(nodeNombre) {
    if (!this.nodes.length) return;
    return this.nodes.find((n) => n.nombre === nodeNombre);
  }

  printAdjacency(nodeNombre) {
    if (this.searchNode(nodeNombre)) {
      console.log(this.adjList[nodeNombre]);
    }
  }

  printGraph() {
    console.log(this.adjList);
  }
}

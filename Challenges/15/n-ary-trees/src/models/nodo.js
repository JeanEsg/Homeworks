export class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.hijos = [];
  }

  agregarHijo(nodo) {
    this.hijos.push(nodo);
  }
}

export function dfs(nodo, callback) {
  callback(nodo);
  for (let hijo of nodo.hijos) {
    dfs(hijo, callback);
  }
}

export function bfs(raiz, callback) {
  const cola = [raiz];
  while (cola.length > 0) {
    const actual = cola.shift();
    callback(actual);
    cola.push(...actual.hijos);
  }
}

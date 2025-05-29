export function nodoAD3(nodo) {
  if (!nodo) return null;

  const resultado = {
    name: nodo.valor.toString(),
    children: [],
  };

  if (nodo.izquierda) resultado.children.push(nodoAD3(nodo.izquierda));
  if (nodo.derecha) resultado.children.push(nodoAD3(nodo.derecha));

  if (resultado.children.length === 0) delete resultado.children;

  return resultado;
}

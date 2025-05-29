import { useState } from 'react';
import TreeD3 from '../components/TreeD3';
import { ArbolBinario } from '../models/ArbolBinario';
import { nodoAD3 } from '../utils/treeD3';
import './Arbol.css';


const arbol = new ArbolBinario();

const Arbol = () => {
    const [treeData, setTreeData] = useState(null);
    const [valor, setValor] = useState('');
    const [valorBuscar, setValorBuscar] = useState('');
    const [valorBuscadoFinal, setValorBuscadoFinal] = useState(null);
    const [resultadoBusqueda, setResultadoBusqueda] = useState(null);

    const handleInsertar = () => {
        const num = parseInt(valor);
        if (!isNaN(num)) {
            arbol.insertar(num);
            const formatoD3 = nodoAD3(arbol.raiz);
            setTreeData(formatoD3);
            setValor('');

            console.log('Inorden:');
            arbol.inorden();
            console.log('Preorden:');
            arbol.preorden();
            console.log('Postorden:');
            arbol.postorden();
        }
    };

    const handleBuscar = () => {
        const num = parseInt(valorBuscar);
        if (!isNaN(num)) {
            const encontrado = arbol.buscar(num);
            setResultadoBusqueda(encontrado);
            setValorBuscadoFinal(num);
        } else {
            setResultadoBusqueda(null);
            setValorBuscadoFinal(null);
        }
    };


    return (
        <div className="arbol-container">
            <h2>Visualización con react-d3-tree</h2>

            <div className="input-group">
                <input
                    type="number"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    placeholder="Ingresa un número para insertar"
                />
                <button onClick={handleInsertar}>Insertar</button>
            </div>

            <div className="input-group" style={{ marginTop: '1rem' }}>
                <input
                    type="number"
                    value={valorBuscar}
                    onChange={(e) => setValorBuscar(e.target.value)}
                    placeholder="Ingresa un número para buscar"
                />
                <button onClick={handleBuscar}>Buscar</button>
            </div>

            {resultadoBusqueda !== null && (
                <p>
                    Resultado de búsqueda:{' '}
                    {resultadoBusqueda ? (
                        <span style={{ color: 'green' }}>El numero: {valorBuscadoFinal} Si se encuentra dentro del Arbol</span>
                    ) : (
                        <span style={{ color: 'red' }}>El numero: {valorBuscadoFinal} No se encuentra dentro del Arbol</span>
                    )}
                </p>
            )}

            {treeData && (
                <div className="arbol-wrapper">
                    <TreeD3 data={treeData} />
                </div>
            )}
        </div>
    );
};

export default Arbol;
// At: Es un método de los arrays que permite acceder a un elemento 
// en una posición específica. El índice puede ser positivo o negativo.
// Sintaixs: array.at(index)

const numeros = [10, 20, 30, 40, 50];
//Indice positivo
console.log(numeros.at(0));  // 10 (primer elemento)
console.log(numeros.at(2));  // 30 (tercer elemento)

//Indice negativo
console.log(numeros.at(-1)); // 50 (último elemento)
console.log(numeros.at(-3)); // 30 (tercer elemento desde el final)

//Indice fuera de rango
console.log(numeros.at(10));  // undefined
console.log(numeros.at(-10)); // undefined

// At: Es un método de los strings que permite acceder a un carácter,
// ya que los strings se comportan como arrays de caracteres.
const palabra = "JavaScript";
console.log(palabra.at(0));   // "J"
console.log(palabra.at(-1));  // "t"
console.log(palabra.at(10));  // undefined


// Concat: se usa para unir dos o más arrays sin 
// modificar los originales, devolviendo un nuevo array, no los modifica solo los combina.
// Sintaxis: array1.concat(array2, array3, ..., arrayN)

const frutas = ["manzana", "banana"];
const verduras = ["zanahoria", "lechuga"];
// Concatenar dos arrays
const comida = frutas.concat(verduras);
console.log(comida); // ["manzana", "banana", "zanahoria", "lechuga"]

// Concatenar multipes arrays
const carnes = ["pollo", "res"];
const todo = frutas.concat(verduras, carnes);
console.log(todo); // ["manzana", "banana", "zanahoria", "lechuga", "pollo", "res"]

// Concatenar arrays con elementos adicionales
const postres = frutas.concat("pastel", "helado");
console.log (postres); // ["manzana", "banana", "pastel", "helado"]

//Concatenar valores individuales
const numeros1 = [1, 2, 3];
const nuevosNumeros = numeros1.concat(4, 5, [6, 7]);
console.log(nuevosNumeros); // [1, 2, 3, 4, 5, Array(2)]

// Concatenar arrays con spread operator
const combinado = [...frutas, ...verduras];
console.log(combinado);// ["manzana", "banana", "zanahoria", "lechuga"]


// Constructor: Es una propiedad de todos los objetos en JavaScript que devuelve
// la función constructora que creó esa instancia, puede sobreescribirse por lo cual no es muy confiable.
// Sintaxis: objeto.constructor

// Ver el constructor de un array
const numeros2 = [1, 2, 3];
console.log(numeros2.constructor); // ƒ Array() { [native code] }

// Ver el constructor de un objeto
const objeto = {};
console.log(objeto.constructor); // ƒ Object() { [native code] }

// Ver el constructor de un string
const palabra2 = "JavaScript";
console.log(palabra2.constructor); // ƒ String() { [native code] }

// Ver el constructor de un número
const numero = 100;
console.log(numero.constructor); // ƒ Number() { [native code] }

// Ver el constructor de una clase personalizada
class Persona {
    constructor(nombre) {
      this.nombre = nombre;
    }
  }
const usuario = new Persona("Carlos");
console.log(usuario.constructor); // ƒ Persona(nombre) { this.nombre = nombre; }


// CopyWithin: se usa para copiar una parte de un array y pegarla en otra parte del mismo array, 
// cambiar su tamaño. Modifica el array original.
// Sintaxis: array.copyWithin(target, start, end)

// Sin especificar el parámetro end
const numeros3 = [10, 20, 30, 40, 50];
numeros.copyWithin(1, 3);  
console.log(numeros3); // [10, 40, 50, 40, 50]

// Especificando todos los parámetros
const letras = ["a", "b", "c", "d", "e"];
letras.copyWithin(0, 2, 4);  
console.log(letras); // ["c", "d", "c", "d", "e"]

//Con valores negativos
const numeros4 = [1, 2, 3, 4, 5];
numeros.copyWithin(-2, 0, 2);
console.log(numeros4); // [1, 2, 3, 1, 2]

// Con valores decimales
const numeros5 = [1, 2, 3, 4, 5];
numeros.copyWithin(1, 0, 2.5);
console.log(numeros5); // [1, 1, 2, 4, 5]


// Entries: devuelve un iterador que contiene pares [índice, valor] 
// de un array. Se usa para recorrer un array con sus índices. 
//.entries() devuelve un iterador, mientras que forEach() ejecuta una función inmediatamente.
// Sintaxis: array.entries()

const frutas1 = ["manzana", "banana", "cereza"];
const iterador = frutas.entries();

for (const [indice, valor] of iterador) {
  console.log(indice, valor);
}
//0 "manzana"
//1 "banana"
//2 "cereza"

// Every: verifica si todos los elementos de un array cumplen con una condición.
// Devuelve true si todos los elementos cumplen la condición, de lo contrario, false.
// Sintaxis: array.every(callback(elemento, índice, array), thisArg);
// callback → Función que se ejecuta en cada elemento.
// elemento → Elemento actual del array.
// índice (opcional) → Posición del elemento en el array.
// array (opcional) → El array completo.
// thisArg (opcional) → Valor a usar como this dentro del callback.

// Verificar si todos los números son pares
const numeros6 = [2, 4, 6, 8];
const todosPares = numeros.every(num => num % 2 === 0);
console.log(todosPares); // true

//  Verificar si todos los números son mayores o iguales a 18
const edades = [18, 22, 15, 30];
const sonMayores = edades.every(edad => edad >= 18);
console.log(sonMayores); // false

// Verificar si todos los elementos son strings
const nombres = ["Juan", "Ana", "Pedro"];
const sonStrings = nombres.every(nombre => typeof nombre === "string");
console.log(sonStrings); // true

// Ejemplo con thisArg
const limite = { max: 10 };
const valores = [3, 7, 9];

const dentroDelLimite = valores.every(function (num) {
  return num <= this.max;
}, limite);
console.log(dentroDelLimite); // true


// Fill: se usa para rellenar todos los elementos de un array con un valor
// específico en un rango determinado. Modifica el array original.
// Sintaxis: array.fill(valor, inicio, fin)

// Rellenar todos los elementos con un valor
const numeros7 = [1, 2, 3, 4, 5];
numeros.fill(0);
console.log(numeros7); // [0, 0, 0, 0, 0]

// Llenar desde un índice específico
const numeros8 = [1, 2, 3, 4, 5];
numeros.fill(9, 2);
console.log(numeros); // [1, 2, 9, 9, 9]

// Llenar en un rango específico
const numeros9 = [1, 2, 3, 4, 5];
numeros.fill(8, 1, 4);
console.log(numeros9); // [1, 8, 8, 8, 5]

// Llenar con valores negativos
const letras1 = ["a", "b", "c", "d", "e"];
letras.fill("x", -3, -1);
console.log(letras1); // ["a", "b", "x", "x", "e"]


// Filter: se usa para filtrar los elementos de un array 
// que cumplan con una condición.
// Sintaxis: array.filter(callback(elemento, índice, array), thisArg);
// callback → Función que se ejecuta en cada elemento.
// elemento → Elemento actual del array.
// índice (opcional) → Posición del elemento en el array.
// array (opcional) → El array completo.
// thisArg (opcional) → Valor a usar como this dentro del callback.

// Filtrar los números mayores a 5
const numeros10 = [1, 3, 7, 2, 9, 4];
const mayoresA5 = numeros10.filter(num => num > 5);
console.log(mayoresA5); // [7, 9]

// Filtrar palabras cortas
const palabras = ["sol", "elefante", "luz", "mariposa"];
const palabrasCortas = palabras.filter(palabra => palabra.length <= 4);
console.log(palabrasCortas); // ["sol", "luz"]

// Filtrar objetos en un array
const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 17 },
  { nombre: "Marta", edad: 30 }
];
const mayoresDeEdad = usuarios.filter(usuario => usuario.edad >= 18);
console.log(mayoresDeEdad); // [{ nombre: "Ana", edad: 25 }, { nombre: "Marta", edad: 30 }]

// Filtrar elementos con índices pares
const numeros11 = [10, 20, 30, 40, 50, 60];
const pares = numeros11.filter((_, indice) => indice % 2 === 0);
console.log(pares); // [10, 30, 50]

// Ejemplo con thisArg
const limite1 = { max: 20 };
const valores1 = [5, 15, 25, 10, 30];

const dentroDelLimite1 = valores1.filter(function (num) {
  return num <= this.max;
}, limite1);
console.log(dentroDelLimite1); // [5, 15, 10]

// find: se usa para encontrar el primer elemento de un array que cumpla con una condición.
// Solo retorna un elemento (o undefined si no encuentra ninguno).  
// Sintaxis: array.find(callback(elemento, índice, array), thisArg);
// callback → Función que se ejecuta en cada elemento.
// elemento → Elemento actual del array.
// índice (opcional) → Posición del elemento en el array.
// array (opcional) → El array completo.
// thisArg (opcional) → Valor a usar como this dentro del callback.

// Encontrar el primer número mayor a 5
const numeros12 = [2, 3, 7, 4, 8, 1];
const primerMayorA5 = numeros12.find(num => num > 5);
console.log(primerMayorA5); // 7

// Buscar un objeto en un array
const usuarios1 = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 17 },
    { nombre: "Marta", edad: 30 }
  ];
  const usuarioMayorDeEdad = usuarios1.find(usuario => usuario.edad >= 18);
  console.log(usuarioMayorDeEdad); // { nombre: "Ana", edad: 25 }
  
// Encontrar la primera palabra con más de 5 letras y que no sea la primera del array (Buscar un elemento con un índice específico)
const palabras1 = ["hola", "mundo", "javascript", "web"];
const palabraLarga = palabras1.find((palabra, indice) => palabra.length > 5 && indice > 1);
console.log(palabraLarga); // "javascript"

// Si no encuentra coincidencias
const numeros13 = [1, 2, 3, 4];
const mayorA10 = numeros13.find(num => num > 10);
console.log(mayorA10); // undefined

// Ejemplo con thisArg
const limite2 = { max: 20 };
const valores2 = [5, 15, 25, 10, 30];

const primerDentroDelLimite = valores2.find(function (num) {
  return num <= this.max;
}, limite2);
console.log(primerDentroDelLimite); // 5

// FindIndex: se usa para encontrar el índice del primer elemento de un array que cumpla con una condición.
// Si no encuentra ningún elemento, devuelve -1.
// Sintaxis: array.findIndex(callback(elemento, índice, array), thisArg);
// callback → Función que se ejecuta en cada elemento.
// elemento → Elemento actual del array.
// índice (opcional) → Posición del elemento en el array.
// array (opcional) → El array completo.
// thisArg (opcional) → Valor a usar como this dentro del callback.

// Encontrar el índice del primer número mayor a 5
const numeros14 = [2, 3, 7, 4, 8, 1];
const indiceMayorA5 = numeros14.findIndex(num => num > 5);
console.log(indiceMayorA5); // 2

// Buscar el índice de un objeto en un array
const usuarios2 = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 17 },
    { nombre: "Marta", edad: 30 }
  ];
  const indiceUsuarioMayorDeEdad = usuarios2.findIndex(usuario => usuario.edad >= 18);
  console.log(indiceUsuarioMayorDeEdad); // 0

// Si no encuentra coincidencias
const numeros15 = [1, 2, 3, 4];
const indiceMayorA10 = numeros15.findIndex(num => num > 10);
console.log(indiceMayorA10); // -1

// Ejemplo con thisArg
const limite3 = { max: 20 };
const valores3 = [5, 15, 25, 10, 30];

const indiceDentroDelLimite = valores3.findIndex(function (num) {
    return num <= this.max;
}, limite3);
console.log(indiceDentroDelLimite); // 0


// Flat: se usa para aplanar un array, es decir, convertir un array
// multidimensional en un array de una sola dimensión.
// Sintaxis: array.flat(profundidad);
// profundidad (opcional) → Número que indica la profundidad de aplanamiento.

// Aplanar un array con un nivel de profundidad (por defecto 1)
const numeros16 = [1, [2, 3], 4, [5, 6]];
const numerosAplanados = numeros16.flat();
console.log(numerosAplanados); // [1, 2, 3, 4, 5, 6]

// Especificar la profundidad de aplanamiento
const array = [1, [2, [3, [4, 5]]]];
console.log(array.flat(1));  
// [1, 2, [3, [4, 5]]]  (Solo aplana un nivel)

console.log(array.flat(2));  
// [1, 2, 3, [4, 5]]  (Aplana dos niveles)

console.log(array.flat(Infinity));  
// [1, 2, 3, 4, 5]  (Aplana todo)

// Aplanar un array con elementos vacíos y undefined
const numeros17 = [1, 2, , 4, [5, , 6]];
console.log(numeros17.flat()); // [1, 2, 4, 5, 6]


// FlatMap: se usa para mapear cada elemento de un array y aplanar el resultado en un nuevo array.
// Sintaxis: array.flatMap(callback(elemento, índice, array), thisArg);
// callback → Función que se ejecuta en cada elemento.
// elemento → Elemento actual del array.
// índice (opcional) → Posición del elemento en el array.
// array (opcional) → El array completo.
// thisArg (opcional) → Valor a usar como this dentro del callback.

// Multiplicar valores y aplanar el resultado
const numeros18 = [1, 2, 3];
const resultado = numeros18.flatMap(num => [num, num * 2]);
console.log(resultado); // [1, 2, 2, 4, 3, 6]

// Comparación entre .map().flat(1) y .flatMap()
const numeros19 = [1, 2, 3];

const resultado1 = numeros19.map(num => [num, num * 2]).flat();
console.log(resultado1); // [1, 2, 2, 4, 3, 6]

const resultado2 = numeros19.flatMap(num => [num, num * 2]);
console.log(resultado2); // [1, 2, 2, 4, 3, 6]

// Eliminar elementos transformados
const palabras3 = ["hola", "mundo", "JS", "web"];
const resultado3 = palabras3.flatMap(palabra => palabra.length > 3 ? palabra : []);
console.log(resultado3); // ["hola", "mundo"]

// Expandiendo texto
const frases = ["Hola mundo", "JS es genial"];
const palabrasSeparadas = frases.flatMap(frase => frase.split(" "));
console.log(palabrasSeparadas); // ["Hola", "mundo", "JS", "es", "genial"]

// Usando thisArg
const multiplicador = { factor: 2 };
const numeros20 = [1, 2, 3];

const resultado4 = numeros.flatMap(function (n) {
  return [n, n * this.factor];
}, multiplicador);

console.log(resultado); // [1, 2, 2, 4, 3, 6]


// ForEach: se usa para ejecutar una función en cada elemento de un array, pero no devuelve uno nuevo.
// Sintaxis: array.forEach(callback(elemento, índice, array), thisArg);
// callback → Función que se ejecuta en cada elemento.
// elemento → Elemento actual del array.
// índice (opcional) → Posición del elemento en el array.
// array (opcional) → El array completo.
// thisArg (opcional) → Valor a usar como this dentro del callback.

// Recorrer un array e imprimir valores
const numeros21 = [1, 2, 3, 4];

numeros21.forEach(num => console.log(num));
// 1
// 2
// 3
// 4

// Recorrer un array con índices
const letras2 = ["a", "b", "c"];
letras2.forEach((letra, i) => console.log(`Índice ${i}: ${letras2}`));
// Índice 0: a
// Índice 1: b
// Índice 2: c

// Modificar elementos dentro del array
const numeros22 = [1, 2, 3];
numeros22.forEach((num, i, arr) => arr[i] = num * 2);
console.log(numeros22); // [2, 4, 6]

// Usando thisArg

const doble = { factor: 2 };
const numeros23 = [1, 2, 3];

numeros23.forEach(function (num) {
  console.log(num * this.factor);
}, doble);
// 2
// 4
// 6


// Includes: se usa para verificar si un array contiene un elemento específico.
// Devuelve true si lo encuentra, de lo contrario, false.
// Sintaxis: array.includes(valor, inicio);
// valor → Elemento a buscar en el array.
// inicio (opcional) → Índice de inicio de la búsqueda.

// Verificar si un array contiene un número
const numeros24 = [1, 2, 3, 4, 5];

console.log(numeros24.includes(3)); // true
console.log(numeros24.includes(6)); // false

//Usar el parámetro desde
const letras3 = ["a", "b", "c", "d", "e"];

console.log(letras3.includes("c", 2)); // true
console.log(letras3.includes("c", 3)); // false

// Buscar valores NaN
const valores4 = [1, 2, NaN, 4, 5];

console.log(valores4.includes(NaN)); // true


// IndexOf: busca un valor en un array y devuelve su índice. Si no lo encuentra, devuelve -1.
// Sintaxis: array.indexOf(valor, inicio);
// valor → Elemento a buscar en el array.
// inicio (opcional) → Índice de inicio de la búsqueda.

// Encontrar el índice de un número
const numeros25 = [1, 2, 3, 4, 5];

console.log(numeros25.indexOf(3)); // 2
console.log(numeros25.indexOf(6)); // -1

// Usar el parámetro desde
const letras4 = ["a", "b", "c", "d", "e"];

console.log(letras4.indexOf("c", 2)); // 2
console.log(letras4.indexOf("c", 3)); // -1

// Buscar elementos que no existen
const valores5 = [1, 2, 3, 4, 5];

console.log(valores5.indexOf(0)); // -1
console.log(valores5.indexOf(6)); // -1


// Join: convierte un array en una cadena de texto, separando los elementos con el separador que elijas.
// Sintaxis: array.join(separador);
// separador (opcional) → Carácter que se usa para separar los elementos.

// Convertir un array en una cadena de texto
const frutas2 = ["manzana", "banana", "cereza"];
console.log(frutas2.join()); // "manzana,banana,cereza"

// Unir números en una cadena
const numeros26 = [1, 2, 3, 4, 5];
console.log(numeros26.join(" - ")); // "1 - 2 - 3 - 4 - 5"

// Convertir un array en una URL
const ruta = ["home", "productos", "item"];
console.log(ruta.join("/")); // "home/productos/item"

// Formatear un mensaje
const mensaje = ["Ana", "Luis", "María"];
console.log(`Participantes: ${mensaje.join(", ")}`); // "Participantes: Ana, Luis, María"

// Convertir un array en una cadena de texto con espacios
const letras5 = ["a", "b", "c", "d", "e"];
console.log(letras5.join(" ")); // "a b c d e"


// Keys:  devuelve un iterador con las claves (índices) de los elementos de un array.
// Sintaxis: array.keys()

// Obtener las claves de un array
const frutas3 = ["manzana", "banana", "cereza"];
const iterador1 = frutas3.keys();

for (const clave of iterador1) {
  console.log(clave);
}
// 0
// 1
// 2

// Convertir el iterador en un array
const letras6 = ["a", "b", "c"];
const indices = Array.from(letras6.keys());
console.log(indices); // [0, 1, 2]

// Usar las claves para acceder a los elementos
const frutas4 = ["manzana", "banana", "cereza"];
const iterador2 = frutas4.keys();

for (const clave of iterador2) {
  console.log(frutas4[clave]);
}
// "manzana"
// "banana"
// "cereza"

// .keys() en un array con huecos (empty slots)
const arreglo = [10, , 30]; // Índice 1 está vacío

const iterador3 = arreglo.keys();
for (let clave of iterador3) {
  console.log(clave);
}
// 0
// 1
// 2


// LastIndexOf: busca un valor en un array y devuelve su última aparición (su índice más alto). Si el valor no existe, devuelve -1.
// Sintaxis: array.lastIndexOf(valor, inicio);
// valor → Elemento a buscar en el array.
// inicio (opcional) → Índice de inicio de la búsqueda.

// Encontrar la última aparición de un número
const numeros27 = [10 , 20, 30, 40, 20, 50];

console.log(numeros27.lastIndexOf(20)); // 4
console.log(numeros27.lastIndexOf(60)); // -1

// Buscar desde una posición específica
const letras7 = ["a", "b", "c", "d", "b", "e"];
console.log(letras7.lastIndexOf("a")); // 3
console.log(letras7.lastIndexOf("a", 2)); // 0

// .lastIndexOf() no detecta NaN
const valores6 = [1, 2, NaN, 4, 5]; 
console.log(valores6.lastIndexOf(NaN)); // -1







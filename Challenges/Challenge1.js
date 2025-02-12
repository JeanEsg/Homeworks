// Diferencias entre regular function y arrow function: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// Diferencias en el this:

// Funciones regulares: El valor de this depende de como se llama la funcion. Si se llama dentro de un objeto, this hace
// referencia al objeto. Si se usa en un evento, this apunta al elemento que disparo el evento.
// Funciones flecha (=>): No tienen su propio this. En su lugar, this se hereda del contexto donde se definieron (lexical this).
const objeto = {
    nombre: "Ejemplo",
    regular: function() {
      console.log(this.nombre); // "Ejemplo"
    },
    flecha: () => {
      console.log(this.nombre); // `undefined` en un objeto, porque `this` es el del contexto externo (en este caso, `window` o `undefined` en modo estricto).
    }
  };
  objeto.regular(); // "Ejemplo"
  objeto.flecha();  // undefined


// Uso de arguments:
// Funciones regulares: Tienen acceso a arguments, un objeto similar a un array que contiene los argumentos pasados a la funcion.
// Funciones flecha: No tienen arguments, pero pueden usar el operador rest (...args) para lograr un comportamiento similar.
function regular() {
    console.log(arguments); // Muestra los argumentos pasados
  }
  
  const flecha = () => {
    console.log(arguments); // Error: `arguments` no esta definido
  };
  
  regular(1, 2, 3); 
  flecha(1, 2, 3);  // Esto generará un error

// Para solucioanr el problema anterior, se puede hacer lo siguiente:
const flechaConArgs = (...args) => {
    console.log(args); // [1, 2, 3]
  };
  
  flechaConArgs(1, 2, 3);


// Uso como métodos de objetos:
// Funciones regulares: Son más adecuadas para métodos en objetos porque pueden hacer referencia al objeto usando this.
// Funciones flecha: No deben usarse como métodos de objetos, ya que this no funcionará como se espera.
const obj = {
    valor: 42,
    metodoRegular: function() {
      return this.valor; // Funciona correctamente
    },
    metodoFlecha: () => {
      return this.valor; // `this` no apunta al objeto, sino al contexto externo
    }
  };
  
  console.log(obj.metodoRegular()); // 42
  console.log(obj.metodoFlecha());  // undefined


// No pueden ser constructores:
// Funciones regulares: Se pueden usar con new para crear objetos.
// Funciones flecha: No pueden ser usadas como constructores y lanzarán un error si se intenta usarlas con new.
function Persona(nombre) {
  this.nombre = nombre;
}

const PersonaFlecha = (nombre) => {
  this.nombre = nombre; // No funciona
};

const p1 = new Persona("Juan"); // Funciona
const p2 = new PersonaFlecha("Pedro"); // Error


// No tienen prototipos:
// Funciones regulares: Tienen un prototipo que se puede modificar.
// Funciones flecha: No tienen prototipo.
function Regular() {}
const flecha1 = () => {};

console.log(Regular.prototype); // Regular {}
console.log(flecha1.prototype);  // undefined

// Más concisas y útiles para funciones cortas:
// Funciones regulares: Necesitan return explícito cuando se usa un bloque {}.
// Funciones flecha: Si el cuerpo de la función es una sola expresión, el valor de esa expresión se retorna automáticamente sin necesidad de escribir return.
function regularSumar(a, b) {
    return a + b;
  }
  
  const flechaSumar = (a, b) => a + b;
  
  console.log(regularSumar(2, 3)); // 5
  console.log(flechaSumar(2, 3));  // 5


// Create a new function in Regular and Arrow types, which should receive a number and will print in console if that number is either odd or even
function regularParImpar(num) {
    if (num % 2 === 0) {
      console.log("Par");
    } else {
      console.log("Impar");
    }
  }

const flechaParImpar = (num) => {
    if (num % 2 === 0) {
      console.log("Par");
    } else {
      console.log("Impar");
    }
}

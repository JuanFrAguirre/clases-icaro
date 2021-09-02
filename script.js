// FUNCTIONS
// es una forma de encapsular un bloque de codigo para poder ejecutarlo cuando se "llame" a esa funcion.
// las funciones pueden o no devolver un valor (el return) a donde sea que hayan sido llamadas o a quien sea que las haya llamado
// la funcion tiene parentesis, donde va a esperar (si los hay) algun parametro, que son datos o variables que pueden ser opcionales y que tienen alguna utilidad dentro del bloque de codigo
// la funcion tiene unas llaves dentro de las cuales va a ir nuestro bloque de codigo a ejecutarse

// function myFunction(nombre) {
//   console.log("hola soy " + nombre);
//   console.log("como es tu nombre?");
// }

// function iterar(funcion, parametros, veces) {
//   for (let i = 0; i < veces; i++) {
//     funcion(parametros);
//   }
// }

// iterar(myFunction, "Juan", 10);

// --------------------------

function myFunction2(nombre) {
  return `Hola soy ${nombre}`
}

const saludar = function (mensaje1, mensaje2) {
  console.log(mensaje1)
  console.log(mensaje2)
}

saludar(myFunction2('Juan'), myFunction2('Jorge'))

// --------------------------

// Arrow Functions

// function myFunction2(nombre) {
//   return `Hola soy ${nombre}`;
// }

// function myFunction3() {
//   return 'hola'
// }

// las arrow functions no llevan la palabra reservada function y ademas luego de los parentesis llevan la flecha o arrow ( => ) ademas si queremos darles un nombre podemos asignarlas a una variable

const saludar2 = (nombre) => {
  console.log('como es tu nombre?')
  return `Hola soy ${nombre}`
}

const myFunction3 = () => {
  return 'hola'
}

// si el return es la unica instruccion en el bloque de codigo, podemos obviar la palabra 'return' y las llaves

const myFunction4 = () => 'hola'
const myFunction5 = () => console.log('hola')

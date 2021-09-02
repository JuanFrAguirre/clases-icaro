let nombres = ['Luke', 'Leia', 'Han', 'Chewie', 'Lando', 'Ben', 'Padme', 'Rey']
// 1 - dado el array nombres, utilizar algun metodo que recorra arrays para que imprima por consola cada nombre

// nombres.forEach((nombre) => {
//   console.log(nombre);
// });

// 2 - dado el array nombres, utilizar algun metodo que recorra arrays para crear un nuevo array llamado nombres2, y popularlo con los mismos elementos del array nombres, pero modificando cada nombre para que quede el nombre mas el string ' - SW'. Imprimir el array nombres2

const nombres2 = nombres.map(function (nombre) {
  return (nombre += ' - SW')
})

// console.log(nombres2);

// 3 - dado el array nombres2 creado en el punto anterior, crear un array llamado nombres3 donde cada elemento sea un objeto que contenga el elemento original del array nombres2 como valor de una propiedad nombre. Imprimir el array nombres3
// por ejemplo {nombre: 'Luke - SW'}

const nombres3 = nombres2.map((nombre) => {
  return { nombre }
})

// console.log("Original", nombres3);

// 4 - dado el array nombres3 creado en el punto anterior, utilizar algun metodo para eliminar los ultimos dos elementos del mismo. Imprimir el array nombres3

// nombres3.pop();
// nombres3.pop();

// nombres3.splice(-2);

// console.log(nombres3);

// 5 - dado el array nombres3 utilizar algun metodo para quitar el primer elemento del mismo, y luego utilizar otro metodo para agregar el siguiente objeto. Imprimir el array nombres3
// { nombre: 'Anakin - SW' }

nombres3.shift()
nombres3.unshift({ nombre: 'Anakin - SW' })
// console.log(nombres3);

// 6 - realizar el ultimo punto (quitar y agregar al primer elemento) con un solo metodo, quitando el objeto { nombre: 'Anakin -SW' } y agregando el objeto { nombre: 'Darth Vader - SW' }. Imprimir el array nombres3

// nombres3.splice(0, 1, { nombre: "Anakin - SW" });

// 7 - dado el array nombres3 insertar en la posicion 2 los siguientes objetos { nombre: 'C3PO - SW'} y { nombre: 'R2D2 - SW' }. Imprimir el array nombres3

nombres3.splice(2, 0, { nombre: 'C3PO - SW' }, { nombre: 'R2D2 - SW' })
// console.log(nombres3);

// 8 - dado el array nombres3 quitar 2 elementos desde la posicion 4. Imprimir el array nombres3

nombres3.splice(4, 2)
// console.log(nombres3);

// 9 - dado el array nombres crear un array nombres4 donde cada elemento sea un objeto que tenga una propiedad nombre con el valor original de cada elemento en el array nombres y otra propiedad id que se relacione con el indice de cada elemento. Imprimir el array nombres4

const nombres4 = nombres.map((elementoOriginal, index) => {
  return { nombre: elementoOriginal, id: index }
})

// console.log(nombres4);

// BONUS (desafio opcional)
// 10 - dado el siguiente array bonus1 utilizar el metodo splice para agregar el array bonus2 en la posicion 3, pero no como un array dentro de otro array, si no como elementos de tipo string dentro del array original.
let bonus1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
let bonus2 = ['C.1', 'C.2', 'C.3', 'C.4']
// deberia quedar ['A', 'B', 'C', 'C.1', 'C.2', 'C.3', 'C.4', 'D', 'E', 'F', 'G']

bonus1.splice(3, 0, ...bonus2)

// console.log(bonus1);

// ------------------------------------------------
// SPREAD OPERATOR
// seria una forma de obtener el contenido de lo que sea que pongamos a la derecha del operador, para poder acceder al mismo sin modificar las referencias en memoria
const objeto1 = { nombre: 'Juan Francisco' }

let objeto2 = { ...objeto1 }

console.log(objeto1, objeto2)

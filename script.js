// let my_array = ["Gaston", "Juan", "Matias", "Ruben", "Melanie", "Jose"];

// console.log(my_array);

// FOR
// for (let i = 0; i < my_array.length; i++) {
// if (my_array[i] == undefined) {
//   console.log("no hay nada en la posicion", i);
//   continue;
// }
// console.log(my_array[i]);
// }

// FOR EACH
// la dif principal entre el for y el for each es que el foreach solo recorre segun la cantidad de elementos que existan en el array que se recorre, mientras que al for puedo decirle que de tantas vueltas como sus parametros se lo indiquen
// let number = 0;
// my_array.forEach((i, index) => {
//   console.log(number);
//   number++;
//   console.log(index);
//   my_array[index] = "fruta";
// });

// console.log(my_array);

// console.log("la variable number quedo en", number);

// MAP
// el metodo map devuelve un nuevo array con el restultado de lo que sea que hagamos con el array al que le llamamos el .map()

// let my_array = [
//   { nombre: "Gaston", apellido: "Micozzi" },
//   { nombre: "Juan", apellido: "Aguirre" },
//   { nombre: "Matias", apellido: "Duarte" },
//   { nombre: "Ruben", apellido: "Paez" },
// ];

// let my_array2 = my_array.map((i) => {

//   return `${i.nombre} ${i.apellido}`;
// });

// let my_array2 = my_array.map((i) => `${i.nombre} ${i.apellido}`);

// let my_array2 = [];

// my_array.forEach((i, index) => {
//   my_array2[index] = `${i.nombre} ${i.apellido}`;
// });

// let ids = [2, 5, 7, 45, 78, 93];

// let my_array3 = my_array.map((i, index) => {
//   return { ...i, id: index, modificadoPor: "Juan" };
// });

// console.log("array original: ", my_array);
// console.log("array modificado: ", my_array2);
// console.log("array modificado: ", my_array3);

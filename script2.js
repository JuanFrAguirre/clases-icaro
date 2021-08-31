const sp = () => console.log(' ')

console.log('Array frutas original')
let frutas = ['Banana', 'Manzana', 'Uva', 'Pera']
console.log(frutas)

// --------------------

sp()
console.log('Metodo push')
frutas.push('Naranja')
// let frutas2 = frutas.push("Naranja");
// console.log(frutas2);
console.log(frutas)

// --------------------

sp()
console.log('Metodo pop')
frutas.pop()
console.log(frutas)

// --------------------

sp()
console.log('Metodo shift')
frutas.shift()
console.log(frutas)

// --------------------

sp()
console.log('Metodo unshift')
frutas.unshift('Banana')
console.log(frutas)

// --------------------

sp()
console.log('Metodo join')
// el metodo join NO modifica al array original, sino que DEVUELVE un string con los elementos del array original unidos por lo que se pase por parametro (en su defecto si no pasamos nada, se unen por comas)
let stringFrutas = frutas.join()
console.log(stringFrutas)
stringFrutas = frutas.join('')
console.log(stringFrutas)
stringFrutas = frutas.join(',')
console.log(stringFrutas)
stringFrutas = frutas.join(' ')
console.log(stringFrutas)
stringFrutas = frutas.join(' - ')
console.log(stringFrutas)

// --------------------

sp()
console.log('Metodo split')
let arrayFrutasReUnidas = stringFrutas.split()
console.log(arrayFrutasReUnidas)
arrayFrutasReUnidas = stringFrutas.split('')
console.log(arrayFrutasReUnidas)
arrayFrutasReUnidas = stringFrutas.split(' ')
console.log(arrayFrutasReUnidas)
arrayFrutasReUnidas = stringFrutas.split('-')
console.log(arrayFrutasReUnidas)
arrayFrutasReUnidas = stringFrutas.split(' - ')
console.log(arrayFrutasReUnidas)

// --------------------

sp()
console.log('Metodo splice')
frutas.splice(1, 0, 'Mandarina', 'Kiwi')
console.log(frutas)

// --------------------

sp()
console.log('Metodo slice')
// en el slice el primer parametro es el DESDE (incluyendolo) y el segundo es el HASTA (sin incluirlo). Ambos parametros son opcionales
let slice1 = frutas.slice(-3)
console.log(slice1)

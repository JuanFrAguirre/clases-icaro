// console.log('log sincronico antes de la peticion');

// fetch('https://jsonplaceholder.typicode.com/todos/63')
//   .then((res) => {
//     console.log('log asincronico antes de recibir respuesta');
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     console.log('log asincronico desp de recibir respuesta');
//   })
//   .catch((err) => console.error(err));

// console.log('log sincronico antes de la peticion');

// -----------------------------------

// aqui guardamos los elementos HTML como constantes de JS para acceder a ellos desde el codigo
const btnBuscar = document.getElementById('btnBuscar');
const pokemonForm = document.getElementById('pokemonForm');
const pokemonInput = document.getElementById('pokemonInput');
const pokemonName = document.getElementById('pokemonName');
const pokemonId = document.getElementById('pokemonId');
const pokemonImg = document.getElementById('pokemonImg');
const pokemonInfo = document.getElementById('pokemonInfo');
const pokemonList = document.getElementById('pokemonList');

// aqui creamos una funcion que reciba un 'tipo de elemento' y un 'contenido' para crear un elemento de ese tipo y con ese contenido como texto interno, y que devuelva el elemento en cuestion
const createTitle = (elementType, texto) => {
  let x = document.createElement(elementType);
  x.innerText = texto;
  return x;
};

// aqui definimos simplemente las dos variables a reutilizar luego al llenar con datos
let pokemonListData = [];
let selectedPokemon;

// guardamos nuestra URL como una constante para claridad de codigo
const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon';

// nuestra primera funcion de obtencion de datos, donde pedimos los primeros 20 pokemon (recordemos que a pesar de solo llamar a .../v2/pokemon en realidad se le agrega a esta peticion automaticamente un offset de 20 y un limite de 20: el offset seria cuantos elementos queremos 'saltarnos' y el limite la cantidad de elementos que queremos traer)
const getPokemonList = () => {
  // el fetch es el metodo que nos permite hacer la peticion a una API de manera asincronica
  fetch(pokemonUrl)
    // luego aqui con los .then esperamos a la respuesta del servidor y en el primer .then convertimos esa respuesta a un JSON para poder manejar esos datos
    .then((res) => res.json())
    // aqui en el segundo .then utilizamos la data que nos llega
    .then((data) => {
      // mapeamos la data y por cada resultado llenamos el array con solo el nombre
      pokemonListData = data.results.map((x) => x.name);
      console.log(pokemonListData);
      // aqui creamos un elemento con el nombre de cada pokemon y lo insertamos en el elemento HTML correspondiente
      pokemonListData.forEach((x) => {
        pokemonList.appendChild(createTitle('p', x));
      });
    })
    // aqui el catch nos sirve por si ocurre algun error, poder imprimir en consola que ocurrio y poder depurar el codigo
    .catch((err) => console.log('ERROR: ', err));
};

// nuestra segunda funcion asincronica de obtencion de datos, esta vez pasandole un parametro para que haga una peticion mas especifica
const getPokemonById = (id) => {
  // primero nos aseguramos de que el elemento de info del pokemon seleccionado este oculto
  pokemonInfo.classList.add('hidden');
  console.log(pokemonInfo.classList.contains('hidden'));
  console.log('buscando...');

  // realizamos la peticion con el id especifico
  fetch(`${pokemonUrl}/${id}`)
    .then((res) => res.json())
    .then((data) => {
      // aqui guardamos los datos del pokemon especifico, y los utilizamos para 'llenar' los elementos de HTML con estos datos
      selectedPokemon = data;
      console.log(selectedPokemon);

      // aqui utilizamos el nombre que nos llega en minusculas y usando los metodos que conocemos de arrays, podemos lograr que la primer letra sea mayusculas ya que JS no tiene un metodo para tal fin
      let name = selectedPokemon.name.toLowerCase().split('');
      name.splice(0, 1, name[0].toUpperCase());
      pokemonName.innerText = name.join('');
      // Otra forma de lograr lo mismo podria ser utilizando lo siguiente
      // pokemonName.innerText =
      //   selectedPokemon.name.charAt(0).toUpperCase() +
      //   selectedPokemon.name.toLowerCase().slice(1);
      pokemonId.innerText = selectedPokemon.id;

      // aqui reseteamos la imagen para que no nos muestre la del pokemon anterior antes de cargar la nueva
      pokemonImg.src = '';
      pokemonImg.src = selectedPokemon.sprites.front_default;
    })
    .then(() => {
      // finalmente mostramos nuevamente el elemento de info del pokemon seleccionado
      pokemonInfo.classList.remove('hidden');
    })
    // en caso de error, mostramos el error por consola y ademas avisamos al usuario del fallo
    .catch((err) => {
      console.error(err);
      alert('Lo siento, no pudimos encontrar ese pokemon!');
    });
};

// ocultamos la info al iniciar la app
pokemonInfo.classList.add('hidden');

// aqui unimos el evento del click del buscar con la funcion correspondiente
btnBuscar.addEventListener('click', () => {
  getPokemonById(pokemonInput.value);
});

// aqui manejamos el submit del formulario y limpiamos el mismo
pokemonForm.addEventListener('submit', (e) => {
  e.preventDefault();
  btnBuscar.click();
  pokemonForm.reset();
});

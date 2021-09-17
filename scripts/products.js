// Variables de HTML
const pizzas = document.querySelector("#pizzas");

let pizzaInfo =
  '<h4 id="pizza-name"></h4><h3 ="pizza-price"></h3><div class="pizza-toppings"><h5>Toppings</h5><ul id="pizza-toppings"></ul></div>';

let menu = [];
let loading = true;

// Crear elementos de pizza
const createPizzaElement = (id, pizzaName, pizzaPrice) => {
  const element1 = document.createElement("div");

  element1.innerHTML = pizzaInfo;
  element1.children[0].innerText = pizzaName;
  element1.children[1].innerText = pizzaPrice;

  // acceder al div toppings dentro de cada pizza
  // element1.children[2].children[1]

  element1.id = "pizza-" + id;

  return element1;
};

// Llamado a la API
fetch(
  "https://private-anon-955a8c35cd-pizzaapp.apiary-mock.com/restaurants/1/menu?category=Pizza&orderBy=rank"
)
  .then((res) => res.json())
  .then((data) => {
    menu.push(data);
    console.log(menu);
    loading = false;

    data.forEach((x, i) => {
      if (x.category === "Pizza") {
        pizzas.appendChild(createPizzaElement(i + 1, x.name, x.price));
      }
    });
  });

// Funciones especificas

## Consignas

- Crear un proyecto nuevo de Angular con la estructura planteada en clases (ver ejemplo 1), teniendo en cuenta los siguientes puntos.
- Implementar ruteo en nuestra aplicacion (agregar el flag --routing al comando del CLI al momento de crear el proyecto o cada modulo que lo requiera).
- Crear los modulos core y shared con el contenido respectivo.
- Crear una seccion pages que albergue un modulo por cada "pagina" de nuestro sitio (recordar ejemplos de clase y aplicar el flag --routing al crear estos modulos para poder utilizar el ruteo anidado para modulos que se vio en clase). Cada una de estas carpetas individuales (que contienen al modulo de esa pagina) debera contener tambien una carpeta components para albergar al/los componente/s correspondiente/s.(ver ejemplo 2).
- Crear una carpeta components en el modulo de shared y otra en el de core.
- En la carpeta components del core crear los componentes para el header, el footer y el not-found, con sus maquetados correspondientes.
- Editar el app-routing.module.ts para que refleje las siguientes rutas:
  - home (hacia aqui se deberia redirigir la ruta vacia por defecto)
  - otras pages...
  - dentro de cada page sus subrutas correspondientes (que deberan ser gestionadas en)
  - cualquier cosa que no entre por una ruta anterior deberia redirigir al componente not-found

### Ejemplos

#### Ejemplo 1

--src
|--app
| |--core
| | |--components
| | |--services
| | |--models
| |
| |--pages
| | |--ej-pag1
| | |--ej-pag2
| | |...
| |
| |--shared
| |--components
| |--services
|
|--assets
| |--img
|
|--environments
...

#### Ejemplo 2

...
--pages
|--home
| |--components
| | |--home
| | |--home.component.ts
| | |--home.component.html
| | |--home.component.scss
| |
| |--home.module.ts
| |--home-routing.module.ts
|
|--products
| |--components
| | |--product
| | | |--product.component.ts
| | | |--product.component.html
| | | |--product.component.scss
| | |
| | |--product-list
| | |--product-list.component.ts
| | |--product-list.component.html
| | |--product-list.component.scss
| |
| |--products.module.ts
| |--products-routing.module.ts
|...
...

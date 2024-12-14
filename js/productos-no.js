
const productos = [
    {
      id: 1,
      nombre: "Torta multicolor",
      descripcion: "Torta de chocolate rellena de crema de vainilla con galletitas oreos",
      imagen: "imagen1.jpg",
      precio: 15000,
      stock: "30",
    },
    {
      id: 2,
      nombre: "Producto 1",
      descripcion: "Descripcion producto 2",
      imagen: "imagen2.jpg",
      precio: 20,
      stock: "10",
    },
    {
      id: 3,
      nombre: "Producto 1",
      descripcion: "Descripcion producto 3",
      imagen: "imagen3.jpg",
      precio: 30,
      stock: "80",
    },
  ];

  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];


  const listadoProductos = document.querySelector(".listado-productos");

  listadoProductos.innerHTML = "<h2>Productos</h2>";
  
  // Recorro el array de productos
  productos.forEach((producto) => {
    // Creo el HTML con los datos de cada producto
    const html = `
          <article data-id="${producto.id}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>$ ${producto.precio}</p>
            <button type="button" class="agregar">Agregar</button>
          </article>
      `;
  
    // Agrego la section el html para ir mostrando cada producto
    listadoProductos.innerHTML += html;
  });
  
  // Escucho todos los eventos click el documento
  document.addEventListener("click", (event) => {
    // Si el elemento donde se hizo click contiene la clase 'agregar'
    if (event.target.classList.contains("agregar")) {
      // Busco el contenedor mas cercano que se un 'article'
      // Obtengo el id del atributo data-id
      const id = event.target.closest("article").dataset.id;
  
      // Busco el elemento 'producto' dentro del array producto que tenga el 'id'
      const elemento = productos.find((producto) => producto.id == id);
      console.log(elemento);
  
      // Uso destructuring para creo las constante con los valores del Objeto
      const { nombre, precio } = elemento;
  
      // Creo el objeto producto para insertar en el carrito
      const producto = {
        id: id,
        nombre: nombre,
        precio: precio,
        cantidad: 1,
      };
  
      carrito.push(producto);
  
      // Guardo en el localStorage el array carrito en formato JSON
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  });
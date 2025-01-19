console.log("hola");
//generacion de productos----
const productos = [];
class Producto {
  static ultimoId = 1;
  constructor(nombre, precio, cantidad, descripcion, imagen) {
    (this.id = Producto.ultimoId++),
      (this.nombre = nombre),
      (this.precio = precio),
      (this.cantidad = cantidad),
      (this.descripcion = descripcion), // Agregamos la descripción
      (this.imagen = imagen); // Agregamos la URL de la imagen
  }
}
//productos
const nuevosProductos = [
  {
    stock: 10,
    nombre: "remera",
    descripcion: "remera estampada",
    precio: 7000,
    imagen: "./imagenes/10remera.jpg",
  },
  {
    stock: 10,
    nombre: "remera",
    descripcion: "remera gris",
    precio: 7000,
    imagen: "./imagenes/2remera-gris.jpg",
  },
  {
    stock: 10,
    nombre: "remera",
    descripcion: "remera blanca",
    precio: 6000,
    imagen: "./imagenes/1camiseta-blanca.jpg",
  },
  {
    stock: 10,
    nombre: "camisa",
    descripcion: "camisa blanca",
    precio: 16000,
    imagen: "./imagenes/3camisa-blanca.jpg",
  },
  {
    stock: 10,
    nombre: "pantalon",
    descripcion: "jean claro",
    precio: 26000,
    imagen: "./imagenes/5pantalon-jean.jpg",
  },
  {
    stock: 10,
    nombre: "pantalon",
    descripcion: "jean clasico",
    precio: 25000,
    imagen: "./imagenes/4pantalon-jean.jpg",
  },
  {
    stock: 10,
    nombre: "pantalon",
    descripcion: "jean azul obscuro",
    precio: 23000,
    imagen: "./imagenes/9pantalonPortada.jpg",
  },
  {
    stock: 10,
    nombre: "bermuda",
    descripcion: "bermuda beige ",
    precio: 16000,
    imagen: "./imagenes/7bermudaBeige.jpg",
  },
  {
    stock: 10,
    nombre: "bermuda",
    descripcion: "bermuda negra",
    precio: 18000,
    imagen: "./imagenes/6bermuda.jpg",
  },
  {
    stock: 10,
    nombre: "camisa",
    descripcion: "camisa azul",
    precio: 16000,
    imagen: "./imagenes/8camisa.jpg",
  },
];
productos.push(...nuevosProductos);
// render header
const header = document.querySelector("#jsheader");
header.innerHTML = `<nav class="navbar navbar-expand-lg bg-info-subtle">
  <div class="container-fluid">
    <a class="navbar-brand" href="./index.html">Super Shop</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
        <a class="nav-link" href="./nosotros.html">Nosotros</a>
        <a class="nav-link" href="./contactos.html">Contacto</a>
      </div>
       <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
          <button class="btn btn-outline-secondary" type="submit">buscar</button>
        </form>
         <a href="./cart.html" class="btn btn-dark ms-auto">Cart </a>
    </div>
  </div>
</nav>`;
// render cards de productos
function renderProductos(productos, containerid) {
  const containerCard = document.getElementById(containerid);
  containerCard.innerHTML = "";
  containerCard.classList.add("row", "g-3");
  productos.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");
    card.innerHTML = `
    <div class="card  img-fluid" style="width: 18rem;">
      <img src="${item.imagen}" class="card-img-top img-fluid" alt="..."
       style="height: 200px; object-fit: cover;">
      <div class="card-body">
        <h5 class="card-title">${item.nombre}</h5>
        <p class="card-text">${item.descripcion}</p>
        <p class="card-text">Precio: $${item.precio}</p>
        <a href="./cart.html" class="btn btn-primary">Comprar</a>
      </div>
    </div>
    `;
    containerCard.appendChild(card);
  });
}
//llamo funcion pasando productos y el id del card-container
renderProductos(productos, "jsCard");

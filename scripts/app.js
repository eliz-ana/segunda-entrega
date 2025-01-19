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

productos.push(
  new Producto(
    "Manzana",
    160,
    10,
    "Fruta fresca y deliciosa",
    "./imagenes/frutas.jpg"
  )
);
productos.push(
  new Producto(
    "banana",
    1700,
    4,
    "bananas del caribe",
    "./../imagenes/frutas.jpg"
  )
);
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

function renderProductos(productos, containerid) {
  const containerCard = document.getElementById(containerid);
  containerCard.innerHTML = "";
  containerCard.classList.add("row", "g-3");
  productos.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");
    card.innerHTML = `
    <div class="card d-flex" style="width: 18rem;">
      <img src="${item.imagen}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.nombre}</h5>
        <p class="card-text">Some quick example text to build on the card title.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    `;
    containerCard.appendChild(card);
  });
}
//llamo funcion pasando productos y el id del card-container
renderProductos(productos, "jsCard");

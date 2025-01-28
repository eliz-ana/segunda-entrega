//generacion de productos----
const productos = [];
class Producto {
  static ultimoId = 1;
  constructor(nombre, precio, stock, cantidad, descripcion, imagen) {
    (this.id = Producto.ultimoId++),
      (this.nombre = nombre),
      (this.precio = precio),
      (this.stock = stock),
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
    cantidad: 1,
  },
  {
    stock: 10,
    nombre: "remera",
    descripcion: "remera gris",
    precio: 7000,
    imagen: "./imagenes/2remera-gris.jpg",
    cantidad: 1,
  },
  {
    stock: 10,
    nombre: "remera",
    descripcion: "remera blanca",
    precio: 6000,
    imagen: "./imagenes/1camiseta-blanca.jpg",
    cantidad: 1,
  },
  {
    stock: 10,
    nombre: "camisa",
    descripcion: "camisa blanca",
    precio: 16000,
    imagen: "./imagenes/3camisa-blanca.jpg",
    cantidad: 1,
  },
  {
    stock: 10,
    nombre: "pantalon",
    descripcion: "jean claro",
    precio: 26000,
    imagen: "./imagenes/5pantalon-jean.jpg",
    cantidad: 1,
  },
  {
    stock: 10,
    nombre: "pantalon",
    descripcion: "jean clasico",
    precio: 25000,
    imagen: "./imagenes/4pantalon-jean.jpg",
    cantidad: 1,
  },
  {
    stock: 10,
    nombre: "pantalon",
    descripcion: "jean azul oscuro",
    precio: 23000,
    imagen: "./imagenes/9pantalonPortada.jpg",
    cantidad: 1,
  },
  {
    stock: 10,
    nombre: "bermuda",
    descripcion: "bermuda beige ",
    precio: 16000,
    imagen: "./imagenes/7bermudaBeige.jpg",
    cantidad: 1,
  },
  {
    stock: 10,
    nombre: "bermuda",
    descripcion: "bermuda negra",
    precio: 18000,
    imagen: "./imagenes/6bermuda.jpg",
    cantidad: 1,
  },
  {
    stock: 10,
    nombre: "camisa",
    descripcion: "camisa azul",
    precio: 16000,
    imagen: "./imagenes/8camisa.jpg",
    cantidad: 1,
  },
];
nuevosProductos.forEach((prod) => {
  productos.push(
    new Producto(
      prod.nombre,
      prod.precio,
      prod.stock,
      prod.cantidad,
      prod.descripcion,
      prod.imagen
    )
  );
});
// render header
function renderHeader(params) {
  const header = document.querySelector("#jsheader");
  if (header) {
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
       <form id="searchForm" class="d-flex" role="search">
          <input id="searchInput" class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
          <button class="btn btn-outline-secondary" type="submit">buscar</button>
        </form>
         <a href="./cart.html" class="btn btn-dark ms-auto cart-btn">Cart </a>
    </div>
  </div>
</nav>`;
  } else {
    console.log("el elemento con id jsheader no existe");
  }
}
function renderFooter(params) {
  const footer = document.querySelector("#jsFooter");
  if (footer) {
    footer.innerHTML = `
    <nav class="navbar fixed-bottom  bg-info-subtle">
      <div class="container text-center ">
        <h5 class="mx-auto">SuperShop</h5>
      </div>
      <div class="container text-center mx-auto">
        <p class="fs-5">Contactos:</p>
        <a href="https://www.facebook.com" target="_blank"><i class="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com" target="_blank"><i class="bi bi-instagram"></i></a>
        <a href="#" target="_blank"><i class="bi bi-whatsapp"></i></a>
        <a href="#" target="_blank"><i class="bi bi-envelope-at"></i></a>
      </div>
      <div class=" container text-center">
          <p class="fw-light mx-auto">&copy; 2025 Super Shop. Todos los derechos reservados.</p>
      </div
    </nav>
    `;
  }
}
// render cards de productos
function renderProductos(productos, containerid) {
  const containerCard = document.getElementById(containerid);
  if (containerCard) {
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
        <button class="btn btn-outline-success add-to-cart" data-id="${item.id}">
            Comprar
        </button>
      </div>
    </div>  
    `;
      containerCard.appendChild(card);
    });
  }
}
//setear local storage
function cartSetLocalS(productos) {
  //capturo cart-btn
  const jsCartBtn = document.getElementsByClassName(".cart-btn");
  //capturo cada product card
  const containerCard = document.getElementById("jsCard");
  if (containerCard) {
    containerCard.addEventListener("click", (event) => {
      if (event.target.classList.contains("add-to-cart")) {
        const productId = event.target.getAttribute("data-id");

        const product = productos.find((prod) => {
          return prod.id === Number(productId);
        });

        if (product) {
          let arrCart = JSON.parse(localStorage.getItem("cartValues")) || [];

          // Agregar el producto al carrito
          arrCart.push(product);

          // Guardar el carrito actualizado
          localStorage.setItem("cartValues", JSON.stringify(arrCart));
          contadorCart();
          toastSetter("Se agrego al carrito!");
        } else {
          toastSetter("Producto no encontrado");
        }
      }
    });
  }
}
//generador de toasts
function toastSetter(mensaje) {
  const toastContainer = document.getElementById("jsToastContainer");
  if (toastContainer) {
    const toast = document.createElement("div");
    toast.className = "toast text-bg-success border-0 show";
    toast.role = "alert";
    toast.ariaLive = "assertive";
    toast.ariaAtomic = "true";
    toast.innerHTML = `
    <div class="toast-body">
        ${mensaje}
      </div>
      
    `;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 2000);
  }
}
//actualizar contador del cart
function contadorCart(params) {
  const jsCartBtn = document.querySelector(".cart-btn");
  const cartValues = JSON.parse(localStorage.getItem("cartValues")) || [];
  if (jsCartBtn) {
    jsCartBtn.textContent = `Cart (${cartValues.length})`;
  }
}

function buscador(productos, renderProductos, containerid) {
  const jsSearchForm = document.getElementById("searchForm");
  const jsSearchInput = document.getElementById("searchInput");
  if (jsSearchForm) {
    jsSearchForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const query = jsSearchInput.value.trim().toLowerCase();

      const queryResult = productos.filter((prod) => {
        return prod.nombre.toLowerCase().includes(query);
      });

      renderProductos(queryResult, containerid);
    });
  }
}

renderHeader();
renderFooter();
//llamo funcion pasando productos y el id del card-container
renderProductos(productos, "jsCard");
buscador(productos, renderProductos, "jsCard");
contadorCart();
// guardar en local storage
cartSetLocalS(productos);

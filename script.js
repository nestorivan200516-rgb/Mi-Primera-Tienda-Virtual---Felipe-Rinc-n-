const productos = [
  {
    id: 1,
    nombre: "Proteína En Polvo",
    descripcion: "💪 Potencia tu entrenamiento y alcanza tus objetivos. 🔥",
    precio: 135000,
    imagen: "https://media.revistagq.com/photos/652e593beb42852a34788555/3:4/w_748%2Cc_limit/Scitec%2520Nutrition.jpg"
  },
  {
    id: 2,
    nombre: "Aminoácidos en Polvo",
    descripcion: "💪 Más energía, mejor recuperación y todo por tus objetivos. 🔥",
    precio: 80000,
    imagen: "https://zonafit.co/cdn/shop/files/Amino_X_BSN_30_Serv_Fruit_Punch_0c53f3ac-9e32-4570-8b4a-1afbc701d517.webp?v=1786379024"
  },
  {
    id: 3,
    nombre: "Creatina En Polvo",
    descripcion: "💪 Más fuerza, más rendimiento, mejores resultados. 🔥",
    precio: 98000,
    imagen: "https://contents.mediadecathlon.com/p2772905/k$5d024cac783cb49e91608c2f2d429fbe/creatina-healthy-sports-100-dosis.jpg"
  },
  {
    id: 4,
    nombre: "Multivitaminícos",
    descripcion: "💪 Recarga tu cuerpo, recupera y rinde mejor en cada entrenamiento. ⚡",
    precio: 45000,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK1GoD_MO2oZWKkA5BYAFiovB2HWDj7AZ2hB0INe5nOA&s=10"
  },
  {
    id: 5,
    nombre: "Pre Entreno Gold Standard",
    descripcion: "⚡ Activa tu energía y entrena con más intensidad. 💪🔥",
    precio: 85000,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC5hhcAP8vJLh3d7rE_VZ1_danRfwz36_CWSTTN9YdVQ&s=10"
  }
];


/* ==============================
   CARRITO
================================ */

const carrito = [];

const contenedorProductos = document.getElementById("productos");
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total");


/* ==============================
   MOSTRAR PRODUCTOS
================================ */

function mostrarProductos() {

  contenedorProductos.innerHTML = "";

  productos.forEach(prod => {

    const div = document.createElement("div");

    div.className = "producto";

    div.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">

      <h3>${prod.nombre}</h3>

      <p class="descripcion">
        ${prod.descripcion}
      </p>

      <p class="precio">
        ${prod.precio.toLocaleString("es-CO", {
          style: "currency",
          currency: "COP",
          minimumFractionDigits: 0
        })}
      </p>

      <button onclick="agregarAlCarrito(${prod.id})">
        Agregar al carrito
      </button>
    `;

    contenedorProductos.appendChild(div);

  });

}


/* ==============================
   AGREGAR AL CARRITO
================================ */

function agregarAlCarrito(id) {

  const productoExistente =
    carrito.find(p => p.id === id);

  if (productoExistente) {

    productoExistente.cantidad++;

  } else {

    const producto =
      productos.find(p => p.id === id);

    carrito.push({
      ...producto,
      cantidad: 1
    });

  }

  actualizarCarrito();

}


/* ==============================
   ACTUALIZAR CARRITO
================================ */

function actualizarCarrito() {

  listaCarrito.innerHTML = "";

  let total = 0;
  let totalItems = 0;

  carrito.forEach(item => {

    const li =
      document.createElement("li");

    const subtotal =
      item.precio * item.cantidad;

    li.textContent =
      `${item.nombre} x${item.cantidad} — ` +
      subtotal.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
      });

    listaCarrito.appendChild(li);

    total += subtotal;
    totalItems += item.cantidad;

  });

  totalCarrito.textContent =
    total.toLocaleString("es-CO");

  actualizarTituloCarrito(totalItems);

}


/* ==============================
   CONTADOR DEL CARRITO
================================ */

function actualizarTituloCarrito(cantidad) {

  const titulo =
    document.querySelector(".carrito h2");

  titulo.textContent =
    `🧾 Carrito de Compras (${cantidad})`;

}


/* ==============================
   VACIAR CARRITO
================================ */

function vaciarCarrito() {

  if (carrito.length === 0) {

    alert("🛒 El carrito ya está vacío.");

    return;

  }

  if (
    confirm(
      "¿Estás seguro de que quieres vaciar el carrito?"
    )
  ) {

    carrito.length = 0;

    actualizarCarrito();

  }

}


/* ==============================
   FINALIZAR COMPRA
================================ */

function finalizarCompra() {

  if (carrito.length === 0) {

    alert(
      "🛒 Tu carrito está vacío. Agrega productos antes de finalizar la compra."
    );

    return;

  }

  alert(
    "🎉 ¡Pedido simulado confirmado!\n\n" +
    "En un eCommerce real, ahora entrarían en acción " +
    "el backend, la pasarela de pago y la logística."
  );

  carrito.length = 0;

  actualizarCarrito();

}


/* ==============================
   INICIAR TIENDA
================================ */

mostrarProductos();

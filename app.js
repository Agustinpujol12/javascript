// Definimos los productos con sus detalles
const productos = [
    { id: 1, nombre: "botin", precio: 500 },
    { id: 2, nombre: "zapato", precio: 400 },
    { id: 3, nombre: "zapatilla", precio: 300 }
];


let carrito = [];

function agregarAlCarrito(productoId) {
    const productoEncontrado = productos.find((producto) => producto.id === productoId);
    if (productoEncontrado) {
    carrito.push(productoEncontrado);
    alert(`Se agregó "${productoEncontrado.nombre}" al carrito.`);
    } else {
    alert("Producto no encontrado.");
    }
}


function calcularTotal() {
    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    return total;
}

function mostrarProductos() {
    let mensaje = "Productos disponibles:\n";
    productos.forEach((producto) => {
    mensaje += `${producto.id}. ${producto.nombre} - $${producto.precio}\n`;
    });
    return mensaje;
}

function comprar() {
    do {
        const mensaje = "==== Carrito de Compras ====\n" + mostrarProductos() + "\nIngrese el ID del producto que desea agregar al carrito:\n(Para salir, ingrese 0)";
        const opcion = parseInt(prompt(mensaje));

    if (opcion === 0) {
        break;
    } else {
        agregarAlCarrito(opcion);
    }
    } while (true);

    let resumen = "==== Resumen de la Compra ====\n";
    carrito.forEach((producto) => {
    resumen += `${producto.nombre} - $${producto.precio}\n`;
    });

    const totalCompra = calcularTotal();
    resumen += `Total de la compra: $${totalCompra}`;
    alert(resumen);
}
comprar();
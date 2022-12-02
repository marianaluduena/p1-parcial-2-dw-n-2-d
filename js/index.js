'use strict';

/*
 *  LUDUEÑA, URIBE
 */

let productos = [{
        id: 1,
        nombre: 'Lápiz labial rojo',
        descripcion: 'Su textura suave y cremosa permite un aplique perfecto mientras mantiene tus labios humecatados hasta por 12 hs.',
        precio: "2.000", // Pasado a string para visualizar los 0. Cambiarlo luego
        imagen: "../img/labial.png",
        categoría: 'Boca',
    },
    {
        id: 2,
        nombre: 'Sombra de ojos',
        descripcion: 'Una paleta de colores cálidos, fríos y vibrantes para cada momento del día y ocasión.',
        precio: "3.200",
        imagen: '../img/sombra__de__ojos.png',
        categoría: 'Ojos',
    },
    {
        id: 3,
        nombre: 'Rubor rosado',
        descripcion: 'De fácil aplicación y larga duración. Deja tus mejillas con un sutil brillo.',
        precio: "1.500",
        imagen: '../img/rubor.png',
        categoría: 'Cara',
    },
    {
        id: 4,
        nombre: 'Delineador negro',
        descripcion: 'Resaltá tu mirada con un color negro, perfecto y adaptable a cualquier color de ojos.',
        precio: "1.250",
        imagen: '../img/delineador.png',
        categoría: 'Ojos',
    },
    {
        id: 5,
        nombre: 'Crema corporal de castañas',
        descripcion: 'La crema de castañas hidrata y suaviza tu piel mientras deja un rico aroma.',
        precio: "2.100",
        imagen: '../img/crema__corporal.png',
        categoría: 'Cuerpo',
    },
    {
        id: 6,
        nombre: 'Shampoo antiquiebre de castañas',
        descripcion: 'Nutrí y fortalecé tu cabello con el poder de las castañas. Sus propiedades naturales antiquebre detienen la caída del pelo.',
        precio: "2.550",
        imagen: '../img/shampoo.png',
        categoría: 'Cabello',
    },
];

// 1) Obtener el ID del carrito

const carrito = document.getElementById("minicarrito");
console.log(carrito);

// 2) Crear el catálogo de c/u de los productos

const catalogo = document.createElement("div");
catalogo.setAttribute("id", "productos");
// El catálogo es el div que contiene todas las tarjetas de productos. Añadirle una clase para después acceder al elemento si es necesario
catalogo.className = "catalogo";


let div = "";
let btnComprar = "";

const crearElementos = productos.map(producto => {

    // 2) Crear el catálogo de c/u de los productos

    // a) Div que contendrá cada una de las tarjetas 
    div = document.createElement("div");
    div.className = "producto-tarjeta";

    // b) Crear la img
    let img = document.createElement("img");
    //c) Agregarle una clase
    img.className = "tarjeta";
    // d) Agregar el atributo src y la ruta accediendo a la propiedad imagen de cada objeto
    img.src = producto.imagen
    // e) Agregar el atributo alt
    img.setAttribute = ("alt", producto.descripcion);
    div.append(img);

    // 3) Crear el cuerpo de cada tarjeta 
    let tarjetaCuerpo = document.createElement("div");
    tarjetaCuerpo.className = "card-body";

    // 4) Crear h3 con el título de cada producto 

    let tituloTarjeta = document.createElement("h3");
    tituloTarjeta.className = "card-title";
    tituloTarjeta.innerText = producto.nombre;
    // Agregar el título del producto al cuerpo de la tarjeta
    tarjetaCuerpo.append(tituloTarjeta);

    // 5) Agregar la descripción de cada producto
    let descripcionProducto = document.createElement("p");
    descripcionProducto.className = "card-text";
    descripcionProducto.innerText = "Descripción: ";

    // Agregar la descripción de cada producto
    descripcionProducto.innerText = producto.descripcion;
    // La descripción será visible en el modal del producto
    descripcionProducto.style.display = "none";

    // Agregar la descripción al cuerpo de la tarjeta
    tarjetaCuerpo.append(descripcionProducto);

    // Crear etiqueta p que tendrá el span con el precio

    let parrafoContenedorDePrecio = document.createElement("p");
    parrafoContenedorDePrecio.innerText = "Precio: ";
    // Crear etiqueta span del precio
    let spanPrecio = document.createElement("span");
    // Agregarle una clase para después acceder a través de ella para obtener el precio de cada item al agregar al carrito
    spanPrecio.className = "item-precio";
    spanPrecio.innerText = producto.precio;
    parrafoContenedorDePrecio.append(spanPrecio);
    tarjetaCuerpo.append(parrafoContenedorDePrecio);

    // Crear etiqueta p con span con la categoría

    let parrafoContenedorDeCategoria = document.createElement("p");
    parrafoContenedorDeCategoria.innerText = "Categoría: ";

    // Crear etiqueta span con la categoría

    let spanCategoria = document.createElement("span");
    spanCategoria.innerText = producto.categoría;
    parrafoContenedorDeCategoria.append(spanCategoria);
    tarjetaCuerpo.append(parrafoContenedorDeCategoria);


    // Crear el botón de comprar y asignarle el ID de cada producto

    btnComprar = document.createElement("button");
    btnComprar.className = "btn-primary btn-comprar";
    btnComprar.style.backgroundColor = "rgb(240, 42, 75)",
        btnComprar.innerText = "Comprar";
    btnComprar.setAttribute("id", producto.id);
    tarjetaCuerpo.append(btnComprar);

    // Al div contenedor le agrego la tarjeta con toda la info del producto
    div.append(tarjetaCuerpo);

    // 6) Agregar el div contenedor al elemento catálogo
    catalogo.appendChild(div);
    return div;

});

console.log(catalogo);

// 7) Agregar el catálogo al documento

document.body.appendChild(catalogo);

// 8) Modal para productos

// Primero obtener la clase del modal que será para el producto - NO SE ESTÁ USANDO

/* EL ÚNICO PRODUCTO QUE SE CREA EN TODAS LAS ETQIETAS DEL MODAL ES EL SHAMPOO

let modalBasico = document.getElementById("modal-producto");
let modalBasicoTitulo = document.querySelector(".modal-title-producto");
let modalBasicoTexto = document.querySelector(".modal-body-producto > p");*/

//console.log(modalBasico);
//console.log(modalBasicoTitulo);
//console.log(modalBasicoTexto);

let btnAgregarAlCarrito = "";
let btnProductoCerrar = "";

const crearModalProducto = productos.map(producto => {


    let modalProducto = document.createElement("div");
    modalProducto.className = "modal-header";

    // Crear el título del modal
    let modalProductoTitulo = document.createElement("h5");
    modalProductoTitulo.className = "modal-title";
    modalProductoTitulo.innerText = producto.nombre;
    modalProducto.append(modalProductoTitulo);

    // Crear el div que contendrá al p para el texto

    let modalProductoTextoDiv = document.createElement("div");
    modalProductoTextoDiv.className = "modal-body-producto";
    modalProducto.append(modalProductoTextoDiv);

    let modalProductoTexto = document.createElement("p");
    modalProductoTextoDiv.append(modalProductoTexto);

    modalProductoTitulo.innerText = producto.nombre;

    // Agregar la descripción del producto

    modalProductoTexto.innerText = producto.descripcion;

    // Crear el footer del modal

    let modalProductoFooter = document.createElement("div");
    modalProductoFooter.className = "modal-footer";

    // Crear los botones Agregar al carrito y cerrar

    btnAgregarAlCarrito = document.createElement("button");
    btnAgregarAlCarrito.classList = "btn, btn-primary";
    //btnAgregarAlCarrito.id = producto.id;
    btnAgregarAlCarrito.innerText = "Agregar al carrito";
    modalProductoFooter.append(btnAgregarAlCarrito);

    btnProductoCerrar = document.createElement("button");
    btnProductoCerrar.classList = "btn, btn-secondary";
    btnProductoCerrar.innerText = "Cerrar";
    modalProductoFooter.append(btnProductoCerrar);

    modalProducto.append(modalProductoFooter);

    //modalProducto.style.display = "none";
    console.log(modalProducto);
});


// Disparar el modal al hacer click en el botón comprar

btnComprar.addEventListener("click", () => {

    if (btnComprar == producto.id) {
        // Se va a mostrar el modal 
        modalProducto.style.display = "block";
    }
});


btnProductoCerrar.addEventListener("click", () => {

    modalProducto.style.display = "none";

});

let miCarrito = [productos];

const agregarAlCarrito = (event) => {

    let productoId = event;


}

/*
btnAnadirLabialAlCarrito.addEventListener("click", function () {



});*/





/*........................MODAL..........................*/

// Darle formato al modal 

/*
// Mostrar modal
const modal = document.getElementById("modal__tarjeta");
//modal.style.display = "block";

// Desactivado por ahora para poder trabajar
modal.style.display = "none";

// Modificar el título default del modal

const tituloPrincipalModal = "Tu carrito de compras";
const modalTitulo = document.querySelector(".modal-title");
modalTitulo.innerHTML = tituloPrincipalModal;

// Modificar el texto default del modal

const infoAdicional = "¡Entrá a nuestro blog y recibí los mejores tips para verte radiante!";
const modalTexto = document.querySelector(".modal-body > p");
modalTexto.innerHTML = infoAdicional;

// Modificar los botones default del modal

const btnCerrar = modal.querySelector(".modal-footer > .btn-secondary");
const btnAceptar = modal.querySelector(".modal-footer > .btn-primary");

btnCerrar.innerHTML = "Cerrar";
btnAceptar.innerHTML = "Aceptar";

// Cerrar el botón

btnCerrar.addEventListener("click", (event) => {
    modal.style.display = "none";
});
btnAceptar.addEventListener("click", (event) => {

    modal.style.display = "none";
});*/
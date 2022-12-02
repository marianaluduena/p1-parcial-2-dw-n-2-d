'use strict';

/*
 *  LUDUEÑA, URIBE
 */

let productos = [{
        id: 1,
        nombre: 'Lápiz labial rojo',
        descripcion: 'Lápiz labial color rojo',
        precio: "2.000", // Pasado a string para visualizar los 0. Cambiarlo luego
        imagen: "labial.png",
        categoría: 'Boca',
    },
    {
        id: 2,
        nombre: 'Sombra de ojos',
        descripcion: 'Varios colores de sombra de ojos',
        precio: "3.200",
        imagen: '../img/sombra__de__ojos.png',
        categoría: 'Ojos',
    },
    {
        id: 3,
        nombre: 'Rubor rosado',
        descripcion: 'Rubor color rosado',
        precio: "1.500",
        imagen: '../img/rubor.png',
        categoría: 'Cara',
    },
    {
        id: 4,
        nombre: 'Delineador negro',
        descripcion: 'Delineador color negro',
        precio: "1.250",
        imagen: '../img/delineador.png',
        categoría: 'Ojos',
    },
    {
        id: 5,
        nombre: 'Crema corporal de castañas',
        descripcion: 'Botella de crema corporal de castañas',
        precio: "2.100",
        imagen: '../img/crema__corporal.png',
        categoría: 'Cuerpo',
    },
    {
        id: 6,
        nombre: 'Shampoo antiquiebre de castañas',
        descripcion: 'Botellas de shampoo y acondicionador para el cabello',
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
    img.setAttribute = ("src", producto.imagen);
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


    // Crear el botón de añadir al carrito
    /* NO USAR HASTA DECIDIR SI USAR EL MODAL O NO
    let btnAnadir = document.createElement("button");
    btnAnadir.className = "btn-primary btn-anadir";
    btnAnadir.style.backgroundColor = "rgb(240, 42, 75)";
    btnAnadir.innerText = "Añadir al carrito";
    tarjetaCuerpo.append(btnAnadir);*/

  // Crear el botón de ver más

  let btnVerMas = document.createElement("button");
  btnVerMas.className = "btn-primary btn-ver-mas";
  btnVerMas.style.backgroundColor = "rgb(240, 42, 75)",
  btnVerMas.innerText = "Ver más";
  tarjetaCuerpo.append(btnVerMas);

    // Al div contenedor le agrego la tarjeta con toda la info del producto
    div.append(tarjetaCuerpo);

    // 6) Agregar el div contenedor al elemento catálogo
    catalogo.appendChild(div);
    return div;

});

console.log(catalogo);

// 7) Agregar el catálogo al documento

document.body.appendChild(catalogo);

// 8) Modales de cada producto

const modalLabial = document.getElementById("modal__labial");

// Reemplazar info

const modalLabialTitulo = "Rojo pasión";
const modalProductoLabial = document.querySelector(".modal-title-1");
modalProductoLabial.innerHTML = modalLabialTitulo;
console.log(modalLabial);

/* 

// EJEMPLO DE CÒMO ARMAR LA FUNCIÒN QUE DISPARE LA CREACIÒN DEL MODAL DEL LABIAL

card1.addEventListener("click", () => {
   getElementbyClassName("modal-title") = getElementsById("card-04-title").innerHTML;
   getElementsByClassName("modal-image") = getElementsById("card-04-thumbnail").innerHTML;
   getElementsByClassName("modal-text") = getElementsById("card-04-text").innerHTML;

});

*


// 8) Tomar todos los botones para añadir al carrito accediendo a la clase btn-anadir

let anadirAlCarritoBtns = document.getElementsByClassName("btn-anadir");

// Hay 6 productos con un btn c/u, por lo tanto 6 btns en todo el documento

for (var i = 0; i < anadirAlCarritoBtns.length; i++) {

    // boton será cada btn iterado
    var boton = anadirAlCarritoBtns[i];
    console.log(boton);
    // Al hacer click en cualquier btn para anadir item se disparará la función
    boton.addEventListener("click", anadirItemClickeadoAlCarrito);
    // De todos los productos cargados al carrito, acceder desde el primero
    var cartItems = document.getElementsByClassName("minicarrito")[0];
}

//console.log(boton, cartItems);




// 9) Añadir item clickeado al carrito

/*
function anadirItemClickeadoAlCarrito(event) {

    let btn = event.target; // target será cualquier botón Añadir al carrito presionado

    // Obtener una copia del precio del item

    // Para acceder al botón Añadir hay que pasar primero por las clases producto.tarjeta(div contenedor de todo el producto), card-body y el p que
    // contiene el span del precio
    let shopItem = boton.parentElement.parentElement.parentElement;
    console.log(shopItem);

    // Crear la variable precio y acceder al contenido (el precio) desde la primer etiqueta span 

    let precio = shopItem.getElementsByClassName("item-precio")[0].innerText;

    // Función que agregarà al carrito el precio de cada producto clickeado
    anadirItemAlCarrito();
}*/




















/*........................MODAL..........................*/

// Darle formato al modal 

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
});
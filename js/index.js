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

    let btnComprar = document.createElement("button");
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


/*
const tarjetaLabial = catalogo.childNodes[0];
tarjetaLabial.id = "tarjeta-labial";
// Asignarle a cada btn comprar su id
const btnComprarLabial = tarjetaLabial.querySelector(".btn-primary");
btnComprarLabial.id = "btn-comprar-labial";
//console.log(btnComprarLabial);

const tarjetaSombras = catalogo.childNodes[1];
tarjetaSombras.id = "tarjeta-sombra-de-ojos";
const btnComprarSombraDeOjos = tarjetaSombras.querySelector(".btn-primary");
btnComprarSombraDeOjos.id = "btn-comprar-sombra-de-ojos";


const tarjetaRubor = catalogo.childNodes[2];
tarjetaRubor.id = "tarjeta-rubor";
const btnComprarRubor = tarjetaRubor.querySelector(".btn-primary");
btnComprarRubor.id = "btn-comprar-rubor";


const tarjetaDelineador = catalogo.childNodes[3];
tarjetaDelineador.id = "delineador-de-ojos";
const btnComprarDelineador = tarjetaDelineador.querySelector(".btn-primary");
btnComprarDelineador.id = "btn-comprar-delineador";

const tarjetaCremaCorporal = catalogo.childNodes[4];
tarjetaCremaCorporal.id = "crema-corporal";
const btnComprarCrema = tarjetaCremaCorporal.querySelector(".btn-primary");
btnComprarCrema.id = "btn-comprar-crema";

const tarjetaShampoo = catalogo.childNodes[5];
tarjetaShampoo.id = "tarjeta-shampoo";
const btnComprarShampoo = tarjetaShampoo.querySelector(".btn-primary");
btnComprarShampoo.id = "btn-comprar-shampoo";/*

// 8) Modales de cada producto

const modalLabial = document.getElementById("modal__labial");

// Reemplazar info

const modalLabialTitulo = "Rojo pasión";
const modalProductoLabial = document.querySelector(".modal-title-1");
//console.log(modalProductoLabial);
modalProductoLabial.innerHTML = modalLabialTitulo;

const modalLabialDescripcion = "Su textura suave y cremosa permite un aplique perfecto mientras mantiene tus labios humecatados hasta por 12 hs."
const modalLabialCuerpo = document.querySelector(".modal-body-1 > p");
modalLabialCuerpo.innerHTML = modalLabialDescripcion;

// Botones Añadir al carrito y cerrar del modal para el labial

const btnAnadirLabialAlCarrito = document.getElementById("btn-labial-comprar");
btnAnadirLabialAlCarrito.innerText = "Añadir al carrito";

const btnLabialCerrar = document.getElementById("btn-labial-cerrar");
btnLabialCerrar.innerText = "Cerrar";

//console.log(modalLabial);

// Disparar el modal al hacer click en el botón comprarLabial

btnComprarLabial.addEventListener("click", () => {

    // Se va a mostrar el modal 
    modalLabial.style.display = "block";
});


btnLabialCerrar.addEventListener("click", () => {

    modalLabial.style.display = "none";

});

let miCarrito = [productos];

const agregarAlCarrito = (event) =>{

    let productoId = event;


}

/*
btnAnadirLabialAlCarrito.addEventListener("click", function () {



});*/



/* PUNTOS 8 Y 9 TODAVÍA NO FUNCIONAN Y HAY QUE MODIFICARLOS PARA QUE TOMEN LOS DATOS DEL MODAL DEL PRODUCTO

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

//console.log(boton, cartItems);*/




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
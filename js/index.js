'use strict';

/*
 *  LUDUEÑA, URIBE
 */

let productos = [
    {
        id: 1,
        nombre: 'Lápiz labial rojo',
        descripcion: 'Su textura suave y cremosa da color vibrante a tus labios mientras los mantiene humectados hastao por 12 hs.',
        precio: 2.000,
        imagen: 'labial.png',
        categoría: 'Boca',
    },
    {
        id: 2,
        nombre: 'Sombra de ojos',
        descripcion: 'Descripción del producto',
        precio: 3.200,
        imagen: 'sombra__de__ojos.png',
        categoría: 'Ojos',
    },
    {
        id: 3,
        nombre: 'Rubor rosado',
        descripcion: 'Descripción del producto',
        precio: 1.500,
        imagen: 'rubor.png',
        categoría: 'Cara',
    },
    {
        id: 4,
        nombre: 'Delineador',
        descripcion: 'Descripción del producto',
        precio: 1.250,
        imagen: 'delineador.png',
        categoría: 'Ojos',
    },
    {
        id: 5,
        nombre: 'Crema corporal de castañas',
        descripcion: 'Descripción del producto',
        precio: 2.100,
        imagen: 'crema__corporal.png',
        categoría: 'Cuerpo',
    },
    {
        id: 6,
        nombre: 'Shampoo antiquiebre de castañas',
        descripcion: 'Descripción del producto',
        precio: 2.550,
        imagen: 'shampoo.png',
        categoría: 'Cabello',
    },
];

// 1) Obtener el ID del carrito

const carrito = document.getElementById("minicarrito");
console.log(carrito);

// 2) Crear el catálogo de c/u de los productos

const catalogo = document.createElement("div");
catalogo.setAttribute("id", "productos");

// a) Div que contendrá toda cada una de las tarjetas 

let divTarjetaContenedor = "";

for (let i = 1; i <= productos.length; i++) {

    divTarjetaContenedor = document.createElement("div");
    // b) Crear la etiqueta imagen
        const imagenProducto = document.createElement("img");
        imagenProducto.setAttribute("src", "../img/");
        // Añadir la img al divTarjetaContenedor que está dentro del elemento padre
        divTarjetaContenedor.appendChild(imagenProducto);
  
    // Añadirle al catálogo el div contenedor

    catalogo.appendChild(divTarjetaContenedor);
}


// Cómo cargar la ruta de las imágenes por cada elemento?


/* NO USAR POR AHORA 
productos.forEach((imagen) => {

    const imagenProducto = document.createElement("img");
    imagenProducto.setAttribute("src", "../img/");
    // Añadir la img al divTarjetaContenedor que está dentro del elemento padre
    divTarjetaContenedor.appendChild(imagenProducto);
});*/

console.log(catalogo);








/* TODAVÍA NO SÉ SI USAR ÉSTA FUNCIÓN
function agregarAtributo(elemento, atributo){

    for(var key in atributo){
elemento.setAttribute(key, atributo[key]);
    }
}
agregarAtributo(img,{"src": "../img/labial.png"})*/












/*........................MODAL..........................*/

// Darle formato al modal 

// Mostrar modal
const modal = document.getElementById("modal__tarjeta");
console.log(modal);
modal.style.display = "block";

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


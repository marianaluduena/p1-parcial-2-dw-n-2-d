'use strict';

/*
 *  APELLIDOS
 */

let productos = [
    {
        id: 1,
        nombre: 'Lápiz labial rojo',
        descripcion: 'Descripción del producto',
        precio: 2.000,
        imagen: 'producto-de-ejemplo.jpg',
        categoría: 'Boca',
    },
    {
        id: 2,
        nombre: 'Sombra de ojos',
        descripcion: 'Descripción del producto',
        precio: 3.200,
        imagen: 'producto-de-ejemplo.jpg',
        categoría: 'Ojos',
    },
    {
        id: 3,
        nombre: 'Rubor rosado',
        descripcion: 'Descripción del producto',
        precio: 1.500,
        imagen: 'producto-de-ejemplo.jpg',
        categoría: 'Cara',
    },
    {
        id: 4,
        nombre: 'Delineador',
        descripcion: 'Descripción del producto',
        precio: 1.250,
        imagen: 'producto-de-ejemplo.jpg',
        categoría: 'Ojos',
    },
    {
        id: 5,
        nombre: 'Crema corporal de castañas',
        descripcion: 'Descripción del producto',
        precio: 2.100,
        imagen: 'producto-de-ejemplo.jpg',
        categoría: 'Cuerpo',
    },
    {
        id: 6,
        nombre: 'Shampoo antiquiebre de castañas',
        descripcion: 'Descripción del producto',
        precio: 2.550,
        imagen: 'producto-de-ejemplo.jpg',
        categoría: 'Cabello',
    },
];

// 1) Obtener el ID del carrito

const carrito = document.getElementById("minicarrito");
console.log(carrito);

// 2) Darle formato al modal 

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

btnCerrar.addEventListener("click", (event) =>{
modal.style.display= "none";
});
btnAceptar.addEventListener("click", (event) =>{

    modal.style.display = "none";
});


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
        precio: 0,
        imagen: 'producto-de-ejemplo.jpg',
        categoría: 'Ojos',
    },
    {
        id: 3,
        nombre: 'Rubor rosado',
        descripcion: 'Descripción del producto',
        precio: 0,
        imagen: 'producto-de-ejemplo.jpg',
        categoría: 'Cara',
    },
    {
        id: 4,
        nombre: 'Delineador',
        descripcion: 'Descripción del producto',
        precio: 0,
        imagen: 'producto-de-ejemplo.jpg',
        categoría: 'Ojos',
    },
    {
        id: 5,
        nombre: 'Crema corporal de castañas',
        descripcion: 'Descripción del producto',
        precio: 0,
        imagen: 'producto-de-ejemplo.jpg',
        categoría: 'Cuerpo',
    },
    {
        id: 6,
        nombre: 'Shampoo antiquiebre de castañas',
        descripcion: 'Descripción del producto',
        precio: 0,
        imagen: 'producto-de-ejemplo.jpg',
        categoría: 'Cabello',
    },
];

// 1) Obtener el ID del carrito

const carrito = document.getElementById("minicarrito");
console.log(carrito);
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

let miCarritoLleno = [];

// 1) Obtener el ID del carrito

const domCarrito = document.getElementById("minicarrito");
console.log(domCarrito);

const domItemsAgregados = document.getElementById("items-cargados");
console.log(domItemsAgregados);


// 2) Crear el catálogo de c/u de los productos

const catalogo = document.createElement("div");
catalogo.setAttribute("id", "productos");
// El catálogo es el div que contiene todas las tarjetas de productos. Añadirle una clase para después acceder al elemento si es necesario
catalogo.className = "catalogo";


let div = "";
let btnComprar = "";


function renderizarContenido() {

    productos.forEach((producto) => {

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
        //btnComprar.setAttribute("id", producto.id);

        btnComprar.addEventListener("click", () => {

            // Agregar los datos de cada producto al modal. NOTA: existe ya 1 modal en el HTML, los datos los saca de ahí

            const tituloProducto = document.querySelector(".modal-title-producto");
            tituloProducto.innerText = producto.nombre;

            const productoDescripcion = document.querySelector(".modal-body-producto");
            productoDescripcion.innerText = producto.descripcion;

            const btnAnadirAlCarrito = document.querySelector(".btn-primary");
            btnAnadirAlCarrito.innerText = "Añadir al carrito";
            btnAnadirAlCarrito.setAttribute("id", producto.id);

            const btnCerrarProducto = document.querySelector(".btn-secondary");
            btnCerrarProducto.innerText = "Cerrar";

            // Se va a mostrar el modal 

            const modalProducto = document.querySelector("#modal-producto");
            modalProducto.style.display = "block";

            // El modal se muestra con los btn añadir al carrito o cerrar
            // Si se hace click en el btn añadir al carrito el modal se cierra y se ejecuta la función para añadir al carrito

            btnAnadirAlCarrito.addEventListener("click", () => {

                modalProducto.style.display = "none";

            });

            btnAnadirAlCarrito.addEventListener("click", anadirProductoAlCarrito);

            // Si se hace click en cerrar

            btnCerrarProducto.addEventListener("click", () => {

                modalProducto.style.display = "none";

            });

        });


        tarjetaCuerpo.append(btnComprar);

        // Al div contenedor le agrego la tarjeta con toda la info del producto
        div.append(tarjetaCuerpo);

        // 6) Agregar el div contenedor al elemento catálogo
        catalogo.appendChild(div);
        return div;
    })

}

renderizarContenido();

// 7) Agregar el catálogo al documento

document.body.appendChild(catalogo);
console.log(catalogo);


// 8) Btn ver carrito

const btnVerCarrito = document.getElementById("ver-carrito-btn");

// Aplicar acá un modal para ver los productos que se van cargando al carrito

const modalCarrito = document.querySelector(".modal");
modalCarrito.setAttribute("id", "modal-carrito");

const modalCarritoTitulo = document.querySelector("h5");
modalCarritoTitulo.innerText = "Lista de productos";

const modalCarritoListaDeProductos = document.querySelector("p");
modalCarritoListaDeProductos.innerText = "Tus productos:";

const modalBtnVaciar = document.querySelector(".btn-tarjeta");
modalBtnVaciar.innerText = "Vaciar carrito";

const modalBtnCerrar = document.querySelector(".btn-cerrar");
modalBtnCerrar.innerText = "Cerrar";

btnVerCarrito.addEventListener("click", () =>{

    modalCarrito.style.display = "block";

})

modalBtnCerrar.addEventListener("click", () =>{

    modalCarrito.style.display = "none";
})


// 9) Añadir un producto al carrito

function anadirProductoAlCarrito(event) {

    // Se agrega el nodo del producto al carrito

    miCarritoLleno.push(event.target.getAttribute("id"));

    // Función para actualizar el carrito
    renderizarItemsEnElCarrito();

}

anadirProductoAlCarrito();

// 10) Mostrar los productos cargados al carrito
/*
function renderizarItemsEnElCarrito (){

    const itemsEnElCarrito = 
}*/




// FILTRAR POR CATEGORÍAS

let categoriaCara = productos.filter(rostro => rostro.categoría == "Cara");
















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
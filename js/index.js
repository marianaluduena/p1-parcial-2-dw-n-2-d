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
        categoría: 'Rostro',
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
/*
let carrito = [];
const divisa = "$";
const minicarrito = document.getElementById("minicarrito");
const minicarritoCantidadDeItems = document.getElementById("items-cargados");
const minicarritoPrecioTotal = document.getElementById("precio-total");


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
        btnComprar.setAttribute("id", producto.id);

        btnComprar.addEventListener("click", () => {

            carrito.push({

                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                imagen: producto.imagen,
                categoría: producto.categoría,
            });
            console.log(carrito);


            // Agregar los datos de cada producto al modal. NOTA: existe ya 1 modal en el HTML, los datos los saca de ahí

            //crearModalProducto();

            /* CÓDIGO PARA EL MODAL AL HACER CLICK. NO USAR TODAVÍA

            const tituloProducto = document.querySelector(".modal-title-producto");
            tituloProducto.innerText = producto.nombre;

            const productoDescripcion = document.querySelector(".modal-body-producto");
            productoDescripcion.innerText = producto.descripcion;
 
            const productoPrecio = document.createElement("p");
            const span = document.createElement("span");
            span.innerText = producto.precio;
      

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
        });

        tarjetaCuerpo.append(btnComprar);

        // Al div contenedor le agrego la tarjeta con toda la info del producto
        div.append(tarjetaCuerpo);

        // 6) Agregar el div contenedor al elemento catálogo
        catalogo.appendChild(div);
        return div;
    })

    // 7) Agregar el catálogo al documento
    document.body.appendChild(catalogo);
}

renderizarContenido();*/



const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("minicarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("items-cargados");

// 2) Crear el catálogo de c/u de los productos

const catalogo = document.createElement("div");
catalogo.setAttribute("id", "productos");
// El catálogo es el div que contiene todas las tarjetas de productos. Añadirle una clase para después acceder al elemento si es necesario
catalogo.className = "catalogo";

let carrito = [];
let btnComprar = "";

//recorrer array


function renderizarContenido() {

    productos.forEach((producto) => {

        let content = document.createElement("div");
        content.className = "card";
        content.style.margin = "1rem";

        // b) Crear la img
        let img = document.createElement("img");

        //c) Agregarle una clase
        img.className = "tarjeta";

        // d) Agregar el atributo src y la ruta accediendo a la propiedad imagen de cada objeto
        img.src = producto.imagen
        

        // e) Agregar el atributo alt
        img.setAttribute = ("alt", producto.descripcion);
        content.append(img);

        // 3) Crear el cuerpo de cada tarjeta 
        let tarjetaCuerpo = document.createElement("div");
        tarjetaCuerpo.className = "card-body";

        // 4) Crear h3 con el título de cada producto 
        let tituloTarjeta = document.createElement("h3");
        tituloTarjeta.className = "card-title";
        tituloTarjeta.style.fontSize = "15px";
        tituloTarjeta.innerHTML = producto.nombre;

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
        content.append(tarjetaCuerpo);
        // Crear el botón de comprar y asignarle el ID de cada producto


        // Crear etiqueta p que tendrá el span con el precio

        let parrafoContenedorDePrecio = document.createElement("p");
        parrafoContenedorDePrecio.innerText = "Precio: ";
        // Crear etiqueta span del precio
        let spanPrecio = document.createElement("span");

        // Agregarle una clase para después acceder a través de ella para obtener el precio de cada item al agregar al carrito
        spanPrecio.className = "item-precio";
        spanPrecio.innerHTML = producto.precio;
        parrafoContenedorDePrecio.append(spanPrecio);
        tarjetaCuerpo.append(parrafoContenedorDePrecio);

        // Crear etiqueta p con span con la categoría

        let parrafoContenedorDeCategoria = document.createElement("p");
        parrafoContenedorDeCategoria.innerText = "Categoría: ";
        parrafoContenedorDeCategoria.style.display = "none";

        // Crear etiqueta span con la categoría

        let spanCategoria = document.createElement("span");
        spanCategoria.innerHTML = producto.categoría;
        parrafoContenedorDeCategoria.append(spanCategoria);
        tarjetaCuerpo.append(parrafoContenedorDeCategoria);


        btnComprar = document.createElement("button");
        btnComprar.className = "btn-primary btn-comprar";
        btnComprar.style.backgroundColor = "rgb(240, 42, 75)",
            btnComprar.innerText = "Comprar";
        btnComprar.setAttribute("id", producto.id);

        btnComprar.addEventListener("click", () => {

            //verifico si el producto esta repetido y lo sumo

            const repetido = carrito.some((productoRepetido) => productoRepetido.id === producto.id);
            if (repetido) {
                carrito.map((prod) => {
                    if (prod.id === prod.id) {
                        prod.cantidad++;
                    }
                })
            } else {
                carrito.push({
                    id: producto.id,
                    imagen: producto.imagen,
                    nombre: producto.nombre,
                    descripcion: producto.descripcion,
                    precio: producto.precio,
                    cantidad: producto.cantidad,
                });
            }
            console.log(carrito);
            carritoContador(); // la función está más abajo
        });

        tarjetaCuerpo.append(btnComprar);

        // Al div contenedor le agrego la tarjeta con toda la info del producto
        content.append(tarjetaCuerpo);

        // 6) Agregar el div contenedor al elemento catálogo
        catalogo.appendChild(content);
        return content;
    })

    // 7) Agregar el catálogo al documento
    shopContent.appendChild(catalogo);
}

renderizarContenido();

// Btn ver carrito

const btnVerCarrito = document.getElementById("ver-carrito-btn");


// Crear el modal del carrito


const pintarCarrito = () => {

    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-Header";
    modalContainer.append(modalHeader);
    
    const modalContainerTitulo = document.createElement("h1");
    modalContainerTitulo.innerText = "Carrito";
    modalContainerTitulo.className = "modal-header";
    modalContainer.append(modalContainerTitulo);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalbutton);

    carrito.forEach((producto) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content";

        const carritoImg = document.createElement("img");
        carritoImg.src = producto.imagen;
        carritoContent.append(carritoImg);

        const carritoNombre = document.createElement("h3");
        carritoNombre.innerHTML = producto.nombre;
        carritoContent.append(carritoNombre);

        const carritoPrecio = document.createElement("p");
        carritoPrecio.innerHTML = producto.precio;
        carritoContent.append(carritoPrecio);

        const carritoCantidad = document.createElement("p");
        carritoCantidad.innerHTML = producto.cantidad;
        carritoContent.append(carritoCantidad);

        modalContainer.append(carritoContent);

        //boton elimimar producto
        let eliminar = document.createElement("span");

        eliminar.innerText = "❌";
        eliminar.className = "delete-product";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);

    });

    //calculo del total

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `total a pagar: $ ${total}`;
    modalContainer.append(totalBuying);
};

btnVerCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    })

    pintarCarrito();
}

// cantitad y monto total de productos en el carrito

const carritoContador = () => {
    cantidadCarrito.innerText = carrito.lenght;
}



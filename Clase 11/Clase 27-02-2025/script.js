document.addEventListener('DOMContentLoaded', () =>{
    // Obtencion de elementos del DOM por su ID

    const inicio = document.getElementById('inicio');
    const productos =document.getElementById('productos');
    const contacto= document.getElementById('contacto');

    // Obtencion de elementos del DOM por su Id del menu de navegacion
    const menuInicio = document.getElementById('menu-inicio');
    const menuProducto = document.getElementById('menu-productos');
    const menuContacto = document.getElementById('menu-contacto');


    // Obtencion de elementos del DOm por su ID para el carrito de compras.
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    let total = 0; // Variable para almacenar el total del carrito


    //   Obtencion de elementos del DOM para el formulario

    const formularioContacto = document.getElementById('formulario-contacto');
    const mensajeEnviado = document.getElementById('mensaje-enviado');



    // Evento para mostrar la seccion de inicio y ocultar los demas.
    menuInicio.addEventListener('click', (e) =>{
        e.preventDefault(); // Evitar un comportamiento por defecto
        inicio.style.display = 'block'; // Muestra
        productos.style.display = 'none'; // Oculta
        contacto.style.display = 'none';
    });
    // Evento para mostrar la seccion de Menu y ocultar los demas.
    menuProducto.addEventListener('click', (e) =>{
        e.preventDefault();
        inicio.style.display = 'none';
        productos.style.display = 'block';
        contacto.style.display = 'none';
    });
    // Evento para mostrar la seccion de Contacto y ocultar los demas.
    menuContacto.addEventListener('click', (e) =>{
        e.preventDefault();
        inicio.style.display = 'none';
        productos.style.display = 'none';
        contacto.style.display = 'block';
    });


    // Evento para agregar producto del carrito
    productos.addEventListener('click', (e) =>{
        if(e.target.classList.contains('agregar-carrito')){ // Verifica si el click fue en el boton agregar carrito
            const nombre = e.target.dataset.nombre; // Obtiene el nombre del producto
            const precio = parseInt(e.target.dataset.precio); // Obtiene el precio del producto


            const nuevoItem = document.createElement('li');
            nuevoItem.textContent = `${nombre} - $${precio}`;
            listaCarrito.appendChild(nuevoItem);

            total += precio;
            actualizarTotalCarrito();

        }
        
        // TARGET - Es una propiedad que despliega el elemento que desencadeno
        // classList - Nos permite acceder a las clases de un elemento
    });

    // Ejemplo de queryselector para manipular el total del carrito
    const totalElemento = document.querySelector('#total-carrito');
    function actualizarTotalCarrito(){
        totalElemento.textContent = total;
    }

    // Titulo del carrito con querySelector
    const tituloCarrito = document.querySelector('#carrito h2');
    tituloCarrito.textContent = 'Sus pasteles: ';


    // Simular envio de nuestra formulario 
    formularioContacto.addEventListener('submit', (e)=>{
        e.preventDefault();
        formularioContacto.style.display = 'none';
        mensajeEnviado.style.display = 'block';
    });

    //Ejemplo con querySelector para mostrar el precio del producto
    productos.addEventListener('mouseover', (e)=>{
        if(e.target.classList.contains('producto')){
            const precio = e.target.querySelector('.agregar-carrito').dataset.precio; // Encuentra el precio dentro del producto (en el boton)
            e.target.setAttribute('title', `Precio: $${precio}`); // La muestra como tooltip

        }
    })


})

let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoActiones = document.querySelector("#carrito-actiones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-actiones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-actiones-comprar");

function CargarProductosCarrito (){
    if (productosEnCarrito && productosEnCarrito.length > 0 ) {
        contenedorCarritoVacio.classList.add("disabled"); 
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoActiones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
        contenedorCarritoProductos.innerHTML = "";
    
    
        productosEnCarrito.forEach(producto => {
           
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = ` 
            <img class="carrito-producto-imagen" src="${producto.image}" alt="${producto.titre}" widh="200px">
            
            <div class="carrito-producto-titulo">
                 <small>titre</small>
                 <h3>${producto.titre}</h3>
            </div>
            <div class="carrito-producto-cantidad">
                <small>Cantité</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carrito-producto-precio">
                <small>Prix</small>
                <p>${producto.precio}</p>
            </div>
            <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
            
            `;
    
       contenedorCarritoProductos.append(div);
        
        })
        

} else {
    contenedorCarritoVacio.classList.remove("disabled"); 
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoActiones.classList.add("disabled");
    contenedorCarritoComprado.classList.add("disabled");
 
 } actualizarBotonesEliminar();
   actualizarTotal();
}


CargarProductosCarrito();


function actualizarBotonesEliminar(){

        botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
     
        botonesEliminar.forEach(boton =>{
          boton.addEventListener("click" , eliminarDelCarrito);
 });
}

function eliminarDelCarrito(e) {

    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
   productosEnCarrito.splice(index, 1);
   CargarProductosCarrito();
   localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}

botonVaciar.addEventListener("click" , vaciarCarrito);

function vaciarCarrito(){
productosEnCarrito.length = 0;
localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
CargarProductosCarrito();
}

function actualizarTotal(){
    totalCalculado = productosEnCarrito.reduce((acc, producto) => acc+ (producto.precio * producto.cantidad), 0);

     total.innerText = `$${totalCalculado}`;
                    
}

botonComprar.addEventListener("click" , comprarCarrito);

function comprarCarrito(){
productosEnCarrito.length = 0;
localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

contenedorCarritoVacio.classList.add("disabled"); 
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoActiones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");

}
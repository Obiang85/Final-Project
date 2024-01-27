const productos =[
    //Programation
    {
      id:"livre-01" ,
      tire: "Program 01",
      image: "imgt/amuser.jpg",
     
      categoria: {
        nombre:"programation",
        id: "programation"

      },
      precio: 1000
    },
        {
        id:"livre-02" ,
        titre: "Program 02",
        image: "imgt/avecpyton.jpg",
        
        categoria: {
          nombre:"programation",
          id: "programation"
  
        },
        precio: 1000
      },
      {
        id:"livre-03" ,
        titre: "Program 03",
        image: "imgt/CouC++.jpg",
       
        categoria: {
          nombre:"programation",
          id: "programation",
  
        },
        precio: 1000
      },
      {
        id:"livre-04" ,
        titre: "Program 04",
        image: "imgt/python3.jpg",
       
        categoria: {
          nombre:"programation",
          id: "programation"
  
        },
        precio: 1000
      },
      // Maths
      {
        id:"maths-01",
        titre: "maths 01",
       
        image:"imgt/basesmaths.jpg",
        categoria: {
            nombre:"mathes",
            id:"maths"
        },
        precio: 1000
      },
      {
        id:"maths-02",
        titre: "maths 02",
        
        image:"imgt/numeros.jpg",
        categoria: {
            nombre:"mathes",
            id:"maths"
        },
        precio: 1000
      },

      {
        id:"maths-03",
        titre: "maths 03",
       
        image:"imgt/tontos.jpg",
        categoria: {
            nombre:"mathes",
            id:"maths"
        },
        precio: 1000
      },

      {
        id:"maths-04",
        titre: "maths 04",
        
        image:"imgt/mathsBTS.jpg",
        categoria: {
            nombre:"mathes",
            id:"maths"
        },
        precio: 1000
      },
      {
        id:"maths-05",
        titre: "maths 05",
       
        image:"imgt/enigma.jpg",
        categoria: {
            nombre:"mathes",
            id:"maths"
        },
        precio: 1000
      },
      {
        id:"maths-06",
        titre: "maths 06",
       
        image:"imgt/algebra.jpg",
        categoria: {
            nombre:"mathes",
            id:"maths"
        },
        precio: 1000
      },
        // phylosophie

      {
        id:"Phylo-01",
        titre: "Phylo 01",
        
        image:"imgt/ubermensch.jpg",
        categoria: {
            nombre:"phylosophie",
            id:"phylosophie"
        },
        precio: 1000
      },
      {
        id:"phylo-02",
        titre: "phylo 02",
       
        image:"imgt/Larepublic.jpg",
        categoria: {
            nombre:"phylosophie",
            id:"phylosophie"
        },
        precio: 1000
      },

      {
        id:"phylo-03",
        titre: "phylo 03",
        
        image:"imgt/cuatroacuerdos.jpg",
        categoria: {
            nombre:"phylosophie",
            id:"phylosophie"
        },
        precio: 1000
      },

      {
        id:"phylo-04",
        titre: "phylo 04",
        
        image:"imgt/ethique.jpg",
        categoria: {
            nombre:"phylosophie",
            id:"phylosophie"
        },
        precio: 1000
      },

      {
        id:"phy-05",
        titre: "phylo 05",
       
        image:"imgt/metaphysique.jpg",
        categoria: {
            nombre:"phylosophie",
            id:"phylosophie"
        },
        precio: 1000
      },

      {
        id:"phylo-06",
        titre: "phylo 06",
       
        image:"imgt/mentir.jpg",
        categoria: {
            nombre:"phylosophie",
            id:"phylosophie"
        },
        precio: 1000
      },


      {
        id:"phylo-07",
        titre: "phylo 07",
        
        image:"imgt/metamorphose.jpg",
        categoria: {
            nombre:"phylosophie",
            id:"phylosophie"
        },
        precio: 1000
      },

      {
        id:"phylo-08",
        titre: "phylo 08",
       
        image:"imgt/cuatroacuerdos.jpg",
        categoria: {
            nombre:"phylosophie",
            id:"phylosophie"
        },
        precio: 1000
      },

      //Developpement
      {
        id:"Develo-01",
        titre: "Develo 01",
        
        image:"imgt/devenezriche.jpg",
        categoria: {
            nombre:"developpement",
            id:"developpement"
        },
        precio: 1000
      },
      {
        id:"Develo-02",
        titre: "Develo 02",
       
        image:"imgt/lahuitièmehabitude.jpg",
        categoria: {
            nombre:"developpement",
            id:"developpement"
        },
        precio: 1000
      },
      {
        id:"Develo-03",
        titre: "Develo 03",
        
        image:"imgt/positive.jpg",
        categoria: {
            nombre:"developpement",
            id:"developpement"
        },
        precio: 1000
      },
      
      ,
      {
        id:"Develo-04",
        titre: "Develo 04",
       
        image:"imgt/miraclemorning.jpg",
        categoria: {
            nombre:"developpement",
            id:"developpement"
        },
        precio: 1000,
      },
      {
        id:"Develo-05",
        titre: "Develo 05",
       
        image:"imgt/parlerpublic.jpg",
        categoria: {
            nombre:"developpement",
            id:"developpement"
        },
        precio: 1000,
      },
      {
        id:"Develo-06",
        titre: "Develo 06",
        
        image:"imgt/richpoor.jpg",
        categoria: {
            nombre:"developpement",
            id:"developpement"
        },
        precio: 1000,
      },
      {
        id:"Develo-07",
        titre: "Develo 07",
        
        image:"imgt/cuatroacuerdos.jpg",
        categoria: {
            nombre:"developpement",
            id:"developpement"
        },
        precio: 1000,
      },

     
]
     
      const contenedorProductos= document.querySelector("#products-container");
      const botonesCategorias= document.querySelectorAll(".boton-categoria");
      const tituloPrincipal= document.querySelector("#titulo-principal");
      let botonesAgregar= document.querySelectorAll(".producto-agregar");
      const numerito = document.querySelector("#numerito");

      function cargarProductos(productosElegidos){

        contenedorProductos.innerHTML = "";
        
        productosElegidos.forEach(producto => {
            
            const div = document.createElement("div");
            div.classList.add("producto");
            div.innerHTML=` 
            <img class="producto-imagen" src= "${producto.image}" alt="${producto.titre}">
            
            <div class="producto-detalles">
              <h3 class="producto-titulo">"${producto.titre}"</h3>
              <P class="producto-precio">${producto.precio}</P>
              <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
         `;
        
           contenedorProductos.append(div);

        })

        actualizarBotonesAgregar();
   
    }

    cargarProductos(productos);
    
      
botonesCategorias.forEach(boton =>{
   boton.addEventListener("click", (e) =>{

    botonesCategorias.forEach(boton => boton.classList.remove("active"));

    e.currentTarget.classList.add("active");

    if (e.currentTarget.id != "todos") {
      const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
      
      tituloPrincipal.innerText = productoCategoria.categoria.nombre;
      
      
      const productosBoton= productos.filter(producto => producto.categoria.id === e.currentTarget.id)

      cargarProductos(productosBoton);
  

    } else {
        tituloPrincipal.innerText = "Tous les produits";
        cargarProductos(productos);
    }

   
   })

});

function actualizarBotonesAgregar(){

   botonesAgregar = document.querySelectorAll (".producto-agregar");

   botonesAgregar.forEach(boton =>{
     boton.addEventListener("click" , agregarAlCarrito);
   });
}

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS); 
  actualizarNumerito();

} else {
     productosEnCarrito = [];

}


function agregarAlCarrito(e){
     
  const idBoton = e.currentTarget.id;
 const productoAgregado = productos.find(producto => producto.id === idBoton);

 if (productosEnCarrito.some(producto => producto.id === idBoton)){
    const index =  productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito[index].cantidad++;

 }else {
  productoAgregado.cantidad = 1;
  productosEnCarrito.push (productoAgregado);
 }

   actualizarNumerito();

     localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}

function actualizarNumerito() {

  let nuevoNumerito = productosEnCarrito.reduce ((acc, producto)  => acc + producto.cantidad, 0 );
  numerito.innerText = nuevoNumerito;
}
 
    
    

 
 
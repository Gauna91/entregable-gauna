




const vinos= [
    {
        id: 1,
        nombre:"LUIGUI BOSCA",
        caracteristicas: "tinto color roojo violaceo brillante.Sus aromas son intensos y amables, con notas que recuerdan a frutas rojas, y tonos algo florales y especiados",
        tipo: "malbec", 
        maridajes:"carnes, pastas",
        precio: 12400,
        img: "../img/vinos/luiguibosca.jpg",
        descuento: 10
        
    },
    
    {
        id: 2,
        nombre:"TRUMPETER",
        caracteristicas: "De un impactante color violeta, naris frutal destacando ciruelas, cerezas y notas de flores",
        tipo: "malbec", 
        maridajes:"Tablas de quesos duros, carnes vacunas grilladas y pastas rellenas con salsa a base de carnes",
        precio: 8500,
        img: "../img/vinos/trumpeter.jpg",
        descuento: 10
    },
    {
        id: 3,
        nombre:"D.V CATENA",
        caracteristicas: "Aporta aromas de mermelada de ciruelas maduras y moras negras, suavidad y volumen al paladar",
        tipo: "malbec, malbec", 
        maridajes:"carnes rojas, carnes a la parrilla, verduras salteadas",
        precio: 14900,
        img: "../img/vinos/dv-catena.jpg",
        descuento: 10
    },

    {  
    id: 4,
    nombre:"RUTINI",
    caracteristicas: "Rojo violaceo, con matices azulados, En nariz, se destaca una gran complejidad aromatica: Notas de ciruela entremezcladas con especias que recuerdan a vainillas, anis y pimiemta negra",
    tipo: "malbec", 
    maridajes:"carnes vacunas, quesos duros, locro, guiso de lentejas, cordero, chivito",
    img: "../img/vinos/trumpeter.jpg",
    precio: 28000,
   
    },

    {   
    id: 5,
    nombre:"ALAMOS",
    caracteristicas: "Presenta un profundo color purpura con reflejos violetas, su aroma remite a intensos frutos negros con ligeras notas florales y de tostado",
    tipo: "malbec", 
    maridajes:"carnes rojas, pizzas, aves condimentadas",
    img: "../img/vinos/alamos.jpg",
    precio: 9500,
    
},

]

let carrodecompras = []



let contenedorProductos = document.getElementById("productos-conteiner")


function TarjetaDeProductos(productoscarrito){
        productoscarrito.forEach(producto => {
        const carrito = document.createElement("div")
        carrito.classList = "tarjeta-producto"
        carrito.innerHTML = `
        <img src=${producto.img}>
        <h3>${producto.nombre}</h3>
        <span>$${producto.precio}</span>
        <button class="agregarproductos" id="${producto.id}">COMPRAR</button>
        `

        contenedorProductos.appendChild(carrito) 

        
     

    })
    agregaralcarrito()
}
TarjetaDeProductos(vinos)

function agregaralcarrito () {
    unboton  = document.querySelectorAll(".agregarproductos")
      unboton.forEach (boton => {
       boton.onclick = (e) => {
           const productId = e.currentTarget.id
           const productoseleccionado = vinos.find(producto => producto.id ==productId)
           carrodecompras.push(productoseleccionado)
          

           localStorage.setItem("carrodecompras", JSON.stringify(carrodecompras))
       }
      

   })
}

    let contenedorUsuario = document.getElementById("usuario")
fetch("https://jsonplaceholder.typicode.com/users")
.then(Response => Response.json())
.then(data => {
    data.forEach(user => {
        const card = document.createElement("div")
        card.innerHTML = `<h2>nombre: ${user.name}</h2>
        <h3>username:${user.username}</h3>
        <h4>contacto: ${user.email}</h4>`

        contenedorUsuario.appendChild(card)

    })


})










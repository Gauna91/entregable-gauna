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
const vercarrito = document.getElementById("vercarrito")
const modelocarro = document.getElementById("modelocarro")



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

        carrito.addEventListener("click",() =>{
            carrodecompras.push({

                img: producto.img,
                nombre: producto.nombre,
                precio: producto.precio,
                

            })
            console.log(carrodecompras)

            
     })
     

    })
    agregaralcarrito()
}
TarjetaDeProductos(vinos)


vercarrito.addEventListener("click", () =>{
    const modelo = document.createElement("div")
    modelo.className = "modelo"
    modelo.innerHTML = `¨
    <h1 class="modelocompra">carrito</h1>`

    modelocarro.appendChild(modelo)
    const modeloboton = document.createElement("h1")
    modeloboton.innerText = "x"
    modeloboton.classList = "modelo-boton"
    modelo.appendChild(modelocarro)
})








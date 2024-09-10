const productos = [
{
    nombre: "luigui bosca",
    caracteristicas: "tinto color roojo violaceo brillante.Sus aromas son intensos y amables, con notas que recuerdan a frutas rojas, y tonos algo florales y especiados",
    tipo: "malbec", 
    maridajes:"carnes, pastas",
    precio: 12400,
    
},

{
    nombre:"Trumpeter",
    caracteristicas: "De un impactante color violeta, naris frutal destacando ciruelas, cerezas y notas de flores",
    tipo: "malbec", 
    maridajes:"Tablas de quesos duros, carnes vacunas grilladas y pastas rellenas con salsa a base de carnes",
    precio: 8500,
    
},
{
    nombre:"D.V Catena",
    caracteristicas: "Aporta aromas de mermelada de ciruelas maduras y moras negras, suavidad y volumen al paladar",
    tipo: "malbec, malbec", 
    maridajes:"carnes rojas, carnes a la parrilla, verduras salteadas",
    precio: 14900,
   
},
{
    nombre:"Rutini",
    caracteristicas: "Rojo violaceo, con matices azulados, En nariz, se destaca una gran complejidad aromatica: Notas de ciruela entremezcladas con especias que recuerdan a vainillas, anis y pimiemta negra",
    tipo: "malbec", 
    maridajes:"carnes vacunas, quesos duros, locro, guiso de lentejas, cordero, chivito",
    precio: 28000,
   
},
{
    nombre:"Alamos",
    caracteristicas: "Presenta un profundo color purpura con reflejos violetas, su aroma remite a intensos frutos negros con ligeras notas florales y de tostado",
    tipo: "malbec", 
    maridajes:"carnes rojas, pizzas, aves condimentadas",
    precio: 9500,
    
},
]




//let sub = document.getElementById("subtitulo")
//console.log(sub)
//sub.innerText = "hola la previa almacen y bebidas"

let vinos = document.getElementById("productos")

productos.forEach((producto) => {
    let almacen = document.createElement("div")
    almacen.className = "bibidas"
    almacen.innerHTML = `<span>NOMBRE: ${producto.nombre}</span>
                         <h3>TIPO: ${producto.tipo}<h3/>
                         <h4>PRECIO: $${producto.precio}<h4/> `
vinos.appendChild(almacen)
}
)


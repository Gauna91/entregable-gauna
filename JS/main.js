const contenedortarjeta = document.getElementById("productos-conteiner")



function TarjetaDeProductos(productos){
    productos.forEach(producto => {
        const nuevovino = document.createElement("div")
        nuevovino.classList = "tarjeta-producto"
        nuevovino.innerHTML = `
        <img src=${producto.img}>
        <h3>${producto.nombre}</h3>
        <span>$${producto.precio}</span>
        <button> Agregar al carrito</button>

        
        `

        
        contenedortarjeta.appendChild(nuevovino)    
    });
}


TarjetaDeProductos(vinos)
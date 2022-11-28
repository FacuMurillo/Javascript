// let number1 = prompt('Ingrese el Nombre');
// let number2 =  prompt('Ingrese el Apellido');
// let resultado = number1 + " " + number2;

//  alert(`Hola ${resultado} Como estas hoy?`)

//  if(resultado = "Facundo Murillo"){
//     alert("Eres bienvenido")
//  } else{
//     alert("No eres bienvenido")
// }

//                 DESAFIO Numero 1


// // let carrito = parseInt(prompt("Que deseas comprar hoy? 1: Zapatillas 2: Ropa 3: Celulares 4: Auriculares "))

// // let totalCarrito = 0
// // let seguirComprando = true
// // let continuarComprando

// //     while (seguirComprando === true) {
// //         if (carrito === 1) {
// //             totalCarrito = totalCarrito + 300
// //         } else if (carrito === 2) {
// //             totalCarrito = totalCarrito + 200
// //         } else if (carrito === 3) {
// //             totalCarrito = totalCarrito + 900
// //         } else if (carrito === 4) {
// //             totalCarrito = totalCarrito + 150
// //         } else {
// //             carrito = parseInt(prompt("ELIGE UNO / Que deseas comprar hoy? 1: Zapatillas 2: Ropa 3: Celulares 4: Auriculares "))
// //             continue
// //         }
// //     continuarComprando = parseInt(prompt("Quieres continuar comprando? 1: Si 2: No"))
// //         if (continuarComprando === 1) {
// //             carrito = parseInt(prompt("Que deseas comprar hoy? 1: Zapatillas 2: Ropa 3: Celulares 4: Auriculares "))
// //         } else {
// //             seguirComprando = false
// //         }
// //     }
// //         alert(`El total de la compra es de ${totalCarrito}`)


// Desafio Numero 2

// class Producto {
//     constructor(id, nombre, precio, stock) {
//         this.id = id;
//         this.nombre = nombre;
//         this.precio = precio;
//         this.stock = stock;
//     }
//     restaStock() {
//         this.stock = this.stock - 1;
//         console.log(`El producto ${this.nombre} tiene un stock de ${this.stock}`)
//     }
// }
// const pro1 = new Producto(0, "Iphone 7", 600, 100)
// const pro2 = new Producto(1, "Iphone 8s Plus", 950, 30)
// const pro3 = new Producto(2, "Iphone 14", 2000, 50)
// const pro4 = new Producto(3, "Iphone 12", 1000, 100)

// const productos = [pro1, pro2, pro3, pro4];

// console.table(productos)

// console.log(`Esta es la lista de Productos con sus precios y stocks`)

// const carrito = []

// let productosCarrito = "Que estas buscando hoy?"

// function agregarCarrito() {
//     for (item of productos) {
//         productosCarrito += ` \n ${item.id} - ${item.nombre} con un precio de ${item.precio}`
//     }
//     productosCarrito += `\n Ingrese el numero del producto que quieres, para finalizar ingrese 99`
//     let respuesta = parseInt(prompt(productosCarrito))
//     while (isNaN(respuesta)) {
//         alert("Porfavor ingrese un numero que aparece en la tabla")
//         respuesta = parseInt(prompt(productosCarrito))
//     }
//     while (respuesta != 99) {
//         switch (respuesta) {
//             case 0:
//                 carrito.push(productos[0])
//                 alert(`Agregamos al carrito el producto ${productos[0].nombre}`)
//                 productos[0].restaStock()
//                 break;
//             case 1:
//                 carrito.push(productos[1])
//                 alert(`Agregamos al carrito el producto ${productos[1].nombre}`)
//                 productos[1].restaStock()
//                 break;
//             case 2:
//                 carrito.push(productos[2])
//                 alert(`Agregamos al carrito el producto ${productos[2].nombre}`)
//                 productos[2].restaStock()
//                 break;
//             case 3:
//                 carrito.push(productos[3])
//                 alert(`Agregamos al carrito el producto ${productos[3].nombre}`)
//                 productos[3].restaStock()
//                 break;
//             default:
//                 alert("No tenemos stock para ese producto")
//                 break;
//         }
//         respuesta = parseInt(prompt(productosCarrito))
//     }
//     alert("Muchas Gracias tomamos tu pedido")
//     mostrarCarrito()
// }

// let productosMostrar = `Vas a llevar: `
// let precioCarrito = 0

// agregarCarrito()

// function mostrarCarrito() {
//     for (itemsElegidos of carrito)
//         productosCarrito += `\n - ${itemsElegidos.nombre}`
//     precioCarrito += itemsElegidos.precio
// }
// alert(`Tu carrito es de \n ${productosCarrito} \n y tienes que pagar ${precioCarrito}`)

// Desafio Numero 3 // 

class Producto{
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}
//  Productos // 

const producto1 = new Producto(1,'iPhone 6s Plus',800)
const producto2 = new Producto(1,'iPhone 7',800)
const producto3 = new Producto(1,'iPhone 8',900)
const producto4 = new Producto(1,'iPhone Xs',1000)
const producto5 = new Producto(1,'iPhone 7 Plus',850)
const producto6 = new Producto(1,'iPhone Xr',1100)
const producto7 = new Producto(1,'iPhone 14',1500)
const producto8 = new Producto(1,'iPhone 12 Mini',1300)
const producto9 = new Producto(1,'iPhone 11 Mini',1100)
const producto10 = new Producto(1,'iPhone 8 Plus',950)

const productos = [
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
    producto7,
    producto8,
    producto9,
    producto10,
]

const divProductos = document.getElementById('divProductos')
productos.forEach(producto=>{
    divProductos.innerHTML += `
    <div id="${producto.id}" class="card">
    <div class="card-body">
    <h4 class="card-title">${producto.nombre}</h4>
    <p class="card-text">${producto.precio} </p>
    <button id=${producto.id} class="btn btn-primary">Agregar</button>
    </div>
    </div>
    `
})
const agregar = document.querySelectorAll( '.btn-primary')

agregar.forEach(boton=>{
    boton.onclick = () => {
        console.log(boton.id)
    }
})
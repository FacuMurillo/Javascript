// let number1 = prompt('Ingrese el Nombre');
// let number2 =  prompt('Ingrese el Apellido');
// let resultado = number1 + " " + number2;

//  alert(`Hola ${resultado} Como estas hoy?`)

//  if(resultado = "Facundo Murillo"){
//     alert("Eres bienvenido")
//  } else{
//     alert("No eres bienvenido")
// }

let carrito = parseInt(prompt("Que deseas comprar hoy? 1: Zapatillas 2: Ropa 3: Celulares 4: Auriculares "))

let totalCarrito = 0
let seguirComprando = true
let continuarComprando

    while (seguirComprando === true) {
        if (carrito === 1) {
            totalCarrito = totalCarrito + 300
        } else if (carrito === 2) {
            totalCarrito = totalCarrito + 200
        } else if (carrito === 3) {
            totalCarrito = totalCarrito + 900
        } else if (carrito === 4) {
            totalCarrito = totalCarrito + 150
        } else {
            carrito = parseInt(prompt("ELIGE UNO / Que deseas comprar hoy? 1: Zapatillas 2: Ropa 3: Celulares 4: Auriculares "))
            continue
        }
    continuarComprando = parseInt(prompt("Quieres continuar comprando? 1: Si 2: No"))
        if (continuarComprando === 1) {
            carrito = parseInt(prompt("Que deseas comprar hoy? 1: Zapatillas 2: Ropa 3: Celulares 4: Auriculares "))
        } else {
            seguirComprando = false
        }
    }
        alert(`El total de la compra es de ${totalCarrito}`)
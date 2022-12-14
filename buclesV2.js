// ¡Hola! ACÁ HAY UN MIXING DE BUCLES Y FUNCIONES DE ORDEN SUPERIOR CON MÉTODOS DE ARRAYS DE TODO TIPO
// Vamos a tener que evaluar qué es mejor aplicar para cada caso. (hay más de métodos de arrays que for)
// Espero se diviertan.

//1) Crear una función crearCuentaRegresiva que tome como argumento un número entero numeroInicial y que devuelva un array con cuyo primer ítem sea numeroInicial y los demás ítems sean números enteros sucesivos descendientes, hasta llegar a 0.


// Ej de llamada de función:
// crearCuentaRegresiva(3) 
// Ejemplo de la devolución de la función: [3, 2, 1, 0]

// crearCuentaRegresiva(5) // [5, 4, 3, 2, 1, 0]


const numeros = [ 213213, 3434, 564, 1, Infinity, 4989845, -Infinity, 4343, 223, 12, 12]

const numerosDescendente = [...numeros].sort(( a, b) => {
    return b - a
})

// console.log (numeros)
// console.log (numerosDescendente)

// 2) Crear una función invertir que tome como argumento un array y que devuelva un array con los mismos valores pero en orden invertido.


// Ej de llamada de función:
// invertir([1, 2, 3])
// Ejemplo de la devolución de la función: [3, 2, 1]

// invertir([5, 7, 99, 34, 54, 2, 12]) // [12, 2, 54, 34, 99, 7, 5]

function reverseArray(array) {
    console.log(array.reverse());
}

// reverseArray (["a", "b", "c", "d", "e"]);


// 3) Crear una función removerDuplicados que tome como argumento un array y que devuelva un array con los mismos valores de array pero sin los valores duplicados.
// Pista: googleen cómo hacer esto!

// Ej de llamada de función:
// removerDuplicados([1, 1, 1]) 
// Ejemplo de la devolución de la función: [1]

// removerDuplicados([1, 1, 2, 2, 3, 3]) // [1, 2 ,3]
// removerDuplicados([5, 23, 8, 5, 5, 44, 23]) // [5, 23 ,8, 44]

// const numerosDos = [1,5,47,88,35,5,1,5,6];

// const removerDuplicados = numerosDos.filter((element, index) => {
//     return numerosDos.indexOf(element) === index;
// });

// console.log(removerDuplicados);


// 4) Creá la función montoTotal, que tome como parámetro un array de objetos. La función debe retornar un solo valor, con el monto total de todos los clientes, retornado con la siguiente frase: `Todos los clientes adeudan un total de: ${total}`.

//Ej de llamada de función
// montoTotal(clientes)
// Ejemplo de la devolución de la función: Todos los clientes adeudan un total de: 20000

let clientes = [
    {
        nombre: "Luciano",
        deuda: 10000,
        clientePreferencial: true
    },
    {
        nombre: "Andrea",
        deuda: 5000,
        clientePreferencial: false
    },
    {
        nombre: "Germán",
        deuda: 8000,
        clientePreferencial: false
    },
    {
        nombre: "Agustina",
        deuda: 12000,
        clientePreferencial: true
    }
]


function montoTotalReduce() {
    let total = clientes.reduce((a, b ) => a + b.deuda, 0)
    console.log (`Los clientes adeudan un total de: ${total} `)
    console.table(clientes)
}

// montoTotalReduce()



// 5) Cree la función descuento, que otorgue un 5% de descuento a los usuarios que sean clientes preferenciales.

// Retorne el array con todos los clientes, sean preferenciales o no, para poder apreciar el descuento de aquellos que si lo deben recibir.


// Ejemplo de llamada de función:
// descuento(clientes)
// Ejemplo del retorno de la función: 
// [
//     {
//         nombre: "Luciano",
//         deuda: 9500, // ----> valor modificado ;)
//         clientePreferencial: true
//     },
//     {
//         nombre: "Andrea",
//         deuda: 5000,
//         clientePreferencial: false
//     },
//     {
//         nombre: "Germán",
//         deuda: 8000,
//         clientePreferencial: false
//     },
//     {
//         nombre: "Agustina",
//         deuda: 11400,  // ----> valor modificado ;)
//         clientePreferencial: true
//     }
// ]


function descuento () {
    clientes.forEach(elemento =>{
        if (elemento.clientePreferencial){
            let resta = elemento.deuda * 0.05
            elemento.deuda -= resta
        }
    }
        )

}

// descuento()  

// console.table (clientes)

// 6) Crear una función buscarCliente que tome como parámetros un array y el nombre del cliente. La función debe retornar la información completa de ese cliente.

// Ejemplo de llamada de función:
// buscarCliente("Andrea")
// ejemplo de retorno de la función:
// { nombre: Andrea, deuda: 5000, clientePreferencial: false }


const ingresado = prompt()

const buscado = productos.filter (elemento => {
    return elemento.producto == ingresado
})

console.table (buscado)
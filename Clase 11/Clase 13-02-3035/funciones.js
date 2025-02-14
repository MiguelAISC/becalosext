
// Palabra reservada function *el nombre de la funcion* (PARAMETROS) {CONTENIDO}
function Sumar (numero1, numero2){
    let total = numero1 + numero2;
    // Permite guardar el resultado de una variable
    return total;
}

// Formas de imprimir en consola el resultado de una funcion 
let resultado = Sumar(10,10);

console.log(resultado);

console.log(Sumar(2,3));


// Se ejecuta pero no se muestra nada
Sumar(4,5);



// Otra forma de implementar la función
function Saludar (nombre){
    console.log("Hola, bienvenido/a: "+nombre);
}

Saludar("Miguel");
Saludar("Ana");


function Restar (a, b){
    let total = a-b;
    console.log(total);
}

Restar(4,5)




// Formas de concatenar.

let nombre = "Miguel"; // Variable global
let apellidoP = "Reyes";
console.log( `El papu se llama ${nombre} ${apellidoP}`)


let usuario = prompt("Cual es tu nombre?");
let perros = prompt("cuantos perros tienes?");
let gatos = prompt("cuantos gatos tienes?");

console.log( `El papu se llama ${usuario} y tiene ${perros} perros`);


// Vemos los datos en una alerta
alert( `El papu se llama ${usuario} y tiene ${perros} perros`);

// Vemos datos en la pagina
document.write( `El papu se llama ${usuario} y tiene ${perros} perros`);

// Total de las mascotas\
let totalMascotas = parseInt(perros) + parseInt(gatos);
document.write(`El papu se llama ${usuario} y tiene ${perros} perros, en total tiene ${totalMascotas} mascotas`)









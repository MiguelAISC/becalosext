
// Definimos la lista de los libros
let librosleidos = [];



// Agregamos una funcion donde colocamos un push para ingresar el nombre del libro y lo vaya agregando
function agregarLibro(nombreLibro){
    librosleidos.push(nombreLibro);
}

// Ingresamos el nombre de un libro
agregarLibro("El principito");
agregarLibro("El alquimista")

// Agregamos funcion para ir mostrando los libros uno por uno con un ciclo for
function mostrarLibrosLeidos(){
    for (let inicio = 0; inicio < librosleidos.length; inicio++){
        console.log(librosleidos[inicio]);
    }
}

// Se imprimen los libros que estan en la lista 
mostrarLibrosLeidos()
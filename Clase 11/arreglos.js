let verduras = ['Lechuga', 'Tomate','Cebolla','Jitomate'];


// Imprimir un item de la lista
console.log(verduras[2]);

//Imprimir la extension de la lista
console.log(verduras.length);


console.log("Imprimiendo verduras con ciclo for");

for(let indice = 0; indice < verduras.length; indice++){
    console.log(verduras[indice]);
}


console.log("Metodos de arreglo");

let personas = []; // Arreglo vacio

personas.push('Ana');
personas.push('Luis');
personas.push('Miguel');
personas.push('Alison');

console.log(personas)

personas.pop(); // El metodo "pop()" Elimina el ultimo elemento del arreglo

console.log(personas);



personas.unshift('Alex'); // El metodo unshift() Agrega elementos al inicio del arreglo
personas.unshift('Yolanda');

console.log(personas);


personas.shift(); // El metodo shift() elimina el primer elemento del arreglo.
console.log(personas)


personas[1] = 'Monica' // Modificar cierto elemento del arreglo
console.log(personas)
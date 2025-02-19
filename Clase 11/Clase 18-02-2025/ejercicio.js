// 1. Abstraccion: Definir una clase (plantilla) de una figura geometrica.

class Figura {
    constructor(color){
        this.color = color;
    }


    calcularArea(){
        throw new Error ("El metodo no ha sido implementado.")
    }

    obtenerColor(){
        return this.color;
    }

    miNombre(){
        return "HOLA SOY UNA FIGURA"
    }
}


// 2. Herencia: creamos subclases especificas (a partir de la clase padre)

class Circulo extends Figura{
    constructor (color, radio){
        super(color);
        this.radio = radio;
    }

    calcularArea(){
        return Math.PI * this.radio * this.radio;

    }
}



class Rectangulo extends Figura{
    constructor(color, base, altura){
        super(color);
        this.base = base;
        this.altura = altura;

    }

    calcularArea(){
        return this.base * this.altura
    }
}



// 3. Crear mis objetos (instanciar)

const miCirculo = new Circulo("Morado",2);

const miRectangulo = new Rectangulo("Verde", 12, 6);


console.log("El color del circulo es: "+ miCirculo.obtenerColor());
console.log("El color del Rectangulo es: "+ miRectangulo.obtenerColor());
console.log("El Rectangulo dice: "+ miRectangulo.miNombre());


// 4. Polimorfismo: Un objeto puede a hacer el mismo trabajo de forma diferente.
function mostrarArea(figura){
    console.log(figura.calcularArea());
}

mostrarArea(miCirculo);
mostrarArea(miRectangulo);
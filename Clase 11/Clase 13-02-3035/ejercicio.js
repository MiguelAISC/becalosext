function areaCirculo(radio){
    const pi = 3.1416;
    let total = pi *  Math.pow(radio,2);
    console.log("El área del circulo es: " + total);
    
}


areaCirculo(3);


function areaRectangulo(base, altura){
    let total = base * altura;
    console.log("El área del rectangulo es: "+total);
}

areaRectangulo(10,15);

function areaTriangulo(base, altura){

    let total = (base * altura) / 2
    console.log("El área del triángulo es: " + total);

}

areaTriangulo(2,3)


function conversionGrados(gradosC){
    let total = (gradosC * 9/5) + 32;
    console.log("Los grados C en F son: "+total);
}


conversionGrados(2);


function numeroPar(numero){
    
    if(numero%2 == 0){
        console.log("Su número es par");
    }else{
        console.log("Su número es impar")
    }
}

numeroPar(3);

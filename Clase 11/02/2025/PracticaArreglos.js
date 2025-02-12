const frutas = ["manzana", "pera", "manzana", "naranja", "pera", "manzana", "naranja", "kiwi"];

const contadorFrutas = [];

for (let i = 0; i < frutas.length; i++) {
  let fruta = frutas[i];
  contadorFrutas[fruta] = (contadorFrutas[fruta] || 0) + 1;
}

console.log("Conteo de frutas con for:", contadorFrutas);

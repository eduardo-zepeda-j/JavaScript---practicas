//tipo de dato complejo -> paso por referencia

let frutas = {
  naranja: "🍊",
};

let vegetales = frutas;

vegetales.naranja = "🥕";
console.log(frutas);

let ropa = {
  blusa: "👚",
};

ropa.pantalon = "👖";
console.log(ropa);
//el garbagge collector se encarga de eliminar los datos que ya no se estan utilizando
//en el caso de los objetos, si se elimina una referencia a un objeto, el garbagge collector se encarga de eliminar el objeto
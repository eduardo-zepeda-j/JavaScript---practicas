/*
switch(expresion){
    case valor1:
        // Bloque de código
        break;
    case valor2:
        // Bloque de código
        break;
    case valor3:
        // Bloque de código
        break;

    default:
}

*/
let expresion = "Papayas";

switch (expresion) {
  case "Naranjas":
    console.log("El kilo de naranjas cuesta $0.59");
    break;
  case "Manzanas":
    console.log("El kilo de manzanas cuesta $0.32");
    break;
  case "Papayas":
    console.log("El kilo de papayas cuesta $2.79");
    break;
  default:
    console.log("Lo siento, no tenemos " + expresion + ".");
}

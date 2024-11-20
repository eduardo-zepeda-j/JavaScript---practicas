//Funciones puras no producen efectos secundarios y dada una entrada una misma salida

// Side Effects
// 1. Modificar variables globales
// 2. Modificar parámetros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o consola
// 5. Manipulación del DOM
// 6. Obtener la hora actual

// Funciones puras

function sum(a, b) {
  return a + b;
}

// Funciones impuras
function sum2(a, b) {
  console.log("A: ", a);
  return a + b;
}

let total = 0;
function sumWithSideEffect(a) {
  total += a;
  return total;
}
console.log(sumWithSideEffect(5));

//función pura
function square(x) {
  return x * x;
}

function addTen(y) {
  return y + 10;
}

const number = 5;
const finalResult = addTen(square(number));

console.log(finalResult);

/*
for(variable; condicion; incremento){
    console.log('Hola');
    codigo que se ejecuta en cada iteracion
       }

*/

for (let i = 1; i < 6; i++) {
  let texto;
  if (i === 1) {
    texto = "Uno";
  } else if (i === 2) {
    texto = "Dos";
  } else if (i === 3) {
    texto = "Tres";
  } else if (i === 4) {
    texto = "Cuatro";
  } else if (i === 5) {
    texto = "Cinco";
  }
  console.log(`Hola ${texto}`);
}

//variantes de for each
// for in --> enumera los objetos de una lista para luego indexar
let list = ["a", "b", "c", "d", "e"];
for (let letter in list) {
  console.log(list[letter]);
}
console.log("-".repeat(10));
// for of --> itera sobre los valores de un objeto iterable
let canasta = ["manzanas", "peras", "naranjas", "papayas", "uvas"];
for (let fruta of canasta) {
  console.log(fruta);
}
console.log("-".repeat(10));
let palabra = "Hola";
for (let letra of palabra) {
  console.log(letra);
}
console.log("-".repeat(10));
let palabra2 = "Hola2";
for (let letra in palabra2) {
  console.log(palabra2[letra]);
}

console.log("-".repeat(10));

const listaDeCompras = {
  manzanas: 5,
  peras: 3,
  naranjas: 7,
  papayas: 2,
  uvas: 4,
};

for (fruta in listaDeCompras) {
  console.log(fruta);
}
console.log("-".repeat(10));
for (fruta in listaDeCompras) {
  console.log(`${fruta}: ${listaDeCompras[fruta]}`);
}

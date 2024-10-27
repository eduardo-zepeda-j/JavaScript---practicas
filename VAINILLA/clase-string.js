//creacion de string
const primeraOpcion = "Comilla simple";
const segundaOpcion = "Comilla doble";
const terceraOpcion = `Comilla grave simple`;

//concatenacion de strings - 1. Opcion +

const direccion = "Calle 123";
const ciudad = "Medellin";
const direccionCompleta =
  "Mi direccion completa es " + direccion + " " + ciudad;

console.log(direccionCompleta);

//concatenacion de strings - 2. Opcion template string
const nombre = "Eduardo";
const pais = "🇬🇹";
const presentacion = `Hola, soy ${nombre} y soy de ${pais}`;

console.log(presentacion);

//concatenacion de strings - 3. Opcion join()
const primeraParte = "Me encanta";
const segundaParte = "la gente de";
const terceraParte = "🇬🇹";
const pensamiento = [primeraParte, segundaParte, terceraParte];
console.log(pensamiento.join(" "));

//concatenacion: 4. Opcion concat()
const hobbie1 = "🎮";
const hobbie2 = "📚";
const hobbie3 = "🎸";
const hobbies = "Mis hobbies son: ".concat(
  hobbie1,
  ", ",
  hobbie2,
  ", ",
  hobbie3
);
console.log(hobbies);

//caracteres de escape
//const whatDoIDo = 'I'm a developer'
//1.Escape alternativo
const escapeAlternativo = "I'm a developer";
//2. barra invertida
const escapeBarraInvertida = "I'm a developer";
//3. template literals
const escapeComillaInvertida = `I\'m a developer`;

//Escritura de String largos
/*
    las rosas son rijas,
    las violetas son azules,
    el azucar es dulce,
    caracter inesperado,
    en la linea 86
*/

const poema =
  "las rosas son rijas,\n" +
  "las violetas son azules,\n" +
  "el azucar es dulce,\n" +
  "caracter inesperado,\n" +
  "en la linea 86";
console.log(poema);

const poema2 =
  "las rosas son rijas,\n\
las violetas son azules,\n\
el azucar es dulce,\n\
caracter inesperado,\n\
en la linea 86";
console.log(poema2);
const poema3 = `las rosas son rijas,
las violetas son azules,
el azucar es dulce,
caracter inesperado,
en la linea 86`;

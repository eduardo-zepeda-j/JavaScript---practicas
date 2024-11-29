let cajaDeAndy = "Woody";
console.log(cajaDeAndy);

//lo no permitido
let c = "Woody";
let cda = "Woody";
let pcAndy = "Woody";

//Lo permitido
let primerTrasteoDeAndy = "Woody";
let urlDelUsuario = "https://www.google.com";
let idDelUsuario = "1234567890";

// let se usa para variables que cambian en la ejecucion
// const se usa para variables que no cambian en la ejecucion
// var se usa para variables globales

//tipos de datos
//string
let nombre = "Andy";
//number
let edad = 3;
//boolean
let esUnJuguete = true;
//null
let objeto = null; // lo definimos nosotros o a veces JS lo devuelve
//undefined
let color;
let noDefinido = undefined; //lo devuelve JS cuando no se ha definido una variable
//object
let array = [];
//symbol es un tipo de dato que se usa para crear identificadores unicos por ejemplo
//para crear propiedades privadas como en el caso de los objetos
let simbolo = Symbol("mi-simbolo");
//bigint
let numeroGrande = 9007199254740991n;
//se usa la n al final para indicar que es un numero grande

//tipos de datos complejos
//array
let juguetes = ["Woody", "Buzz", "Jessie"];
//object
let persona = {
  nombre: "Andy",
  edad: 3,
  esUnJuguete: true,
};
//function
let saludar = function () {
  console.log("Hola");
};

//symbol
let simboloUnico = Symbol("único");

//bigint
let numerogrande = 2n;

//complejos
//objetos
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  anio: 2020,
  color: "rojo",
  precio: 20000,
  esNuevo: true,
  detalles: {
    motor: "1.8",
    transmision: "automatica",
    llantas: "17",
    asientos: "tela",
  },
  conductores: ["Andy", "Mamá", "Papá"],
};

//arrays
let frutas = ["manzana", "pera", "uva", "fresa"];

//funciones
function saludar2() {
  console.log("first");
}

//strings
let string1 = "Hola";
let string2 = "hola mundo";
let string3 = `${string1} feliz :)`;

console.log(string1);
console.log(string2);
console.log(string3);
console.log(string3.length);

let frase = "Hola, soy Andy";
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());
console.log(frase.substring(0, 4));
console.log(frase.concat(" y tengo 3 años"));
// primitivos son inmutables -> se pasan por valor
// objetos son mutables -> se pasan por referencia

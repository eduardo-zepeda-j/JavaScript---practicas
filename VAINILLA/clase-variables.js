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
let objeto = null;
//undefined 
let color;
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
    esUnJuguete: true
};
//function
let saludar = function () {
    console.log("Hola");
};


// primitivos son inmutables -> se pasan por valor
// objetos son mutables -> se pasan por referencia
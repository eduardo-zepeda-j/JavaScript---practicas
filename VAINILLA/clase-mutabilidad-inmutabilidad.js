// tipo de dato primitivo -> inmutable
let numero = 23;
numero = numero + 10;
console.log(numero);

let esVerdadero = true;
esVerdadero = false;
console.log(esVerdadero);

// tipo de dato complejo -> mutable
let usuario = {
  nombre: "Juan",
  edad: 15,
};


usuario.edad = 20;
console.log(usuario);

let frutas = ["manzana", "pera", "uva"];

frutas[1] = "fresa";
console.log(frutas);
frutas.push("kiwi");
console.log(frutas);

function cambiarNombre(objeto) {
  objeto.nombre = "Nuevo nombre";
}

let persona = { nombre: "Antonio" };
console.log(persona);

cambiarNombre(persona);
console.log(persona);

/*
    this --- class
    this --- object --- class

*/

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

const persona1 = new Persona("Juan", 30);

console.log(persona1);

persona1.nuevoMetodo = function () {
  console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`);
};
persona1.nuevoMetodo();
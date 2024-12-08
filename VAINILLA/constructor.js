//const persona ={
//  nombre: "Juan",
// apellido: "Perez",
//edad: 30,

//}

function Persona(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.nombreCompleto = `${this.nombre} ${this.apellido}`;
}

const persona1 = new Persona("Juan", "Perez", 33);
console.log(persona1);

console.log(persona1.nombreCompleto);

const persona2 = new Persona("Carlos", "Morales", 35);
console.log(persona2);

console.log(persona2.nombreCompleto);

Persona.prototype.telefono = "12345678";

console.log(persona2);
persona1.nacionalidad = "Guatemalteco";
console.log(persona1);

Persona.prototype.saludar = function () {
  console.log(
    `Hola, mi nombre es ${this.nombreCompleto} y tengo ${this.edad} años`
  );
};

persona1.saludar();
persona2.saludar();

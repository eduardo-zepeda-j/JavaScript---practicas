class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.nombreCompleto = `${this.nombre} ${this.apellido}`;
    this.log = function () {
      console.log(this.nombreCompleto);
    };
  }
  saludar() {
    console.log(
      `Hola, mi nombre es ${this.nombreCompleto} y tengo ${this.edad} años`
    );
  }
}

const persona1 = new Persona("Juan", "Perez", 33);
console.log(persona1);
persona1.saludar();
persona1.log();

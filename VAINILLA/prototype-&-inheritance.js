//clases
//funciones constructoras
// solo estas generan prototipos

class Animal {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }
  emitirSonido() {
    console.log("El animal emite un sonido");
  }
}

class Perro extends Animal {
  constructor(nombre, tipo, raza) {
    super(nombre, tipo);
    this.raza = raza;
  }
  emitirSonido() {
    console.log("Guauu Guauu");
  }
}

const perro = new Perro("Firulais", "Mamifero", "Pitbull");
perro.emitirSonido();
console.log(perro.nombre);
console.log(perro.tipo);
console.log(perro.raza);

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
  correr() {
    console.log(`${this.nombre} corre alegremente`);
  }
}

const perro1 = new Perro("Firulais", "Mamifero", "Pitbull");

console.log(perro1.nombre);
console.log(perro1.tipo);
console.log(perro1.raza);
perro1.emitirSonido();
perro1.correr();

perro1.nuevoMetodo = function () {
  console.log("Este es un nuevo metodo");
};

Perro.prototype.segundoMetodo = function () {
  console.log("Este es un segundo metodo");
};

perro1.segundoMetodo();


let currentPrototype=Object.getPrototypeOf(Perro.prototype);
for (; currentPrototype !== null; currentPrototype = Object.getPrototypeOf(currentPrototype)) {
  console.log(currentPrototype);
}
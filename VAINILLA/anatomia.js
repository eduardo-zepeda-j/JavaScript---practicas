/*
Estructura de dato
key/value

objeto{
    propiedad: valor,
    propiedad2: valor2,
    propiedad3: valor3,
    metodo()
}

*/

const persona1 = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    calle: "Av. America",
    ciudad: "GT",
  },
  // Metodo
  saludar() {
    console.log(`Hola, mi nombre es ${persona1.nombre}`);
  },
};

console.log(persona1);
persona1.saludar();

persona1.telefono = "12345678";
console.log(persona1);

// agregar un nuevo metodo

persona1.despedir = () => {
  console.log("Adios");
};

persona1.despedir();

console.log(persona1);

delete persona1.telefono;

delete persona1.despedir;

console.log(persona1);

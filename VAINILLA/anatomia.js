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

const persona = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    calle: "Av. America",
    ciudad: "GT",
  },
  // Metodo
  saludar() {
    console.log(`Hola, mi nombre es ${persona.nombre}`);
  },
};

console.log(persona);
persona.saludar();

persona.telefono = "12345678";
console.log(persona);

// agregar un nuevo metodo

persona.despedir = () => {
  console.log("Adios");
};

persona.despedir();

console.log(persona);

delete persona.telefono;

delete persona.despedir;

console.log(persona);

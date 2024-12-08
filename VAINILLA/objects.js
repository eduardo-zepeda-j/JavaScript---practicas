/*

Los objestos son una estructura de datos

key / value

objeto {
    propiedad : valor,
    propiead2 : valor2,
    propiedad3 : valor3,
    Metodos: function(){}
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

persona.saludar();
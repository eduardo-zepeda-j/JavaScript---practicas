const stringPrimitivo = "Soy un string primitivo";
console.log(typeof stringPrimitivo); // string

const stringPrimitivoTambien = "Soy un string primitivo tambien";
console.log(typeof stringPrimitivoTambien); // string

//string object
const stringObject = new String("Soy un string object");
console.log(typeof stringObject); // object

//acceder a caracteres
const saludo = "Hola. ¿Cómo estás?";
console.log(saludo[0]); // H
console.log(saludo[2]); // l
console.log(saludo.charAt(2)); // l
console.log(saludo.indexOf("Cómo")); // 2
console.log(saludo.lastIndexOf("o")); // 2
console.log(saludo.slice(3, 5));
console.log(saludo.length); // 18
console.log(saludo.toLocaleLowerCase());
console.log(saludo.toLocaleUpperCase()); // HOLA. ¿CÓMO ESTÁS?

const saludoDividido = saludo.split(" ");
console.log(saludoDividido);
console.log(saludoDividido[1]);

const saludoConEspacios = "   Hola. ¿Cómo estás?   ";
const saludoSinEspacios = saludoConEspacios.trim();
console.log(saludoSinEspacios);

const saludoOriginal = "Hola Mundo";
const nuevoSaludo = saludoOriginal.replace("Mundo", "🌎");
console.log(nuevoSaludo);

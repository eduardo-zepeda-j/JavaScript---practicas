//1. Tipo Entero y Decimal
const entero = 42;
const decimal = 3.14;

console.log(typeof entero, typeof decimal);

//2.Notacion cientifica
const notacionCientifica = 5e3;

//3. Infinito y Nan
const infinito = Infinity;
const noEsUnNumero = NaN;

//4. Operaciones aritmeticas

//1.suma, resta, multiplicacion, division

const suma = 5 + 5;
const resta = 5 - 5;
const multiplicacion = 5 * 5;
const division = 5 / 5;

//2. Modulo y exponenciacion
const modulo = 5 % 2;
const exponenciacion = 5 ** 2;

//Precision
const resultado = 0.1 + 0.2;
console.log(resultado);
console.log(resultado.toFixed(1));

console.log(resultado === 0.3);

// Operaciones Avanzadas
const raizCuadrada = Math.sqrt(25);
const valorAbsoluto = Math.abs(-5);
const aleatorio = Math.random();

console.log(raizCuadrada);
console.log(valorAbsoluto);
console.log(aleatorio);

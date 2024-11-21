/*
CLOSURE: función que tiene acceso a variables de un ámbito externo,
incluso después de que la función haya terminado de ejecutarse.

Ámbito Léxico: Cada vez que se declara una función crea su propio
ámbito léxico, y puede acceder a las variables dentro de ese ámbito y
las variables de ámbitos superiores.

*/

function outerFunction() {
  let outerVariable = "I am from outer function";
  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}

const closureExample = outerFunction();
closureExample();

function test() {
  let variable = "I am from test function";
  return variable;
}

console.log(test());

function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const counterA = createCounter();
counterA();
counterA();
counterA();

const counterB = createCounter();
counterB();

counterA();
counterA();
counterB();
counterB();

function outer() {
  let message = "Hello, ";
  function inner(name) {
    console.log(message + name);
  }
  return inner;
}

const clousureA = outer();
const clousureB = outer();

clousureA("Eduardo");
clousureB("Jorge");

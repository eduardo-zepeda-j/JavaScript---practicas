// How to create an Array?

// 1. new Array() or Array()

const fruits = Array("apple", "banana", "orange");
console.log(fruits);

// se crea un array con los espacios vacios
const justOneNumber = Array(12);
console.log(justOneNumber);

const numbers = Array(1, 2, 3, 4, 5);
console.log(numbers);

// 2 Array literal syntax

const oneNumber = [1];
console.log(oneNumber);
oneNumber.push(2);
console.log(oneNumber);

const emptyArray = [];
console.log(emptyArray);

const sports = ["soccer", "basketball", "tennis"];
console.log(sports);

const recipeIngredients = [
  "Flour",
  true,
  2,
  {
    ingredient: "milk",
    quantity: "1 cup",
  },
  false,
];
console.log(recipeIngredients);

//Accessing elements in an Array
const firstFruit = fruits[0];
console.log(firstFruit);

// length property
const numberOfFruits = fruits.length;
console.log(numberOfFruits);

// Mutability of Arrays
fruits.push("strawberry");
console.log(fruits);

// Inmutability of Arrays
const newFruits = fruits.concat(["grape", "kiwi"]);
console.log(fruits);
console.log(newFruits);

// Checking arrays with Array.isArray()

const isArray = Array.isArray(fruits);
console.log(isArray);
console.log(Array.isArray(fruits));

// Practical Exercise: sum all elements of an array
const numbersArray = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbersArray.length; i++) {
  sum += numbersArray[i];
}
console.log(sum);

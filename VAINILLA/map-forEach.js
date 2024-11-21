// Methods that iterate over an array
// Methods that do not modify the original array (inmutability)

// map()

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);

console.log(numbers);
console.log(squaredNumbers);

// forEach()

const colors = ["red", "green", "blue"];
const iteratedColors = colors.forEach((color) => console.log(color));

console.log(colors);
console.log(iteratedColors);

// Exercise : Fahrenheit to Celsius conversion
const temperaturesInFahrenheit = [32, 45, 50, 75];
const temperaturesInCelsius = temperaturesInFahrenheit.map(
  (temperatures) => (temperatures - 32) * (5 / 9)
);

console.log("Fahrenheit", temperaturesInFahrenheit);
console.log("Celsius", temperaturesInCelsius);

// Exercise sum of Elements in an array

const newNumbers = [1, 2, 3, 4, 5];
let sum = 0;
newNumbers.forEach((number) => {
  sum += number;
});
console.log(sum);

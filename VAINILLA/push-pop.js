// Methods that modify the original array (Mutability)

// push()

const countries = ["Finland", "Sweden", "Norway"];
console.log(countries);

const newcountries = countries.push("Denmark", "Iceland", "USA");
console.log(newcountries);
console.log(countries);

// pop()

const removedCountry = countries.pop();
console.log(removedCountry);
console.log(countries);

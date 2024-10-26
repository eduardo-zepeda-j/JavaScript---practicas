//null
const snoopy = null;
console.log(snoopy);
console.log(typeof snoopy);

//undefined
let name;
console.log(name);

//symbol
// valores unicos e inmutables
const uniqueId = Symbol("id");

const symbol1 = Symbol("1");

const symbol2 = Symbol("1");

console.log(symbol1 === symbol2);

const ID = Symbol("id");
let user = {};
user[ID] = "1234";
console.log(user);

//BigInt
const bigNumber = 10231032941239481723490123840123n;
console.log(bigNumber);

const numberOfParticlesInTheUniverse = 10231032941239481723490123840123n;
console.log(numberOfParticlesInTheUniverse);

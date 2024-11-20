const greeting = function (name) {
  return `Hi ${name}!`;
};

// Arrow function -> exlicit return
const greeting2 = (name) => {
  return `Hi ${name}!`;
};
// Arrow function -> implicit return
const greetingImplicit = (name) => `Hi ${name}!`;

console.log(greetingImplicit("Jorge"));

const greetingImplicitTwoParameters = (name, lastName) =>
  `Hi ${name} ${lastName}!`;

console.log(greetingImplicitTwoParameters("Jorge", "Gonzalez"));

// Lexical Bindig
const finctionalCharacter = {
  name: "Uncle Ben",
  messageWithTraditionalFunction: function (message) {
    console.log(`${this.name} says: ${message}`);
  },
  messageWithArrowFunction: function (message) {
    const arrowFunc = (msg, self = this) => {
      console.log(`${this.name} says: ${msg}`);
    };
    arrowFunc(message);
  },
};
finctionalCharacter.messageWithTraditionalFunction(
  "With great power comes great responsibility"
);
finctionalCharacter.messageWithArrowFunction("Beware of Doctor Octopus");

const dbUsers = [
  {
    username: "admin",
    password: "admin",
  },
  {
    username: "user",
    password: "user",
  },
  {
    username: "guest",
    password: "guest",
  },
];

const username = prompt("Ingrese su nombre de usuario");
const password = prompt("Ingrese su contraseña");

if (
  dbUsers.find(
    (user) => user.username === username && user.password === password
  )
) {
  console.log("Bienvenido");
} else {
  console.log("usuario o contraseña incorrecta");
}

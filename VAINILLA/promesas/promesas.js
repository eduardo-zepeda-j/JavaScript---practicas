/*
Promise() es un objeto que representa la terminación 
o el fracaso de una operación asíncrona.

Promesas tienen tres estados:
- Pending: Inicialmente
- Fulfilled: Cuando se resuelve
- Rejected: Cuando se rechaza

los callbacks son funciones que se pasan como argumentos a otra función
resolve() y reject()

tiene dos métodos:
- then() : Se ejecuta cuando la promesa se resuelve
- catch() : Se ejecuta cuando la promesa se rechaza

*/

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let operationSuccessful = true;
    if (operationSuccessful) {
      resolve("La operación fue exitosa");
    } else {
      reject("La operación no fue exitosa");
    }
  }, 2000);
});

promise
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });

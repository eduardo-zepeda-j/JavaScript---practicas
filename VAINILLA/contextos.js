//global
const userPoints = 50;

function checkAccess() {
  //local1
  if (userPoints < 100) {
    //local2
    const message = "You don't have enough points to access this content";
    return message;
  } else {
    //local3
    const message = "Welcome to the VIP area";
    return message;
  }
}

//global
console.log(checkAccess());

//scope chain

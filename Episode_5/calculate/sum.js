// Modules are by defualt protect their variables and functions by leaking

console.log("sum loded");

// var x = "Hello World!";

function calculateSum(a, b) {
  const sum = a + b;
  console.log(`The sum of ${a} and ${b} is ${sum}`);
}

console.log(module.exports); // { empty object }


module.exports = { calculateSum };

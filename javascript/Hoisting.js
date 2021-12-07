// debugger;

// Hoisting --> Before Declaration of function or a variable with a var keyword we can access

// Everything in JavaScript is execute in Execution Context

var myFunc = function () {
  console.log("I am a FUnction");
};
myFunc();

sum();
const sum = function (a, b) {
  console.log("Sum fun");
};
// console.log(x);
let x = 10;
let y = 20;

// In Global Execution Context
// it stores the variables and function declaration

const calcSum = function (first, second) {
  let total = 0;
  total = first + second;
  console.log(total);
};

calcSum();

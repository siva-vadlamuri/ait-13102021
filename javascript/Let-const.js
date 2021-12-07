//  why var?
// var firstName = "Mr"

// Var was released on 2009
// What are the drawbacks of var keyword

// Block
// Scope (The Accessibility )
// For A variable There will be two scopes
// 1 Local Scope
// 2 Global Scope

// Drawbacks Of Var Keyword
// 1st scope
//Redeclaring a variable

// To Solve the Issues with var keyword they introduced let and const in ES6 (2015)

// let and const are block scoped

if (true) {
  console.log(email);
  var email = "siva@gmail.com";
  var email = "example@gmail.com";
}

console.log(email);

// let and const
// The Rules Of Let variable is Increased Or Not Compared To Var variable
if (true) {
  //   console.log(isLoginedWithFacebook);
  let isLoginedWithFacebook = false;
   isLoginedWithFacebook = true;
  
  //   let isLoginedWithFacebook = true;
  console.log(isLoginedWithFacebook);
}
// Const is like Once You declare a variable you cannot change data
// When You declare a variable at point itself you need to assign the value
const PI = 3.5;
// PI

// If you declare a variable with var keyword inside a function the so that varibale would be functional scoped

// If you declare a variable with var keyword outside a function so that would be Global scope

function x() {
  var isLoginedWithGoogle = true;
  console.log(isLoginedWithGoogle);
}
x();
// console.log(isLoginedWithGoogle);

// Function is a block of code which a specific task
// Login, logout, register,add to cart, remove from cart

// How to declare a function

// function welcomeUser(){ function body }

// function welcomeUser() {
//   console.log("Welcome User");
// }

// welcomeUser();

// Parameters and Arguments
// When you declare a function if you pass input to a function those parameters
// When we call a function if you pass any inputs to a function those arguments

// Different types of  functions
// Function Declartion
// Variable function or function expression
// Anonomous Function --> A function without a name is called Anonomous Function
// Self executing function --> A function will execute itself
// Call Back Function
// Function with return statement
// Function with default parameters
// Arrow function

// Function Declartion Or Function Statement
function welcomeUser(name) {
  console.log("Welcome " + name);
}

welcomeUser("shiva");

// Variable Function or Function Expression
// We consider functions as variable

var myFunc = function () {
  console.log("I am a function Expression");
};
console.log(myFunc);
myFunc();

(function () {
  console.log(
    "I Am an Anomonous Function And I am Self Execution Function also"
  );
})();

var calcGst = function (ammount, gst = 18) {
  // falsy values and truthy
  // 1 undefined
  // 2 null
  // 3 false
  // 4 NaN
  // 5 0
  // !false = true

  //   if (!gst) {
  //     gst = 18;
  //   }
  //   console.log(ammount, gst);
  //   10000 + 1200 == 11200
  // 1000,10%
  // 1000 + 100 == 1100
  // First Step calc the GST of the Ammount
  // Add the cal GST to the  ammount
  var total = ammount + (ammount * gst) / 100;
  return total;
};
var completeAmmount = calcGst(10000);
console.log(completeAmmount);
var completeAmmount2 = calcGst(120000);
console.log(completeAmmount2);

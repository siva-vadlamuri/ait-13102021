// console.log("Hello world");

// Operators
// Arthemetic Operator
//  +,-,*, %,/, **
// compararsion operator
// ==,===, !=
// logical operator
// || , &&
// assignment operator
// ternary operator
// increment / decrement operator
// condtion statement ( if,else,else if)

console.log(2 + 2);
console.log(10 - 2);
console.log(10 * 2);

// modulus % (which gives us the reminder )

console.log(10 % 2);
//  division / (which give quoutient)
console.log(10 / 2);

console.log(2 ** 10);
// Discount = (Listing - selling)/Listing * 100
// BODAMS
var discount = ((3695 - 1476) / 3695) * 100;
console.log(discount);

var email = "example@gmail.com";
var password = "123456";

// console.log(email == "example@gmail.com");

// What is Difference between == and ===
//  == will check the value and ignores the data type
// === (strict equalto) will check the value and data type
console.log("1" == 1);
console.log("1" === 1);

// Assignment Operators
// =,+=,-=,*=,%=,

var total = 0;
// i buyed a milk product
// total = total + 30;
total += 30;
// i buyed a maggie
total += 10;
console.log(total);

// condtional statements are like
// based on condtion if you want to execute certain code

var myNumber = 10;

if (myNumber % 2 == 0) {
  console.log("It is even");
} else {
  console.log("It is Odd");
}
// service now

// Logical Operators
var isLoginedWithGoogle = true;
var isLoginedWithApple = false;

// Any one of the condtion has to true then it will return true
// OR example
// if (isLoginedWithGoogle || isLoginedWithApple) {
//   // alert("Your are on the dashboard");
// }

// And Example
// if (email == "example@gmail.com" && password == "123456") {
//   alert("Your are on the Home Page");
// }

//  condtion ? statement1 : statement2

var age = 18;
age >= 18
  ? console.log("Your Eligble for vote")
  : console.log("Your not eligble for vote");

// Increment(++) and Decrement(--)
// Increment the value by one and decrement the value value

var myNumber = 10;
myNumber++;
console.log(myNumber);
myNumber--;
console.log(myNumber);

// temparature
var temparature = 35;
// if the temperature is less than 20 then show too cold
// if the temperature is greater than 20 and less than 30 it is cool
// if the temperature is greater than 30 and less 35 moderate
// if the temperature is greater than 35 it too hot

if (temparature <= 20) {
  console.log("The climate is too cool");
} else if (temparature > 20 && temparature <= 30) {
  console.log("The climate is cool");
} else if (temparature > 30 && temparature <= 35) {
  console.log("The climate is moderate");
} else {
  console.log("Theclimate is too hot");
}

// For every loop 3 things will be there
// intiliazation : starting point
// condtion :
// increment/decrement

// for(initliazation;condition;i++)

for (var i = 1; i <= 100; i++) {
  console.log(i);
}

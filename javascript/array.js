// JavaScript is Synchronous Single Threaded dynamicly typed Scripting language

// Array
// Objects
// Loops

// Arrays is collection of data
// Array values are index based
// String : Sequence of characters

// c,c++,java,c# these are strongly typed languages

// 123
// int age = 23
// age = "23"
// Data Types
// String
// number
// boolean
// null
// undefined
var age = 22;
age = "twenty two";
console.log(age);

var states = [
  "karantaka",
  "Maharastra",
  "Andhra Pradesh",
  "Jammu And Kashmir",
  "Gujarath",
  "Kerala",
  "Tamil nadiu",
  "West Bengal",
];
// 3
// 2
// 5
// console.log(states);
// console.log(states[2]);

// Array Methods
// length
// console.log(states.length);

for (var i = 0; i < states.length; i++) {
  console.log(states[i]);
}
// 0,1,2,3,4,5
// 0

var middleIndex = parseInt(states.length / 2);
console.log(states[middleIndex]);

// Array Methods
// length
// Array is using the Stack Data structure
// Stack Last in first out

// length,push,pop,shift,unshift

states.push("Arunchal pradesh");
console.log(states);
states.pop();
console.log(states);
states.shift();
console.log(states);

// includes

var isKarntakaPresent = states.includes("karantaka");
console.log(isKarntakaPresent);

// indexOf
var indexOfJK = states.indexOf("keralaa");
console.log(indexOfJK);

var arr1 = [0, 1, 2, [3, 4]];
// [0,1,2,3,4]
// Flattern array
console.log(arr1.flat());

var arr2 = [23, 12, 17, 12, 8, 9, 12];
console.log(arr2.indexOf(12));
console.log(arr2.lastIndexOf(12));

// Slice is to extract a portion of a array

var firstThreeStates = states.slice(0, 4);
console.log(firstThreeStates);
console.log(states);

// Splice is delete the element, or add the elements
states.splice(2, 0, "Madhya Pradesh");
console.log(states);

var fruits = ["bannana", "jack fruit", "drangon fruit", "apple"];
console.log(fruits.sort());

// String Methods
var myName = "shiva rama raju";

// console.log(myName[0])
// Strings also will store in an array
// length
// includes
// indexOf
// lastIndexOf
// split 
// substring
// contact
// toLowerCase()
// toUpperCase()
// trim
// startsWith
// endsWith
var document1 = "ashish-aadhar.pdf";
console.log(document1);

var splitedDocument = document1.split(".");
console.log(splitedDocument);
// if(splitedDocument[1]=='pdf'|| splitedDocument[1]=='jpeg'){

// }

var lorem = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa cumque
mollitia ad, laborum obcaecati necessitatibus ab sapiente sint
consequatur. Repellendus distinctio aliquid quam libero! Eos, cum illum
perferendis nemo iure sapiente omnis autem exercitationem quae, quaerat
accusamus! Assumenda eos obcaecati deleniti vel dolores tempora natus
earum omnis expedita saepe magnam, quasi dignissimos quae sequi ipsa velit
porro nostrum nesciunt beatae! Placeat cupiditate adipisci consequatur
quidem, delectus ipsa error, asperiores perspiciatis sint debitis
veritatis at quam doloribus. Sed minus velit pariatur voluptate.
Praesentium voluptatum, a sint veniam corporis eveniet vero nam. Hic
aliquam minima non numquam magni asperiores eligendi, aut tempora.`;

console.log(lorem.substring(0, 10));

var firstName = "sHiVa";
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

var email = " example@gmail.com       ";
var email2 = "example@yahoo.com";

var trimedEmail = email.trim();
// trimEnd
// trimStart
if (trimedEmail === email2) {
  console.log(true);
} else {
  console.log(false);
}
var emailValid = email.search("-");
console.log(emailValid);

//
console.log(email2.charAt(7));
var isEmailValid = email2.endsWith("@gmail.com");
console.log(isEmailValid);

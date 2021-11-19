// Array
// Objects
// Loops

// Arrays is collection of data
// Array values are index based
// String : Sequence of characters

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

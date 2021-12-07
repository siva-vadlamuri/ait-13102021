// JavaScript Synchronous Scripting Language
// It can do only one thing at a time
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

console.log("First console");
// Timeout
// It has to execute after some ammount of time
setTimeout(function () {
  console.log("Second console.log");
}, 2000);
console.log("Third Console log");

// first console
// second console.log()
// third

// first console.log
// third console
// second console.log

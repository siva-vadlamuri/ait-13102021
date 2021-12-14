// JavaScript Synchronous Scripting Language
// It can do only one thing at a time
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

const btn = document.getElementById("btn");

const displayTheData = function (data) {
  // Converting JSON data in normal array of Objects
  const responseData = JSON.parse(data);
  // console.log(data);
  for (let i = 0; i < responseData.length; i++) {
    console.log(responseData[i]);
  }
};

btn.addEventListener("click", function () {
  // XmlHTTPRequest
  //
  const xhr = new XMLHttpRequest();
  // open
  // 'GET',url,true
  console.log(xhr.readyState);
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  console.log(xhr.readyState);
  // console.log(xhr.readyState);
  // xhr.onprogress
  xhr.onload = function () {
    // console.log(xhr.readyState);
    // readyState 4 and status code has to be 200 OK
    if (xhr.readyState === 4 && xhr.status === 200) {
      // console.log(xhr.responseText);
      displayTheData(xhr.responseText);
    }
  };
  xhr.send();
});

console.log("First console");
// Timeout
// It has to execute after some ammount of time
setTimeout(function () {
  console.log("Second console.log");
}, 2000);
console.log("Third Console log");

// ready State
// 0 State
// 1 State

// HTTP Methods
// GET --> Get the Data From Server
// PUT --> Updating the Data
// POST --> Sending the Data to server
// DELETE --> Deleting the Data

// CRUD
// C create
// R Read
// U Update
// D Delete

// Status Code
// 100+
// 200+ Success
// 300+ Redirection
// 400+ Client Side Error
// 500+ Internal Server  Error

// first console
// second console.log()
// third

// first console.log
// third console
// second console.log

// Step-1 We Selected The Button using QuerySelector

var registerBtn = document.querySelector(".btn");
// addEventListner (event,function)
// Call back function

var validateTheForm = function (fValue, lValue, eValue, pValue) {
  var firstNameErr = document.querySelector(".firstNameErr");
  var lastNameErr = document.querySelector(".lastNameErr");
  //   SOC Separation Of Concern
  // DRY Dont repeat yourself
  // FirstName if it is less than 4 or it is greater than 8
  if (fValue.length < 4 || fValue.length > 8) {
    firstNameErr.innerText = "First Name Should be minimum 4 characters";
    firstNameErr.style.color = "red";
  }
  if (lValue.length < 4 || lValue.length > 8) {
    lastNameErr.innerText = "Last  Name Should be minimum 4 characters";
    lastNameErr.style.color = "red";
  }
};

// If you passing a function as an argument to another function then its callback function
registerBtn.addEventListener("click", function () {});
registerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  //   console.log(firstName.value, lastName.value);
  //   const userObj = {
  //     fname: firstName.value,
  //     lname: lastName.value,
  //     emailValue: email.value,
  //   };
  //   console.log(userObj);
  validateTheForm(firstName.value, lastName.value, email.value, password.value);
});

function x(cb) {
  console.log("I am ");
  var a = 20;
  if (a == 10) {
    // console.log(cb);
    cb();
  }
}
// You can pass a function as an argument
x(function y() {
  console.log(" I am y");
});

function greeting(name) {
  alert("Welcome" + name);
}
function WelcomeUser(cb) {
  var userName = prompt("Enter Your Name");
  // console.log(userName);
  cb(userName);
}
// If Your Pass the function as argument to another function then it is called a callback function
WelcomeUser(greeting);

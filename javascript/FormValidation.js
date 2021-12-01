var registerBtn = document.querySelector(".btn");
// addEventListner (event,function)
// Call back function

var validateTheForm = function (fValue, lValue, eValue, pValue) {
  var firstNameErr = document.querySelector(".firstNameErr");
  //   SOC Separation Of Concern
  // DRY Dont repeat yourself
  if (fValue.length < 4) {
    firstNameErr.innerText = "First Name Should be minimum 4 characters";
    firstNameErr.style.color = "red";
  }
};

// If you passing a function as an argument to another function then its callback function
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

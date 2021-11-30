var registerBtn = document.querySelector(".btn");
// addEventListner (event,function)
// Call back function
// If you passing a function as an argument to another function then its callback function
registerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  //   console.log(firstName.value, lastName.value);
  const userObj = {
    fname: firstName.value,
    lname: lastName.value,
    emailValue: email.value,
  };
  console.log(userObj);
});

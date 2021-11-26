var listFirst = document.getElementById("list-first");
// As id is unique it will getElementById will return only one Object
console.dir(listFirst);

// Change the text of first list
listFirst.innerText = "First Element";
// listFirst.style.color = "red";
listFirst.className = "first__element";

// As classes can be duplicate getElementsByClassName('') it will array of objects
var paragraphs = document.getElementsByClassName("p-1");
// console.log(paragraphs);
paragraphs[0].style.backgroundColor = "#ff0000";
var pTags = document.getElementsByTagName("p");
//
// querySelector('css selector')
// var thirdList = document.querySelector(".javascript");
// querySelector will return only one object
// thirdList.style.color = "orange";

var thirdLists = document.querySelectorAll(".javascript");
thirdLists[1].style.color = "red";
thirdLists[0].style.color = "red";

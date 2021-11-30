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

const arr = [23, [45, 78, [23, 89, [34, 78, [45, 78, [34, 77]]]]]];
const finalArray = [];
function flatternArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      return flatternArray(arr[i]);
    } else {
      finalArray.push(arr[i]);
    }
  }
}

flatternArray(arr);
console.log(finalArray);

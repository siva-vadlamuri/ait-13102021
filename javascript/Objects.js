var students = ["Ashish", "deepu", "divya", "vardhini", "prasanth"];
console.log(students[1]);
// for (var i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }
// Array Are index based
// Object are key value pair which will give you detailed information
var obj = {
  firstName: "Ashish",
  lastName: "M",
  phoneNumber: 7373773111,
  address: "Hyderbad",
};
// Object are Keys based
// Retriving A value
console.log(obj.address);

// .className{
//     // key : value
//     background-color:'#1a1a1a'
// }

// Array Of Objects
var studentsData = [
  {
    firstName: "Ashish",
    lastName: "M",
    phoneNumber: 7373773111,
    address: "Hyderbad",
  },
  {
    firstName: "deepu",
    lastName: "M",
    phoneNumber: 7373773111,
    address: "Chittor",
  },
  {
    firstName: "divya",
    lastName: "K",
    phoneNumber: 7373773111,
    address: "Bihar",
  },
  {
    firstName: "vardhini",
    lastName: "L",
    phoneNumber: 7373773111,
    address: "Andhra Pradesh",
  },
  {
    firstName: "prasanth",
    lastName: "M",
    phoneNumber: 7373773111,
    address: "Bihar",
  },
];

// http://facebook.com/user/1234
// {
//     firstName: "prasanth",
//     lastName: "M",
//     phoneNumber: 7373773111,
//     address: "Bihar",
//   },

for (var i = 0; i < studentsData.length; i++) {
  console.log(studentsData[i].address);
  //   if (studentsData[i].firstName == "prasanth") {
  //     console.log(studentsData[i]);
  //   }
}

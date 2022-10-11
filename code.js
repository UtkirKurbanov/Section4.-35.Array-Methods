var str = "1,2,3,4,5,6,7,8";

var array = str.split(",");

// console.log(array.join("; "));
// console.log(array.reverse()); //['8', '7', '6', '5', '4', '3', '2', '1']

// array.splice(0, 1); // delete from array

// array.splice(0, 1, "11"); // delete from array 1 and add 11 instead

array.splice(1, 0, "11", "33"); // no delete from array nothing, add 11

var newArray = array.concat([1, 2]);

// console.log(array);

// console.log(newArray);

var objArr = [
  { name: "Nick", age: 27 },
  { name: "Eva", age: 18 },
  { name: "Victor", age: 23 },
];

// console.log(objArr);
var foundPerson = objArr.find(function (person) {
  //   console.log(person);
  return person.age == 23;
});

// console.log(foundPerson);

var oddArray = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function (i) {
  return i % 2 !== 0;
});

var evenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function (i) {
  return i % 2 === 0;
});

// console.log(oddArray);
// console.log(evenArray);

var numArray = array.map(function (i) {
  //   return parseInt(i);
  return i * 2;
});
console.log(array);
console.log(numArray);

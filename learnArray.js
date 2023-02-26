// Array
// const person = ["Rohan", "Mohan", "sohan"]

//Q1)create an empty array and provide them some values
const birds = [];
birds[1] = "crow";
birds[0] = "peacock";
birds[2] = "pigeon";
// console.log(birds);

//Q2)create an array and assign some value but dont use []
const birds1 = new Array();  
birds1[0] = "crow";
birds1[1] = "peacock";
birds1[2] = "pigeon";
// console.log(birds1);

// [] is same as new Array()
const birds2 = ["crow", "peacock", "pigeon"];
const birds3 = new Array("crow", "peacock", "pigeon");

//Q3) read the value of array
const animal = ["cow", "horse", "lion", "tiger"];
// console.log(animal[2]);

//Q4) create an array and update one of the index value
const animal2 = ["cow", "horse", "lion", "tiger"];
animal2[2] = "dear";
// console.log(animal2[2]);
// console.log(animal2);

//Q5) create an array and display its total number of elements
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.length);

// Accessing the Last Array Element of given array
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const lastIndex = fruits2.length - 1;
// const lastIndex = fruits2.length - 3;
// console.log(fruits2[lastIndex]);

//Q)create an array and assign values using push method
const place = ["jsr", "ranchi", "bokaro", "dhanbad"];
place.push("ckp","jaipur");
place.push({place: "kolkata", pinc:67588, famous:"sweets"});
// console.log(place);

// using delete() keyword in array
const insects = ['mosquito', 'spider', 'lizard', 'frog'];
delete insects[2];
console.log(insects);
// dont recommended method becouse it creates holes i.e undefined
// push method---push method adds the value at last index of an array
//Q)create an array and assign values using push method
const place = ["jsr", "ranchi", "bokaro", "dhanbad"];
place.push("ckp","jaipur");
place.push({place: "kolkata", pinc:67588, famous:"sweets"});
// console.log(place);

//pop method-->pop() method removes the last element from an array
const fruits = ['apple', 'banana', 'orange', 'grapes'];
const removedVal = fruits.pop();
// console.log(removedVal);
// console.log(fruits);

//shift-->shift() methods removes the first element of an array.
const veg = ['potato', 'brinjal', 'cabbage', 'carrot'];
const removedVeg = veg.shift();
// console.log(removedVeg);
// console.log(veg);

//unshift--->unshift() methods add a new element at the beggining of an array
const veg1 = ['potato', 'brinjal', 'cabbage', 'carrot'];
const addVeg = veg1.unshift("tomato");
// console.log(addVeg);
// console.log(veg1);

// The concat() method creates a new array by merging (concatenating) existing arrays:
// The concat() method does not change the existing arrays. It always returns a new array.
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);

// Example (Merging Three Arrays)
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren =arr1.concat(arr2,arr3);
// console.log(myChildren);

//sort() method--> arrange an array into alphabetically.
const fruits11 = ["Banana", "Orange", "Apple", "Mango"];
fruits11.sort();
// console.log(fruits11);

//indexOf()---> The indexOf() method searches an array for
// an element value and returns its position.
 
const movies = ['ddlj', 'pk', 'hddcs','hahk'];
const position = movies.indexOf('hddcs');
console.log(position);

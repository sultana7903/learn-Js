//syntax of for loop
const arr = [12, 23, 44, "harsh"];
//let index = 0  ---> considering index first value is 0
//index < array.length ---> checking, Is index value less than length of an array?
//index++  ---> its increasing the value by +1 after printing one element.
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(element);
    
}
//OR 
let index;
let element;

for (index = 0; index < arr.length; index++) {
    element = arr[index];
    // console.log(element);  
}

//Q1) print an array which contain  1 to 10 number using for loop
let numList = [];
for (let index = 0; index < 10; index++) {
    numList.push(1 + index);
}
// console.log(numList);

//Q2) print a new array which contains only first four number using for loop
let newArray = [];

for (let index = 0; index < 4; index++) {
   newArray.push(1 + index);
} 
// console.log(newArray);

//Q3) print an array which contains three objects using for loop

//4) check how much number elements are even using for loop of the given array
let numb = [3, 4, 5, 14, 16, 17, 15, 21, 8, 9, 10];
let totalEven = [];
for (let index = 0; index < numb.length; index++) {
    let test = numb[index]
    if (test % 2 == 0) {
       totalEven.push(test);
    }
    
}
// console.log(totalEven.length);

//Q) return an array with even number only, using for loop from 1 to 10
let numb1  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newNumb = [];
for (let index = 0; index < numb1.length; index++) {
    let even = numb1[index];
    if (even % 2 == 0) {
        newNumb.push(even);
    }
    
}
// console.log(newNumb);

//Q) print odd number in a new array using for loop
let renNum = [3,67,3,6,8,17,36,33,12,18,23,89,91];
let oddArr = [];
for(let i = 0; i < renNum.length; i++){
   let odd =  renNum[i];
   if(odd % 2 !== 0){
    oddArr.push(odd);
   }
}
// console.log(oddArr);

//Q)printing  1 to 9 number by simple for loop
for(let i=0; i<=9; i++){
//     console.log(i);
}

//Q) print fruits to uppercase in new arr by using for loop 
let fruits = ["apple", "mango", "banana", "grapes",]

let fruits2 = [];    
for (let index = 0; index < fruits.length; index++) {
    const newFru = fruits[index];
    fruits2.push(newFru.toUpperCase())
}
// console.log(fruits2);

// print prime number between 1 to 20 in a array using for loop
// let newArray2 = [];
// for (let num = 2; num <= 20; num++) {
//     let isPrime = true;

//     for (let i = 2; i <= num-1; i++) {
//         if (num % i === 0) {
//             isPrime =false;
//             break
//         }
//        if (isPrime) {
//         // console.log(num)
//        }
//     }
    
// } 


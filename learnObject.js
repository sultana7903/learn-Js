//1) create an empty object and assign three key value pairs

const person = {};        //OR const person = new Object();
person.name = "sultana";
person.age = 40;
person.gender ="female";
 
// console.log(person);
// console.log(person.name) OR console.log(person["name"])

// 2) Update the value of key rank and class from 
// an object{name:"Ramesh", class:5, rank:"three"} 

const obj = {
    name:"Ramesh",
    class: 5,
    rank : "three"
}
obj.rank = "four";
obj.class = 6;
obj.roll = 34;

// console.log(obj);

//3) create an object and assign it from one variable to another variable
// and another variable to again another varibale and so on.

const obj1 = {
    firstName : "John Doe",
    lastName : "kumar",
    age: 34,
}
const obj2 = obj1;
const obj3 = obj2;
obj3.age = 30;    //updating new value will update all chaining obj.

// console.log(obj3);
// console.log(obj1);

//4) create an object and delete its two properties
const animal = {
    name: "horse",
    gender : "male",
    color : "white",
    heigth : "5ft",
}

delete animal.heigth;
delete animal.color;
// delete animal["color"];

// console.log(animal);

//5) create a nested object and perform its crud operation.
const exmp1 = {
    country: "india",
    flag: "tricolor",
    religion: {
     muslim : "Islam",
     hindu : "sanatan",
    },
    language : {
        muslim: "urdu",
        hindu : "hindi",
        bangoli : "bangoli",
        tamil: "kennad",
    }
}
// console.log(exmp1.religion.muslim);
exmp1.language.hindu = "sanskrit";
delete exmp1.language.tamil;

// console.log(exmp1);


//6) nested object with array
const exmp2 = {
    name : "Amir khan",
    occupation: "actor",
    movie : ["pk", "3 idiots", "lagan", "sarfarosh"] ,
    songs : [
        {movie:"3 idiots", song:"all is well", singer: "unknown"},
        {movie:"pk", song:"bhagwan hai kaha h tu", singer: "sonu nigam"},
        {movie:"sarfarosh", song:"hosh walon ko khabar kya", singer: "jagjeet singh"},

    ]
}
// console.log(exmp2.movie[2]);
// console.log(exmp2.songs[0]);
// console.log(exmp2.songs[0].movie);
 
exmp2.songs[1].song = "love is waste of time";
delete exmp2.songs[1].singer;
// console.log(exmp2);

//7) from the above nested object iterate movie name from its songs array
// and return as a new object.
const newObj = {};
newObj.movie1 = exmp2.songs[0].movie;
newObj.movie2 = exmp2.songs[1].movie;
newObj.movie3 = exmp2.songs[2].movie;
 
// console.log(newObj.movie1);

// hmlog new variable bna kar bhi value store kr sakte hain aur uske value ko
// newobj.movie1 me assign karke get kar skte hain.
const result = exmp2.songs[0].movie; 
newObj.movie1 = result;
// console.log(result);

// ques on delete keyword
const func = (function (a){
    delete a;
    return a;
})(5);
// console.log(func);    //5
//in that case a is local variable and delete keyword is only used 
//when you want to delete properties from an object and not a local variable.
// so it not affect a local variable.

// what's the o/p of following
const a = {};
const b = {key :  "b"};
const c = {key : "c"};
 
a[b] = 123;
a[c] = 456;
// console.log(a[b]);

// Q) create an Object and convert it to an array
const sub = {
    math : 1233,
    physics : "newton",
    chem : "H2o",
}

const response = Object.values(sub);
// console.log(response);

const res = Object.values(exmp1);
// console.log(res);

//q)create an object and convert it to string
const person11 = {
    name: "john doe",
    age : 40,
    gender: "male",
}
const newPerson11 = JSON.stringify(person11.age);
// console.log(typeof (newPerson11));

//Q) create an obejct with current date 
// new keyword converts all in Object
const var1 =  Date();
// console.log(typeof (var1));
// console.log(var1);

const var2 = new Date();
// console.log(typeof (var2));
// console.log(var2);

const release = {
    movie : "ddlj",
    song : "lalalala",
    date: new Date(),

}
// console.log(release.date);

//Q) convert an object key which have function value to string
const person3 = {
    name: "John",
    age: function () {return 30}
  };

//const newAge = JSON.stringify(person3.age);  //undefined
  const newAge = person3.age.toString();
  console.log(newAge);


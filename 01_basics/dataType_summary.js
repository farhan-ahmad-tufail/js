//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
//Null ka typeof karne par object aayega

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)-------------------------------->

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


//sare non - premitive datatypes ka type of karne par function aata hain and function ka object function hota hai
//Null ka typeof karne par object aayega , baki sab premitive ka almost same


// https://262.ecma-international.org/5.1/#sec-11.4.3




//**************************************Stack and Heap *******************************************


//stack memory (Premitive DatavTypes) =>copy hoga
//Heap memory (Non - Premitive Data Types)

let myName = "Farhan"
let anotherName = myName
anotherName = "Farhan Ahmad Tufail"

console.log(myName);
console.log(anotherName);



//heap memory => reference hoga 
let userOne = {
    email : "userOne@google.com",
    upi : "user1@ibl"
}

let userTwo =userOne

userTwo.email = "farhan@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

//here , in heap memory both user email is Changed 
//as ther are referencing to the same memory
// array

//1st way to write arrays
const myArr = [0, 1, 2, 3, 4, 5]

const myHeors = ["shaktiman", "naagraj"]

//2nd way to write arrays
const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)     //not good as very big time complexity, we ahve to shift the n number of elements
// myArr.shift()

// console.log(myArr.includes(9));      //it will give boolean ,whether the elements is present or not
// console.log(myArr.indexOf(3));



// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr); //type is string




//*******************************slice, splice************************************

console.log("A ", myArr);

//3rd index will not be considered [1,2] is output
const myn1 = myArr.slice(1, 3)

console.log(myn1); //NO CHANGE IN ARRAY AFTER SLICE 
console.log("B ", myArr);

// CHANGE IN ARRAY AFTER splice 
const myn2 = myArr.splice(1, 3) //also it will consider the last element
console.log("C ", myArr);
console.log(myn2);
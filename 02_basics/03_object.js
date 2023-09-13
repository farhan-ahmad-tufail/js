// singleton below one only
// Object.create



// object literals hota hai yeh sab na ki singleton
const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)  // isse bhi call kiya jaa sakta hai
// console.log(JsUser["email"])  //but yeh aur better hai q ki 
// console.log(JsUser["full name"])  //but yeh aur better hai q ki string koo call kiya jaa sakta hai
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  //Now, we cannot change this after freeze
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
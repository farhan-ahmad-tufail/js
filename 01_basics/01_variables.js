const accountId = 12434   

//variable declarations are of two types
let accountEmail ="contact.farhanahmad@gmail.com"
//use let always for variable declaration

var accountPassword ="123214"
accountCity ="Jaipur" //not good way to define variables
let accountState

//accountId = 2 // Not allowed as it is constant

accountEmail ="farhan@f.com"
accountPassword ="432324"
accountCity = "Delhi"

console.log(accountId);

/*

Prefer not to use var because of issues in block scope and functional scope

*/

console.table([accountId,accountEmail, accountPassword, accountCity,accountState]);
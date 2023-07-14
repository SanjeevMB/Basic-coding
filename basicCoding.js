/* ===== Variables ===== */


/*

    1- Variables are named momory location.
    2- Variables are used to store data or values in a programming language.
    3- Variables value can be changed or modified later.
    4- Variables can be declare by using keywords (var, var, const).
    5- Variables can be declare and initilized at same time.
    6- JavaScript is dynamically typed language, so no need to define datatype.

*/


// By using var keyword we can a declare a variable again and again. It can cause problem, so avoid `var` keyword to declare variable.

var myName = `Sanjeev`;
var myName = `Kumar`;

let myAge = 29;
let myVillage = `Raurachawar`;

const pi = 3.14;
const countryName = `India`;

// Variable swaping

let ramAge = 40;
let shyamAge = 45;

console.log(ramAge, shyamAge); // output : [40, 45]

[ramAge, shyamAge] = [shyamAge, ramAge];

console.log(ramAge, shyamAge); // output : [45, 40]
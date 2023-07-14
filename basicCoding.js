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





/* ===== Conditional statememts ===== */


/*

    1- Conditional statements allow our codeblock to make decision.
    2- We can write multiple conditions by using multiple if else blocks.
    
*/


// if-else conditionals are used to check multiple conditions, where we have to check conditions in a range

if (`condition`) {

    `Above codeblock controll and execute based on the above condition`;

} else {

    `else block cann't be controlled if above condition is false then this block execute without any condition`;

}

// Switch case also can check multiple conditions, where we have to check conditions for equality

let day = `monday`;

switch (day) {

    case `monday`:
        console.log(1);
        break;

    case `tuesday`:
        console.log(2);
        break;

    case `wednesday`:
        console.log(3);
        break;

    case `thursday`:
        console.log(4);
        break;

    case `friday`:
        console.log(5);
        break;

    case `saturday`:
        console.log(6);
        break;

    case `sunday`:
        console.log(7);

}

// Ternary operator is sort form of if else, used where we have to check a single condition.

let marks = 50;

let status = marks <= 33 ? console.log(`Fail`) : console.log(`Pass`);
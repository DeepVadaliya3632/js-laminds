// function
// what --> function is a block of code that performs a specific task.
// why --> and reusable. to avoid code repetition and to make code modular
// how --> function keyword, name, parameters, body, return statement


// type of functions:
// // function name (params) {} --> function declaration
// function abc() { }
// // let fnc = function (){} --> function expression
// let fnc = function () { }
// // let fnc = () => {} --> arrow function --> fat arrow function
// let fnc1 = () => { }

// let products = [];

// function with  multiple parameters
// function cart(Item, itemValue) {
//     products.push({
//         product: Item,
//         price: itemValue
//     })
// }

// arrow fucntion
// let fnc = () => {}
// const cart = (Item, itemValue) => {
//     products.push({
//         product: Item,
//         price: itemValue
//     })
// }

// Fucntion expression
// let fnc = function(){}
// const cart = function(Item, itemValue) {
//     products.push({
//         product: Item,
//         price: itemValue
//     })
// }

// cart("laptop", 14000)
// cart("tv", 50000)
// cart("Fridge", 30000)
// console.log(products)

// default parameters
// function num(a= 10, b =20) {
//     console.log(a, b)
// }
// num()

// rest parameters
// function def(a,b,c,...args){ // ... is used when you want to pass multiple arguments
//     console.log(a,b,c,args)
//     console.log(args.slice(4,6))
// }
// def(1,2,3,4,5,6,778,24, "erhh", null, true)

// arr = [2,345,3,,34,3,4,34,2,42,4,2,42]
// console.log(arr.slice(4,7))

// early return --> function mathi jaldi bahar nikalva mate
// function getValue1 (value) {
// if (value < 25) return "Value is less than 25";
// else if (value < 50) return "Value is less than 50";
// else if (value < 75) return "Value is less than 75";
// return "Value is 100 or more";
// }
// let result = getValue1(80);
// console.log(result);



// first Class Function and their types:
// function can be treated as variables
// let temp_a = function(){} -first class function
// const cart5 = function (product, price) {
//     console.log(`Adding ${product} at ${price}`);
// };
// cart5("function expression S25 ultra", 69000);
// // function can be passed as arguments to other functions
// function temp_b(fnc) {
//     fnc();
// }
// temp_b(function fnc2() {
//     console.log("First Class Function");
// });

// function can be returned from other functions
// function abcd() {
//     return function () {
//         console.log("function return other function")
//     };
// }
// // abcd();
// abcd()(); // call a function that retrun other function

// higher order function (HOF)
// function that takes another function as an argument or returns a function as a result (eva function je return kare ek function athava acpect kare ek function params-ma)

// function abcd (val){val();} --> abcd (function(){console.log ("hello")})
// function abcd(val){} > higher order function
// function abcd() { return function(){} } abcd()() order higher

// function greet(fn) { // this HOF
//     fn();
// }

// greet(function () {
//     console.log("Hello World");
// });

// let arr = [10, 20, 30];

// arr.forEach(function (num) { // foreeach is HOF
//     console.log(num);
// });

// pure vs impure function
// pure function -> function je same input par same output aapse ane koi bahar na state ne modify na kare (pure function --> je function bahar na state ne modify na kare )
// let a = 10;
// function abcd_pure() {
//     console.log("Hello");
// }

// // impure function --> function je same input par different output aapse athava bahar na state ne modify kare (impure function -> je function bahar na state ne modify kare )
// function abcd_impure() {
//     a++;
//     console.log(a);
// }

// closure function
// function je potana parent function na variables ne access kari shake (return thava valo function use karshe parent function na koi variable) (function within function)
// function outer() {
//     let count = 0;
//     function inner() {
//         count++; // accessing outer (parent) function variable
//         console.log(count);
//     }
//     return inner;
// }
// let fnc = outer();
// fnc();
//lexical scope nested function can access variables declared in their outer scope

// function outer1() {
//     let outer_var = "outer function variable";
//     function inner1() {
//         let inner_var = "inner function variable";
//         console.log(outer_var); // outer1 function variable write in console log
//         function most_inner() {
//             console.log(inner_var);
//             console.log(outer_var);
//             let most_inner_var = "most inner function variable";
//             function abc() {
//                 console.log(most_inner_var);
//                 console.log(inner_var);
//                 console.log(outer_var);
//             }
//             abc();
//         }
//         most_inner();
//     }
//     inner1();
// }
// outer1();

// IIFE Immediately Invoked Function Expression
// (function () { })(); // function je declare karta j call thai jaye

// (function () {
//     console.log("This is IIFE Funcation")
// }())
// // Hoisting in function
// abcde();
// function abcde() {
//     console.log("This is hoisting function");
// }

// // hoisted Function1();
// let hoistedFunction1 = function () {
//     console.log("Hoisted Function Expression called");
// }

// // hoisted Function2();
// let hoistedFunction2 = () => {
//     console.log("Hoisted Arrow Function called");
// }

// Example 1:
// Function declaration is fully hoisted (can be called before definition)
// Function expression is not hoisted with its value (only variable hoisted)


// Example 2:
// Answer: No Error
// Why: Function declaration is hoisted
// greet();
// function greet(){
//     console.log("Hello!");
// }


// // Example 3:
// // Arrow Function version
// const add = (a, b) => a + b;


// // Example 4:
// // Parameter: name
// // Argument: "user"
// function welcome(name){
//     console.log("Welcome " + name);
// }
// welcome("user");


// // Example 5:
// // Parameters: 3 (a, b, c)
// // Arguments: 2 (1, 2)
// // No Error, c becomes undefined
// function temp(a, b, c){
//     console.log(a, b, c);
// }
// temp(1, 2);


// // Example 6:
// // Output: Hello Guest
// // No Error because default parameter is used
// function temp_user(name = "Guest"){
//     console.log("Hello " + name);
// }
// temp_user();


// // Example 7:
// // ... is rest operator
// // It collects multiple arguments into an array
// function number(...numbers){
//     console.log(numbers);
// }
// number(1, 2, 3, 4, 5);


// // Example 8:
// // First function has Error because loop condition is wrong (<=)
// // Second function is correct
// function calculateTotal(...scores){
//     let total = 0;
//     scores.forEach(function(val){
//         total += val;
//     });
//     return total;
// }
// let sumtotal = calculateTotal(10, 20, 30, 40, 50);
// console.log(sumtotal);


// // Example 9:
// // Fixed using early return
// function checkAge(age){
//     if(age < 18){
//         return "Too Young";
//     }
//     return "Access Granted";
// }


// // Example 10:
// // Return value is undefined
// function f(){
//     return;
// }

// [1, 2, 3].map(function (x){
//     return x * 2; 
// )

// Example 11:
// Functions are first-class citizens means functions can be
// stored in variables, passed as arguments, returned from functions
// Why: JS treats functions like normal values


// Example 12:
// Yes, function can be assigned to a variable and called
let a = function(){
    console.log("Hello");
};
a(); // Output: Hello


// Example 13:
// Function passed as argument and executed
// Why: Functions are first-class citizens
function abcd(val){
    val();
}
abcd(function(){
    console.log("Hello");
});


// Example 14:
// Higher Order Function:
// A function that takes another function as argument
// OR returns a function
// Why: Enables abstraction and reusable logic


// Example 15:
// map() is Higher Order Function
// Why: map accepts a function as argument
[1, 2, 3].map(function(x){
    return x * 2;
});


// Example 16:
// Impure function
// Why: It modifies external variable (side effect)
let total = 5;
function num(n){
    total += n;
}
num(3);


// Example 17:
// Pure function version
// Why: No external dependency, returns new value
function numPure(total, n){
    return total + n;
}
numPure(5, 3);


// Example 18:
// Closure:
// When inner function remembers variables of outer function
// Created when a function is returned
function outer(){
    let x = 10;
    return function(){
        console.log(x);
    };
}


// Example 19:
// Output:
// 1
// 2
// No Error
// Why: Closure preserves count value
function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();


// Example 20:
// IIFE version
// Why: Executes immediately
(function init(){
    console.log("Initialized");
})();


// Example 21:
// Use of IIFE:
// To create private variables (data hiding)
// Real-world use: Module pattern
let fun = (function(){
    let score = 0;
    return {
        getScore: function(){
            console.log(score);
        },
        setScore: function(val){
            score = val;
        }
    };
})();


// Example 22:
// Output: TypeError
// Why: var is hoisted but function value is undefined
temp_var();
var temp_var = function(){
    console.log("Hello");
};


// Example 23:
// Output: Hello
// Why: Function declaration is fully hoisted
temp_var();
function temp_var(){
    console.log("Hello");
}


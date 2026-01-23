// function
// what --> function is a block of code that performs a specific task.
// why --> and reusable. to avoid code repetition and to make code modular
// how --> function keyword, name, parameters, body, return statement


// type of functions:
// function name (params) {} --> function declaration
function abc() { }
// let fnc = function (){} --> function expression
let fnc = function () { }
// let fnc = () => {} --> arrow function --> fat arrow function
let fnc1 = () => { }

let products = [];

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
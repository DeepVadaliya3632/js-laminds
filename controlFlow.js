// // Control Flow Statements in JavaScript
// // If-Else Statement (if, if else, if else-if else)
// // if (condition) {})
// if (12 < 13) {
// console.log(true);
// }
// if (15 < 13) {
// console.log(false);
// } // condition is false that why if statement not run

// if (112) {
// console.log("number");
// }

// // if-else Statement
// if (12 < 13) {
// console.log(true);
// } else {
// console.log(false);
// }

// let a = 10; let b = 220; let c = 30

// if (a > b) {
//     if (a > c) {
//         console.log("a is bigger")
//     }
//     else {
//         console.log("c is bigger")
//     }
// } else {
//     if (b > c) {
//         console.log("b is bigger")
//     }
//     else {
//         console.log("c is bigger")
//     }
// }

// // switch case
// let day = prompt("enter day number (0 - 6): ")
// let numday = Number(day)

// switch (numday) {
//     case 0:
//         console.log("sunday")
//         break
//     case 1:
//         console.log("monday")
//         break
//     case 2:
//         console.log("tuesday")
//         break
//     case 3:
//         console.log("wednesday")
//         break
//     case 4:
//         console.log("thursday")
//         break
//     case 5:
//         console.log("friday")
//         break
//     case 6:
//         console.log("saturday")
//         break
//     default:
//         console.log("invalid day")
//         break
// }

// Early Return Pattern
// function score(value) {
//     if (value > 90) {
//         return "Value is more than 90";
//     } else if (value < 80) {
//         return "Value is less than 80";
//     } else if (value < 70) {
//         return "Value is less than 70";
//     } else if (value < 60) {
//         return "Value is less than 60";
//     } else {
//         return "Value is less than 60";
//     }
// }

// function score1(value) {
//     if (value < 60) return "Value is less than 60";
//     else if (value < 70) return "Value is less than 70";
//     else if (value < 80) return "Value is less than 80";
//     else if (value < 90) return "Value is less than 90";
//     else return "Value is more than 90"; I
// }
// score1(Number(100))

// // Example: 1
// let x = 2;
// switch(x){
//     case 2: 
//     console.log("two")
//     break
//     case 3: 
//     console.log("three")
//     break
// }
// // answer: two

// Example: 3
// function rockPaperScisssor(player1, player2) {
//     if(player1 === player2){
//         console.log("tie")
//     }else if (player1 === "rock" && player2 === "scissors" || player1 === "scissors" && player2 === "paper" || player1 === "paper" && player2 === "rock") {
//         console.log("player1 won")
//     }else{
//         console.log("player2 won")
//     }
// }
// let player1 = prompt("Enter player1 (rock/paper/scissors):").toLowerCase();
// let player2 = prompt("Enter player2 (rock/paper/scissors):").toLowerCase();
// console.log(rockPaperScisssor(player1, player2));
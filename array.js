// Array -Hold multiple values at same time
// [1, 2, 3, 4, 5]
// ["Hello", "a", "B", "C"]
// [2, "Bye", "Hello", 50]
// create
// define a variable= [multiple values]
// let arr = [1, 2, 3, 4];
// console.log(arr)
// access
// position = [0123]
// access
// array_name [position
// arr[3], arr[2], arr[10]
// console.log(arr[3])

// arr[0] = 10; arr[1] = 20; arr[2] = 30; arr[3] = 40;

// arr.push(50) // pushes at last position
// arr.pop() // delete element from last position

// let weapons = ["AK47", "M416", "deagle", "AWM", "Kar98", "nukes"]
// weapons.push("Grenade")

// weapons.pop()

// weapons.shift() // remove first item

// weapons.unshift("AK47") // add element at first position

// weapons.splice(3,2, "OPerator") // remove specific element by index and how many after that

let valorantWeapons = ["Classic", "Ghost", "Shorty", "Bandit", "Frenzy", "Sherrif", "Stinger", "Spectre", "Bucky", "Judge", "Bulldog", "Guardian", "Phantom", "Vandal", "Marshal", "Outlaw", "Operator", "Ares", "Odin"]

// let pistols = valorantWeapons.slice(0,6)
// let SMGs = valorantWeapons.slice(6,8)
// let shortguns = valorantWeapons.slice(8,10)
// let semiRifles = valorantWeapons.slice(10,12)
// let rifles = valorantWeapons.slice(12,14)
// let snipers = valorantWeapons.slice(14,17)
// let machineguns = valorantWeapons.slice(17, )

// let sort = valorantWeapons.sort()

// let revSort = valorantWeapons.sort().reverse()

// let random = Math.floor(Math.random() * (19 - 0));
// console.log(valorantWeapons[random])









// console.log(arr)
// console.log("Weapons: ", weapons)
// console.log("Sidearms: ", pistols)
// console.log("SMGs: ", SMGs)
// console.log("shortguns: ", shortguns)
// console.log("semiRifles: ", semiRifles)
// console.log("rifles: ", rifles)
// console.log("snipers: ", snipers)
// console.log("machineguns: ", machineguns)

// console.log(revSort)


// // example 1:
// // let tasks = ['Wake up', 'Brush teeth'];
// // tasks.push("but Milk")

// // example 2:
// let notifications = ['Email', 'Message', 'Reminder'];
// notifications.pop()

// //example 3 :
// let customers = ['Customer1', 'Customer2', 'Customer3'];
// customers.shift()

// // ex 4:
// let playlist = ['Song B', 'Song C'];
// playlist.unshift("Song A")

// // ex 5: 
// let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
// students.splice(1,1, "Jhon", "Sara")
// // console.log(students)

// // ex 6
// let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
//  
// // ex 7
// let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// weekendDays = days.slice(5,)

// // ex 8
// let levels = ['Easy', 'Medium', 'Hard'];
// levels.sort().reverse()

// //ex 9
// let scores = [45, 12, 78, 34, 89];
// scores.sort()

// //ex 10
// let prices = [199, 49, 999, 299, 149];
// prices.sort()

// // ex 11
// let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
// let newProducts = products.slice(0,3)

// //ex 12
// let colors = ['Red', 'Green', 'Blue', 'Yellow'];
// colors.splice(3,1,"Purple", "orange")

// // ex 13
// let steps = ['Step 1', 'Step 2', 'Step 3'];
// steps.sort().reverse().push("Final Step")
// // console.log(steps)

// // ex 14
// let names = ['alice', 'Bob', 'charlie', 'David', "Asda"];
// names.sort((a,b)=>{
//     return a.toLowerCase().localeCompare(b.toLowerCase())
// })
// console.log(names)

// let arr = ['10', '2', '5', '30', '20']; // sort() cant sort numberically
// arr.sort((a, b) => a - b)
// console.log(arr)

// let arr2 = [b, f, a, r, w, c, h, i]
// arr2.sort()
// console.log(arr2)

let i = [10, 54, 2, 5, 45, 23, 345, 23];

let newI = []
// i.forEach(e => {
//     newI.push(e + 10);
// })
// console.log(newI)

// i.map(e => {
//     newI.push(e+10)
// })
// console.log(newI)

// let pistols = valorantWeapons.filter(e => {
//     if(["Classic", "Ghost", "Shorty", "Bandit", "Frenzy", "Sherrif"].includes(e)){
//         return e
//     }
// })
// console.log(pistols)

// // ex 1:
// const steps = [1000, 2000, 4000];
// steps.map((e, i) => {
//     steps[i] *= 2;
// })
// console.log(steps)

// //ex 2
// const minutes = [1, 5, 10];
// minutes.map((e, i) => {
//     minutes[i] *= 60;
// })
// console.log(minutes)

// //ex 3
// const prices = [200, 350, 500];
// prices.map((e, i) => {
//     prices[i] += 50;
// })
// console.log(prices)

// // ex 4
// const marks = [35, 72, 88, 40];
// marks.map((e, i) => {
//     marks[i] = e >= 40 ? `${e} : pass` : `${e} : fail`;
// })
// console.log(marks)

// // ex 5
// const names = ['rahul', 'neha', 'amit'];
// names.map((e, i) => {
//     names[i] = e.toUpperCase();
// })
// console.log(names)

// // ex 6
// const prices1 = [500, 1000, 1500];
// prices1.map((e, i) => {
//     prices1[i] = e - (e * 0.10)
// })
// console.log(prices1)

// // ex 7
// const scores = [45, 60, 85];
// scores.map((e, i) => {
//     if (e >= 80) { scores[i] += 20; }
//     else if (e >= 50) { scores[i] += 10; }
// })
// console.log(scores)

// // ex 8
// const celsius = [0, 20, 30];
// let fehrenheit = celsius.map(e => ((e * 9 / 5) + 32))
// console.log(fehrenheit)

// // ex 9
// const numbers = [1, 2, 3, 4];
// let table = numbers.map((e, i) => (`${e} * ${i} = ${e * i}`))
// console.log(table)

// // reduce
// // reduce tyare j use karvu ke jare ek single value
// // calculate karvi hoy from array
// let total_price = [15, 68, 45, 58, 52, 48];
// let final_price = total_price.reduce((accumulator, val) => {
//     return accumulator + val;
// }, 0); // intial value of accumulator
// console.log(final_price)
// // 0+ 10 => 10
// // 10 + 10 =>20
// // // 20 + 10 =>30
// // // 30 + 10 =>40
// // // accumulator -->
// // je value function ma retun thase
// // te accumulator ma store thase --> accumulator name
// // change kari sako cho
// // // val --> array ni darek value

// find
// find tyare j use karvu ke jare array mathi ek value find karvi hoy based on condition
// find() return kare chhe array no element callback no return value nahi
// never returns what you return inside it
// returns the array element itself not return array
//.find() stops at the first match
// It does not continue looping
let product = ["Laptop", "Mobile", "Tablet", "Desktop", "Smart Watch"];
let find_product = product.find(e => {
    if (e === "Tablet") {
        return e
    } else if (e === "Desktop") {
        return e
    } else {
        return false
    }
})
// console.log(find_product)

// USE CASE -- data ma thi ek value find karvi hoy // use case based on condition
// ex. producat ma thi specifice producat find karvo hoy based on name
// find vs filter
// Real-life Scenario: Shopping Mall Security
// your are a security guard at a shopping mall
// chack the list of visitors
let people = ["John", "Sara", "Mike", "Anna", "David", "Sara"];
// find --> you are looking for the first person named "Sara" in the list and stop searching

let sara = people.find(e => e === "Sara") || "not found"
// console.log(sara)

// finding all sara from the list

let allSara = people.filter(e => e === "Sara")
// console.log(allSara)


// some
// check kare chhe ke array ma koi pan ek item codition satisfy kare chhe ke nahi
// condition true aave tyare stop kare
// some() vs find() -> some() can't return you value its return true or false, find() return value of array
// give ans in true and false
let marks1 = [10, 20, 35, 90];
let any = marks1.some((val) => {
    if (val > 85) return true;
    // if (val < 85) retur "need improvement";
});
// console.log(any)
// use case -- check if some product are out of stock in your cart

//every
// check kare chhe ke array ma baddha j items condition satisfy kare chhe ke nahi
// true baha items condition match kare
// false -- ek pan fail thay to
let def = [20, 30, 90, 45];
let num = def.every(function (val) {
    return val < 40;
})
// console.log(num)
// use case --> check all student is pass or not
// some), find(), filter(), every()
let products = ["Tablet", "Mobile", "Laptop", "Mobile"]
let con = products.filter(e => e === "Mobile")
// console.log(con)
// method --> condition --> output
// .some() -> item === "Mobile" --> true
//.find() --> item === "Mobile" -> "Mobile"
//.filter() --> item == "Mobile" --> ["Mobile", "Mobile"]

// let obj = [
//     {
//         id : 1,
//         name : "Deep",
//         age : "19"
//     },
//     {
//         id : 2,
//         name : "Het",
//         age : "23"
//     },
// ]

// let obj1 = obj.filter(e => e.id === 2)
// console.log(obj1)
// console.log(obj1[0].name)

let arr4 = [1, 2, 3, 4, 5];
let [j, , k] = arr4;
// console.log(k)

let user_data = ["deep", "deep@gmail.com", "male", "Surat"]
let [name1, email, gender, city] = user_data
// console.log({name1}, {email}, {gender}, {city})

// spread oprator -- copy value from main array
let arr8 = [1, 2, 3, 4, 5, 6, 7];
// let arr4 = arr3; //
// just give reference not copy value (when you change into arr4 that will be change arr3 too)
let arr9 = [...arr8];
// ... --> rest --> 1nto function
// ... -> spred --> into Array and Object
let temp_arr = [1, 2, 3];
let temp_arr2 = [4, 5, 6];
let mix_arr = [...temp_arr, ...temp_arr2];
console.log(mix_arr)
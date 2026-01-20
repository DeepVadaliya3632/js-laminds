// Example 1: 
// console.log(nm)
// let nm = 'name';

// cannot access before initialization
// reason: coz of let 

// solution: 
    // let nm = 'name'
    // console.log(nm)


// example 2:

// console.log(b);
// var b = "username";
// undefind
// coz of var

// solution:
    // var b = "username";
    // console.log(b)

// example 3: 
// var x =1;
// {
//     var x =2;
// }
//  console.log(x)

// 2
// coz of var, variable it can be changed inside block 

// solution : 
    // let x = 1;
    // {
    //     let x =2;
    // }
    // console.log(x)

// example 4: 

// let a = 10;
// {
//     let a = 20;
//     console.log("inside:", a);
// }
// console.log(a)

// inside: 20
// 10

// coz of let , js will treat 'a' variable in function diffretnly inside a function body and it will be not accessible from outside of function block

// example 5 :
// const person = {name: "demo"};
// console.log(person.name)

// person.name = "user";
// console.log(person.name)
// it changes value name key in person object

// person = {};
// error : TypeError: Assignment to constant variable.
// const variable can not be change once its declared


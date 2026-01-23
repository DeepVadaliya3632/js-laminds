<h1>JavaScript Variables, Scope & Hoisting</h1>


<hr>

<h2>1. Global Variables and window</h2>

<pre>
a = 10;        // becomes a window variable (not recommended)
var b = 20;    // added to window object
</pre>

<ul>
    <li>Variables declared with <code>var</code> in global scope become properties of the <code>window</code> object.</li>
    <li>Assigning a value without declaration creates a global variable.</li>
</ul>

<hr>

<h2>2. var Keyword</h2>

<pre>
var d;
var d = 12;

d = 24;
var d = "hello";
</pre>

<h3>Characteristics of var</h3>
<ul>
    <li>Function scoped</li>
    <li>Can be redeclared</li>
    <li>Can be reassigned</li>
    <li>Hoisted with default value undefined</li>
</ul>

<hr>

<h2>3. let Keyword</h2>

<pre>
let e = 30;
{
    let e = 20;
}
</pre>

<pre>
function abc() {
    let e = 10;
    return e;
}

console.log("functional scope:", abc());
console.log("global scope:", e);
</pre>

<h3>Characteristics of let</h3>
<ul>
    <li>Block scoped</li>
    <li>Cannot be redeclared in the same scope</li>
    <li>Can be reassigned</li>
    <li>Has Temporal Dead Zone until initialized</li>
</ul>

<hr>

<h2>4. var and Block Scope</h2>

<pre>
var y = 30;
{
    var y = 20;
}
</pre>

<pre>
function abc() {
    var y = 10;
    return y;
}

console.log("functional scope:", abc());
console.log("global scope:", y);
</pre>

<p>
The <code>var</code> keyword does not respect block scope.
It only respects function scope.
</p>

<hr>

<h2>5. Hoisting</h2>

<h3>Hoisting with var</h3>

<pre>
console.log(jwu);
var jwu = 10;
</pre>

<p>JavaScript interprets it as:</p>

<pre>
var jwu;
console.log(jwu);
jwu = 10;
</pre>

<hr>

<h3>Hoisting with let</h3>

<pre>
console.log(dhe);
let dhe = 20;
</pre>

<p>
The variable is hoisted but not initialized.
Accessing it before initialization throws a ReferenceError.
</p>

<hr>

<h2>6. Temporal Dead Zone (TDZ)</h2>

<ul>
    <li>The time between variable hoisting and initialization</li>
    <li>Applies to let and const</li>
    <li>Accessing variables in TDZ causes a ReferenceError</li>
</ul>

<hr>

<h2>7. Hoisting Impact Summary</h2>

<pre>
var temp_d = 12;
let temp_d_let = 24;
</pre>

<table border="1" cellpadding="5" cellspacing="0">
    <tr>
        <th>Keyword</th>
        <th>Hoisted</th>
        <th>Initial Value</th>
        <th>Access Before Initialization</th>
    </tr>
    <tr>
        <td>var</td>
        <td>Yes</td>
        <td>undefined</td>
        <td>Allowed</td>
    </tr>
    <tr>
        <td>let</td>
        <td>Yes</td>
        <td>Uninitialized</td>
        <td>Error</td>
    </tr>
    <tr>
        <td>const</td>
        <td>Yes</td>
        <td>Uninitialized</td>
        <td>Error</td>
    </tr>
</table>

<hr>

<h2>8. Key Takeaways</h2>

<ul>
    <li>Prefer let and const over var</li>
    <li>Avoid creating global variables</li>
    <li>Understand hoisting to prevent runtime errors</li>
    <li>Use const when reassignment is not required</li>
</ul>

<pre>
const name = "deep";
let count = 0;
</pre>

<h1>JavaScript Datatypes</h1>

<p>
This document explains JavaScript data types, including primitive and non-primitive types,
with examples demonstrating value copying, reference copying, and type checking.
</p>

<hr>

<h2>1. Primitive Data Types</h2>

<p>
Primitive data types store <strong>values directly</strong>.
When assigned to another variable, the value is copied.
</p>

<h3>Example: Value Copy</h3>

<pre>
let a = 12;
let b = a;

console.log(a);
a = 14;
console.log(b);
</pre>

<p>
Changing the value of <code>a</code> does not affect <code>b</code>
because primitives are copied by value.
</p>

<hr>

<h3>String</h3>

<pre>
let str  = 'hello world';
let str1 = "hello world";
let str2 = `hello world`;

console.log(typeof(str));
console.log(typeof(str1));
console.log(typeof(str2));
</pre>

<p>
All string formats return the type <code>string</code>.
</p>

<hr>

<h3>Number</h3>

<pre>
let num = 12;
let num1 = 12.25;

console.log(typeof(num));
console.log(typeof(num1));
</pre>

<p>
JavaScript does not differentiate between integers and floats.
Both are of type <code>number</code>.
</p>

<hr>

<h3>Boolean</h3>

<pre>
let tr = true;
let fs = false;

console.log(typeof(tr));
console.log(typeof(fs));
</pre>

<hr>

<h3>Null</h3>

<pre>
let nul = null;
console.log(typeof(null));
</pre>

<p>
The type of <code>null</code> is <code>object</code>.
This is a known JavaScript bug.
</p>

<hr>

<h3>Undefined</h3>

<pre>
let undefined;
console.log(typeof(undefined));
</pre>

<p>
A variable declared but not assigned has the type <code>undefined</code>.
</p>

<hr>

<h3>Symbol</h3>

<pre>
let obj = { uid: 1, name1: "deep", course: "BCA" };

const u1 = Symbol("foo");
const u2 = Symbol("foo");
const u3 = Symbol("foo");

obj[u3] = "001";

if (u1 === u2) {
    console.log("object");
}
</pre>

<p>
Each Symbol is unique, even if descriptions are the same.
Symbols are often used as object keys to avoid conflicts.
</p>

<hr>

<h3>BigInt</h3>

<pre>
let number = 9007199254740991;
let number1 = 9007199254740991n;

console.log(number1);
</pre>

<p>
BigInt is used to represent numbers larger than the safe integer limit.
</p>

<hr>

<h2>2. Non-Primitive Data Types</h2>

<p>
Non-primitive data types store <strong>references</strong>.
Assigning them copies the reference, not the actual value.
</p>

<h3>Example: Reference Copy</h3>

<pre>
let arr = [1, 2, 3, 4, 54];
let arr1 = arr;

arr.pop();
console.log(arr1);
</pre>

<p>
Changes made to <code>arr</code> also affect <code>arr1</code>
because both point to the same memory location.
</p>

<hr>

<h2>3. Common Non-Primitive Types</h2>

<pre>
let arr = [1, 2, 54, 6, 3, 3, 43, 34];
let object = { username: "deep", pass: "isd@#kdfhk935" };

function func(params) {}

console.log(arr);
console.log(object);
console.log(func());
</pre>

<ul>
    <li>Array</li>
    <li>Object</li>
    <li>Function</li>
</ul>

<hr>

<h2>Key Differences Summary</h2>

<table border="1" cellpadding="5" cellspacing="0">
    <tr>
        <th>Category</th>
        <th>Primitive</th>
        <th>Non-Primitive</th>
    </tr>
    <tr>
        <td>Storage</td>
        <td>Stores value</td>
        <td>Stores reference</td>
    </tr>
    <tr>
        <td>Copy Behavior</td>
        <td>By value</td>
        <td>By reference</td>
    </tr>
    <tr>
        <td>Mutable</td>
        <td>No</td>
        <td>Yes</td>
    </tr>
</table>

<h1>JavaScript Loops</h1>

<p>
This document explains different types of loops in JavaScript:
<code>for</code>, <code>while</code>, and <code>do...while</code>,
with examples demonstrating increasing and decreasing conditions.
</p>

<hr>

<h2>1. For Loop</h2>

<p>
The <code>for</code> loop is used when the number of iterations is known.
</p>

<h3>Example: Increasing Order</h3>

<pre>
for (let i = 0; i < 10; i++) {
    console.log(i + 1);
}
</pre>

<h3>Example: Decreasing Order</h3>

<pre>
for (let i = 10; i > 0; i--) {
    console.log(i);
}
</pre>

<hr>

<h2>2. While Loop</h2>

<p>
The <code>while</code> loop runs as long as the condition is true.
The condition is checked before execution.
</p>

<h3>Example: 1 to 10</h3>

<pre>
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
</pre>

<h3>Example: 50 to 21</h3>

<pre>
let k = 50;
while (k > 20) {
    console.log(k);
    k--;
}
</pre>

<h3>Example: 60 to 20</h3>

<pre>
let a = 60;
while (a >= 20) {
    console.log(a);
    a--;
}
</pre>

<h3>Example: 30 to 21</h3>

<pre>
let c = 30;
while (c > 20) {
    console.log(c);
    c--;
}
</pre>

<h3>Example: 50 to 60</h3>

<pre>
let f = 50;
while (f <= 60) {
    console.log(f);
    f++;
}
</pre>

<h3>Example using Pre-Increment</h3>

<pre>
let q = 50;
while (q <= 60) {
    console.log(q);
    ++q;
}
</pre>

<hr>

<h2>3. Do While Loop</h2>

<p>
The <code>do...while</code> loop executes the block at least once,
even if the condition is false.
The condition is checked after execution.
</p>

<h3>Example: 10 to 20</h3>

<pre>
let g = 10;
do {
    console.log("do while:", g);
    g++;
} while (g <= 20);
</pre>

<h3>Example: 1 to 10</h3>

<pre>
let h = 1;
do {
    console.log("do while:", h);
    h++;
} while (h <= 10);
</pre>

<hr>

<h2>Loop Comparison Summary</h2>

<table border="1" cellpadding="5" cellspacing="0">
    <tr>
        <th>Loop Type</th>
        <th>Condition Check</th>
        <th>Minimum Execution</th>
    </tr>
    <tr>
        <td>for</td>
        <td>Before execution</td>
        <td>0 times</td>
    </tr>
    <tr>
        <td>while</td>
        <td>Before execution</td>
        <td>0 times</td>
    </tr>
    <tr>
        <td>do...while</td>
        <td>After execution</td>
        <td>At least 1 time</td>
    </tr>
</table>

<hr>

<h1>JavaScript Functions</h1>

<p>
This document explains JavaScript functions, their purpose, syntax,
types, parameters, and advanced concepts such as first-class functions
and higher-order functions.
</p>

<hr>

<h2>1. What is a Function</h2>

<p>
A function is a block of code that performs a specific task.
</p>

<h3>Why Functions are Used</h3>
<ul>
    <li>To reuse code</li>
    <li>To avoid repetition</li>
    <li>To make code modular and readable</li>
</ul>

<h3>How to Create a Function</h3>
<ul>
    <li>Function keyword</li>
    <li>Function name</li>
    <li>Parameters</li>
    <li>Function body</li>
    <li>Return statement (optional)</li>
</ul>

<hr>

<h2>2. Types of Functions</h2>

<h3>Function Declaration</h3>

<pre>
function abc() {
}
</pre>

<p>
Function declarations are hoisted and can be called before definition.
</p>

<hr>

<h3>Function Expression</h3>

<pre>
let fnc = function () {
};
</pre>

<p>
Function expressions are stored in variables and are not hoisted.
</p>

<hr>

<h3>Arrow Function (Fat Arrow Function)</h3>

<pre>
let fnc1 = () => {
};
</pre>

<p>
Arrow functions provide a shorter syntax and do not have their own
<code>this</code> binding.
</p>

<hr>

<h2>3. Function with Multiple Parameters</h2>

<pre>
let products = [];

function cart(item, itemValue) {
    products.push({
        product: item,
        price: itemValue
    });
}
</pre>

<hr>

<h2>4. Arrow Function Example</h2>

<pre>
const cart = (item, itemValue) => {
    products.push({
        product: item,
        price: itemValue
    });
};
</pre>

<hr>

<h2>5. Function Expression Example</h2>

<pre>
const cart = function(item, itemValue) {
    products.push({
        product: item,
        price: itemValue
    });
};
</pre>

<hr>

<h2>6. Default Parameters</h2>

<pre>
function num(a = 10, b = 20) {
    console.log(a, b);
}

num();
</pre>

<p>
Default parameters are used when arguments are not passed.
</p>

<hr>

<h2>7. Rest Parameters</h2>

<pre>
function def(a, b, c, ...args) {
    console.log(a, b, c);
    console.log(args);
}

def(1, 2, 3, 4, 5, 6, 778, 24, "text", null, true);
</pre>

<p>
The rest operator collects multiple arguments into an array.
</p>

<hr>

<h2>8. Early Return</h2>

<pre>
function getValue1(value) {
    if (value < 25) return "Value is less than 25";
    else if (value < 50) return "Value is less than 50";
    else if (value < 75) return "Value is less than 75";
    return "Value is 100 or more";
}

let result = getValue1(80);
console.log(result);
</pre>

<p>
Early return is used to exit a function as soon as a condition is met.
</p>

<hr>

<h2>9. First-Class Functions</h2>

<p>
In JavaScript, functions are treated like variables.
</p>

<ul>
    <li>Functions can be assigned to variables</li>
    <li>Functions can be passed as arguments</li>
    <li>Functions can be returned from other functions</li>
</ul>

<h3>Function Stored in a Variable</h3>

<pre>
const cart5 = function(product, price) {
    console.log(`Adding ${product} at ${price}`);
};

cart5("S25 Ultra", 69000);
</pre>

<hr>

<h3>Function Passed as Argument</h3>

<pre>
function temp_b(fnc) {
    fnc();
}

temp_b(function () {
    console.log("First Class Function");
});
</pre>

<hr>

<h3>Function Returning Another Function</h3>

<pre>
function abcd() {
    return function () {
        console.log("Function returned from another function");
    };
}

abcd()();
</pre>

<hr>

<h2>10. Higher Order Functions (HOF)</h2>

<p>
A higher-order function is a function that either:
</p>

<ul>
    <li>Accepts another function as an argument</li>
    <li>Returns a function</li>
</ul>

<h3>Example: Higher Order Function</h3>

<pre>
function greet(fn) {
    fn();
}

greet(function () {
    console.log("Hello World");
});
</pre>

<hr>

<h3>Example: forEach as Higher Order Function</h3>

<pre>
let arr = [10, 20, 30];

arr.forEach(function (num) {
    console.log(num);
});
</pre>

<p>
The <code>forEach</code> method is a built-in higher-order function
because it accepts a function as an argument.
</p>

<hr>

<h2>Conclusion</h2>

<p>
Functions are a core concept in JavaScript.
Understanding different function types, parameters,
first-class functions, and higher-order functions
helps in writing clean, reusable, and efficient code.
</p>

<hr>
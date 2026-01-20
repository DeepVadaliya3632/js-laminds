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
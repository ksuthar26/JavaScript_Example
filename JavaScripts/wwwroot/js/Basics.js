// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


/* Local and Global Variables */

var global_var = "test";
var global_var; // never reset value if we redeclare var.
function demo() {
    day = "Monday";//global variable

    var local_var = "loacal"

    document.getElementById("demo").innerHTML += "Acess Global variable From innner function : " + global_var + "<br/>";
    document.getElementById("demo").innerHTML += "Acess Local variable From innner function : " + local_var + "<br/>";
}
demo();
// code here can use day as a global variable

document.getElementById("demo").innerHTML += "Today is : " + day + "<br/>";
document.getElementById("demo").innerHTML += "Access Glabal Variable from outer function : " + global_var + "<br/>";

//document.getElementById("demo").innerHTML = "Acess Local variable From outer  function : " + local_var + "<br/>"; // throw error

/* OPerator Example */

var a = 33;
var b = 10;
var c = "Test";
var linebreak = "<br />";

document.write("10 + true + \"\" + \"test\" + 2.63 + null + undefined = ");
result = 10 + true + "" + "test" + 2.63 + null + undefined;
document.write(result);
document.write(linebreak);


document.write("10 + false + \"\" + \"test\" + 2.63 + null + undefined = ");
result = 10 + false + "" + "test" + 2.63 + null + undefined;
document.write(result);
document.write(linebreak);

document.write("10  + \"\" + true + \"test\" + 2.63 + null + undefined = ");
result = 10 + "" + true + "test" + 2.63 + null + undefined;
document.write(result);
document.write(linebreak);



document.write("10 + true = ");
result = 10 + true; //+ "" + "test" + 2.63 + null + undefined;
document.write(result);
document.write(linebreak);

document.write("10 + false = ");
result = 10 + false; //+ "" + "test" + 2.63 + null + undefined;
document.write(result);
document.write(linebreak);

document.write("10 + null = ");
result = 10 + null; //+ "" + "test" + 2.63 + null + undefined;
document.write(result);
document.write(linebreak);

document.write("10.3 + true = ");
result = 10.3 + true; //+ "" + "test" + 2.63 + null + undefined;
document.write(result);
document.write(linebreak);

document.write("10 + undefined = ");
result = 10 + undefined; //+ "" + "test" + 2.63 + null + undefined;
document.write(result);
document.write(linebreak);


document.write("test + undefined = ");
result = "test" + undefined; //+ "" + "test" + 2.63 + null + undefined;
document.write(result);
document.write(linebreak);

document.write("\"\" + undefined = ");
result = "" + undefined; //+ "" + "test" + 2.63 + null + undefined;
document.write(result);
document.write(linebreak);

document.write("\"\" + null = ");
result = "" + null; //+ "" + "test" + 2.63 + null + undefined;
document.write(result);
document.write(linebreak);

document.write("null + undefined = ");
result = null + undefined; //+ "" + "test" + 2.63 + null + undefined;
document.write(result);
document.write(linebreak);

document.write("var a = 33;");
document.write(linebreak);
document.write("var b = 10;");
document.write(linebreak);
document.write("var c = \"Test\";");
document.write(linebreak);
document.write(linebreak);
document.write(linebreak);

document.write("a + b = ");
result = a + b;
document.write(result);
document.write(linebreak);

document.write("a - b = ");
result = a - b;
document.write(result);
document.write(linebreak);

document.write("a / b = ");
result = a / b;
document.write(result);
document.write(linebreak);

document.write("a % b = ");
result = a % b;
document.write(result);
document.write(linebreak);

document.write("a + b + c = ");
result = a + b + c;
document.write(result);
document.write(linebreak);

a = ++a;
document.write("++a = ");
result = ++a;
document.write(result);
document.write(linebreak);

b = --b;
document.write("--b = ");
result = --b;
document.write(result);
document.write(linebreak);

a = a++;
document.write("a++ = ");
result = a++;
document.write(result);
document.write(linebreak);

b = b--;
document.write("b-- = ");
result = b--;
document.write(result);
document.write(linebreak);



var a = 10;
var b = 20;
var linebreak = "<br />";

document.write("(a == b) => ");
result = (a == b);
document.write(result);
document.write(linebreak);

document.write("(a < b) => ");
result = (a < b);
document.write(result);
document.write(linebreak);

document.write("(a > b) => ");
result = (a > b);
document.write(result);
document.write(linebreak);

document.write("(a != b) => ");
result = (a != b);
document.write(result);
document.write(linebreak);

document.write("(a >= b) => ");
result = (a >= b);
document.write(result);
document.write(linebreak);

document.write("(a <= b) => ");
result = (a <= b);
document.write(result);
document.write(linebreak);

var a = true;
var b = false;
var linebreak = "<br />";

document.write("(a && b) => ");
result = (a && b);
document.write(result);
document.write(linebreak);

document.write("(a || b) => ");
result = (a || b);
document.write(result);
document.write(linebreak);

document.write("!(a && b) => ");
result = (!(a && b));
document.write(result);
document.write(linebreak);


// equal operator
console.log(2 == 2); // true
console.log(2 == '2'); // true

// not equal operator
console.log(3 != 2); // true
console.log('hello' != 'Hello'); // true

// strict equal operator
console.log(2 === 2); // true
console.log(2 === '2'); // false

// strict not equal operator
console.log(2 != '2'); // true
console.log(2 !== '2'); // false

// logical AND
console.log(true && true); // true
console.log(true && false); // false

// logical OR
console.log(true || false); // true

// logical NOT
console.log(!true); // false

// concatenation operator
console.log('hello' + 'world');

let aa = 'JavaScript';

aa += ' tutorial';  // a = a + ' tutorial';
console.log(aa);


let a1 = 12;
let b2 = 25;

result = a1 & b2;
console.log(result); // 8 

result = a1 | b2;
console.log(result); // 29

result = a1 ^ b2;
console.log(result); // 21

result = ~b2;

console.log(result); // -13

var a = 2; // Bit presentation 10
var b = 3; // Bit presentation 11
var linebreak = "<br />";

document.write("(a & b) => ");
result = (a & b);
document.write(result);
document.write(linebreak);

document.write("(a | b) => ");
result = (a | b);
document.write(result);
document.write(linebreak);

document.write("(a ^ b) => ");
result = (a ^ b);
document.write(result);
document.write(linebreak);

document.write("(~b) => ");
result = (~b);
document.write(result);
document.write(linebreak);

document.write("(a << b) => ");
result = (a << b);
document.write(result);
document.write(linebreak);

document.write("(a >> b) => ");
result = (a >> b);
document.write(result);
document.write(linebreak);

document.write("(a >>> b) => ");
result = (a >>> b);
document.write(result);
document.write(linebreak);


let a3 = 8;
let b3 = 1;

result = a3 << b3;

// 1 ( 00000000000000000000000000010000 )
console.log(result);

result = a3 >> b3;

// 1 ( 00000000000000000000000000010000 )
console.log(result);

result = a3 >>> b3;

// 1 ( 00000000000000000000000000010000 )
console.log(result);

var a = 33;
var b = 10;
var linebreak = "<br />";

document.write("Value of a => (a = b) => ");
result = (a = b);
document.write(result);
document.write(linebreak);

document.write("Value of a => (a += b) => ");
result = (a += b);
document.write(result);
document.write(linebreak);

document.write("Value of a => (a -= b) => ");
result = (a -= b);
document.write(result);
document.write(linebreak);

document.write("Value of a => (a *= b) => ");
result = (a *= b);
document.write(result);
document.write(linebreak);

document.write("Value of a => (a /= b) => ");
result = (a /= b);
document.write(result);
document.write(linebreak);

document.write("Value of a => (a %= b) => ");
result = (a %= b);
document.write(result);
document.write(linebreak);


var a = 10;
var b = 20;
var linebreak = "<br />";

document.write("((a > b) ? 100 : 200) => ");
result = (a > b) ? 100 : 200;
document.write(result);
document.write(linebreak);

document.write("((a < b) ? 100 : 200) => ");
result = (a < b) ? 100 : 200;
document.write(result);
document.write(linebreak);

var a = 10;
var b = "String";
var linebreak = "<br />";

result = (typeof b == "string" ? "B is String" : "B is Numeric");
document.write("Result => ");
document.write(result);
document.write(linebreak);

result = (typeof a == "string" ? "A is String" : "A is Numeric");
document.write("Result => ");
document.write(result);
document.write(linebreak);


/**
 * JavaScript Conditional Statements with Examples
 */

var a, b;
a = 60
b = 30

document.write("<br>Value of a " + a);
document.write("<br>Value of b " + b);
if (a > b) {
    document.write("<br>value of a is greater than b ");
}

if (a > b) {
    document.write("<br>value of a is greater than b");
}
else {
    document.write("<br>value of a is less than b");
}

if (a > b) {
    document.write("<br>value of a is greater than b");
}
else if (a < b) {
    document.write("<br>value of a is less than b");
}
else {
    document.write("<br>value of a is equal to b");
}

var day;
weekday = parseInt(prompt("Enter Weekday", ""))
switch (weekday) {
    case 1:
        day = "Sunday";
        break
    case 2:
        day = "Monday";
        break
    case 3:
        day = "Tuesday";
        break
    case 4:
        day = "Wednesday";
        break
    case 5:
        day = "Thursday";
        break
    case 6:
        day = "Friday";
        break
    case 7:
        day = "Saturday";
        break
    default:
        day = "Invalid weekday";
}

document.write("Enter Weekday" + day);

/**
 * JavaScript Loop
 */

var counter = 0;
while (counter < 10) {
    console.log('Number : ' + counter);
    counter++;
}

//while (true) {
//    console.log("infinite loop");
//}

var counter = 0;
while (counter < 10) {
    if (counter == 5)
        break;//break loop only if counter==5
    console.log('Number : ' + counter);
    counter++;
}

var counter = 0;
while (counter < 10) {
    counter++;
    if (counter == 5)
        continue;//skip the code in loop only if counter==5
    console.log('Number : ' + counter);
}

var i = 0;
do {
    document.write(i + " ");
    i++; // incrementing i by 1
} while (i < 5);

for (var number = 0; number < 10; number++) {
    console.log(number);
}

//for (; ;) {
//    console.log("infinite for loop");
//}

for (var i = 1, sum = 1; i <= 128; i = i * 2, sum += i) {
    console.log('i = ' + i + ', sum = ' + sum);
}

var arr = [10, 20, 30, 40, 50];
for (var index in arr) { console.log(arr[index]) }// 10, 20, 30, 40, 50

var str = "welcome";
for (var index in str) { console.log(str[index]) }// w, e, l, c, o, m, e



/*
 * JavaScript Functions in Depth
 */

//By function declaration
myFunction();

function myFunction() {
    document.write("This is a small function.<br />");
}
myFunction();


//By function Expression
//printHello1(); // Throw Error
var printHello1 = function () { console.log("Hello") };
var printHello1 = function printFunct() { console.log("Hello:") };
printHello1();

//Using the constructor of the Function object
//var printHello = new Function('console.log(“Hello”)');
//printHello();

function print() {
    console.log('printed');
}
function anotherPrint() {
    print();
    anotherPrint(); // recursion
}


function printNumber(number1, number2) {
    var max = number1;
    if (number2 > number1)
        max = number2;
    console.log('Maximal number: ' + max);
}

printNumber(-5, -10);
printNumber(a + b, c);
printNumber(2 + 3, 10);
printNumber(100, 200);

function printArguments() {
    for (var i in arguments) {
        console.log(arguments[i]);
    }
}
printArguments(1, 2, 3, 4); // 1, 2, 3, 4

var count = 0;
function countVowels(name) {
    for (var i = 0; i < name.length; i++) {
        if (name[i] == "a" || name[i] == "e" || name[i] == "i" || name[i] == "o" || name[i] == "u")
            count = count + 1;
    }
    document.write("Hello " + name + "!!! Your name has " + count + " vowels.");
}
var myName = prompt("Please enter your name");
countVowels(myName);

function createStudent(name, age, gender) {
    var obj = { name: name, age: age, gender: gender };
    return obj;
}
var student = createStudent("Shagufta", 21, "Female");
console.log(student);


var arr = [1, 2, 3, 4, 5, 6, 7]; // global scope
function countOccurences(value) {
    var count = 0; // local scope (for the function only)
    for (var i = 0; i < arr.length; i++)
        if (arr[i] == value) count++;
    return count;
}
countOccurences(arr);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7]
console.log(typeof (count)); // undefined

function play() {
    for (var x = 1; x < 5; x++) {
        var y = x * x;
        console.log(x + " " + y);
    }
}
play();
console.log(typeof (x)); // undefined
console.log(typeof (y)); // undefined

for (var x = 1; x < 5; x++) {
    var y = x * x;
    console.log(x + " " + y);
}
console.log("x=" + x + " y=" + y); // x=5 y=16
// Now "x" and "y" are variables in the global scop


function add() {
    var counter = 0;
    function plus() { counter += 1; }
    plus();
    return counter;
}

add();

function printText(number, text) {
    switch (arguments.length) {
        case 1: console.log('Number :' + number); break;
        case 2:
            console.log('Number :' + number);
            console.log('Text :' + text);
            break;
    }
}
printText(5); // Logs 5
printText(5, 'JavaScript Tutorials'); // Logs 5 and JavsScript Tutorials

function printMsg(msg) {
    var numbers = [1, 54, 2, 324, 2];
    var max = Math.max.apply(null, numbers);
    console.log(max);
    var max1 = Math.max.call(null, 1, 54, 2, 324, 2);
    console.log(max1);
}

printMsg();

function printMsg(msg) {
    console.log("Message: " + msg);
}
printMsg.apply(null, ["Important message"]);// Here "this" is null, since it is not used in the function

function factorial(n) {
    if (n == 0) {
        return 1;
    }
    return factorial(n - 1) * n;
}
console.log(factorial(5));

var fact = function (n) {  //Recursion with Function Expression
    if (n === 0) {
        return 1;
    }
    return n * fact(n - 1);
};
console.log(fact(5));


var factorial = function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
    //or use arguments.callee
};
var factorial2 = factorial;
factorial = 5;
console.log(factorial2(5)); // prints 120  correct

console.log(typeof factorial); // prints 120  correct

//Function Scope

if (true) { var result = 5; }
console.log(result); // logs 5

if (true) (function () { var result = 5; })();
console.log(result); // ReferenceError

function logResult() { var result = 5; }
if (true) logResult();
console.log(result); // ReferenceError

/* Closures */

function outer(x) {
    function inner(y) {
        return x + " " + y;
    }
    return inner;
}
var f1 = outer(5);
console.log(f1(7)); // outputs 5 7

var f2 = outer("Shagufta");
console.log(f2("closure")); // outputs shagufta closure


//Closures can be used for data hiding (encapsulation in OOP). Make objects invisible to the outside (private)


/*   Exception Handling in JavaScript  */

try {
    var a = ["10", "20", "30", "40", "50", "60", "70"]; //a is an array
    document.write("<br>" + a);    // displays elements of a
    document.write(linebreak);
    document.write(bghhghgh); //b is undefined but still trying to fetch its value. Thus catch block will be invoked
    document.write(linebreak);
} catch (e) {
    document.write("<br>There is error which shows " + e.message); //Handling exception error
    document.write(linebreak);
}

try {
    throw new Error('This is the throw statment'); //user-defined throw statement.
    document.write(linebreak);
}
catch (e) {
    document.write(e.message); // This will generate an error message
    document.write(linebreak);
}

try {
    var a = 10;
    if (a == 10)
        document.write("ok");
    document.write(linebreak);
}
catch (Error) {
    document.write("Error found" + e.message);
    document.write(linebreak);
}
finally {
    document.write("Value of a is 10 ");
    document.write(linebreak);
}

/* JavaScript Hoisting with Examples */

x_Hoisting = 100;
document.write("x_Hoisting : " + x_Hoisting);
document.write(linebreak);
var x_Hoisting;

x1_Hoisting = 1004;
document.write("x1_Hoisting : " + x1_Hoisting);
document.write(linebreak);
x1_Hoisting = 1005;
var x1_Hoisting;

y_Hoisting = 'www';
document.write("y_Hoisting : " + y_Hoisting);
document.write(linebreak);
var y_Hoisting = "Example";


document.write("z_Hoisting : " + z_Hoisting);
document.write(linebreak); 22
var z_Hoisting = "Example";


document.write(addition(10, 20));
function addition(a, b) {
    return a + b;
}

xrrrrr = 10;
document.write(xrrrrr);
console.log(xrrrrr);
document.write(linebreak);

"use strict";
xrrr = 10;
document.write(xrrr);
console.log(xrrr);
document.write(linebreak);

console.log(addtion11(10, 20));
function addtion11(x, x) {
    "use strict";
    return x + x;
}


/* Use of This Keyword */

var details =
{
    company: "JavaScript",
    city: "Mumbai",
    state: "MH",
    fullAddress: function () {
        return this.company + " " + this.city + " " + this.state;
    }
};
var fetch = details.fullAddress();
document.writeln(fetch);
document.write(linebreak);

// this keyword with global context
var tutorialName = "JavaScript Tutorial";
function data() {
    document.write(this.tutorialName);
    document.write(linebreak);
}
data();


var emp_address = {
    fullAddress: function () {
        return this.company + " " + this.city + " " + this.state;
    }
}
var address = {
    company: "JavaScript Tutorial by Shagufta",
    city: "Mumbai",
    state: "MH",
}
document.writeln("call method: " + emp_address.fullAddress.call(address));
document.write(linebreak);
document.writeln("<br/>apply method: " + emp_address.fullAddress.apply(address));
document.write(linebreak);


let running = {
    name: 'Running',
    run: function (speed) {
        document.write(this.name + ' runs at ' + speed + ' mph.');
    }
};
let flying = {
    name: 'Flying',
    fly: function (speed) {
        document.write(this.name + ' flies at ' + speed + ' mph.');
    }
};
let run = running.run.bind(flying, 20);
run();
document.write(linebreak);
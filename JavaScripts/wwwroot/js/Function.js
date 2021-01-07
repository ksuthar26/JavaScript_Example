// Function definition and invocation
function showMsg(string) {
    console.log(string);
}
showMsg("Hello"); // logs "Hello"
// Store in a variable
function add(a, b) {
    return a + b;
}
let result = add(100, 200)
console.log(result);//300

let result1 = add;
console.log(result1);//return the function definition

function average(a, b, fnc) {
    return fnc(a, b) / 2;
}
let avgResult = average(100, 200, add); //passing function as arguement
console.log(avgResult);

function comparisonBy(propName) {
    return function (a, b) {
        let x = a[propName],
            y = b[propName];
        if (x > y) {
            return 1;
        } else if (x < y) {
            return -1
        } else {
            return 0;
        }
    }
}
let products = [
    { name: 'HP Laptop', price: 90000 },
    { name: 'Dell Laptop', price: 850000 },
    { name: 'Acer Laptop', price: 70000 }
];
console.log('Products sorted by name:');
products.sort(comparisonBy('name'));
console.table(products);
console.log('Products sorted by price:');
products.sort(comparisonBy('price'));
console.table(products);

// Function definition and invocation
function speak(string) {
    console.log(string);
}
speak("Hello! speak");                     // logs "Hello! speak"
// Store in a variable
var talk = speak;
talk("Hi! talk");// logs "Hi! talk"

// Owns properties
talk.myProperty = "start the conversation";
console.log(talk.myProperty);       // logs "start the conversation"


// Pass as an argument to a function
// Return from a function
function functionReturner(fn) {
    return fn;
}
var chat = functionReturner(talk);
chat("Good Morning! chat");


var myNums = [1, 2, 3, 4, 5];
function doubleNum(num) {
    return num * 2;
}
// Built-in Array.prototype.map function, using anonymous function argument
var doubledNums = myNums.map(function (num) {
    return num * 2;
});
console.log(doubledNums);           // logs "[2, 4, 6, 8, 10]"
// Built-in Array.prototype.map function, using named callback argument
var otherDoubledNums = myNums.map(doubleNum);
console.log(otherDoubledNums);      // logs "[2, 4, 6, 8, 10]"

var delayedFunction = function (fn) {
    return function (val, delay) {
        setTimeout(function () {
            fn(val);
        }, delay);
    };
};
var delayedSpeak = delayedFunction(speak);
delayedSpeak("I'm delayed speak function", 2000);// logs "I'm delayed speak function" after a 2 second delay






/* JavaScript Callback functions with Synchronous and Asynchronous */




function getMessage() {
    console.log("get message");
}
function showMessage() {
    console.log("show message");
}
getMessage();
showMessage();

console.log("hi")
setTimeout(() => {
    // runs after 3 seconds
    console.log('Hello callback setTimeout function')
}, 3000)
console.log("bye");


function doSomething(then) {
    console.log('call first');
    then();
}
// call first, then execute callback to log 'done'
doSomething(function () {
    console.log('Done');
});
console.log('call second');

function doSomethingAsync(then) {
    setTimeout(then, 1000);
    console.log('call first asynchronously');
}
doSomethingAsync(function () {
    console.log('Done');
});
console.log('call second');

setTimeout(function () {
    console.log("This message is shown after 3 seconds");
}, 3000);

setTimeout(() => {
    console.log("This message is shown after 3 seconds");
}, 3000);

[1, 2, 3, 4, 5].forEach(function (x) {
    console.log(x);
});

[1, 2, 3, 4, 5].forEach(x => console.log(x));

const expected = true;
function compareData(actual, success, failure) {
    if (actual === expected) {
        success();
    } else {
        failure();
    }
}
function onSuccess() {
    console.log('Actual Value is same as expected Value');
}
function onFailure() {
    console.log('Actual Value is unexpected/exceptional');
}
compareData(true, onSuccess, onFailure);
compareData(false, onSuccess, onFailure);

function compareDataAsync(actual, success, failure) {
    setTimeout(function () {
        compareData(actual, success, failure)
    }, 1000);
}
compareDataAsync(true, onSuccess, onFailure);
compareDataAsync(false, onSuccess, onFailure);
console.log('Doing something else');

function fileDownload(url, success, failure) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        // over simplification
        let error = url.length === 0 || !url;
        // call the failure or success callback
        error ? failure(url) : success(url);
    }, 3000);
}

fileDownload('',
    function (picture) {
        console.log(`Processing the picture ${picture}`);
    },
    function (picture) {
        console.log(`Handling error...`);
    }
);

fileDownload('https://unsplash.com/s/photos/jpg',
    function (picture) {
        console.log(`Processing the picture ${picture}`);
    },
    function (picture) {
        console.log(`Handling error...`);
    }
);


/* -------- JavaScript Anonymous Function --------- */

// Named function
function nameShowMessage() {
    let x;
    x = 'JavaScript by Shagufta!'
    console.log(x);
    return x;
}
// Anonymous function
const anonyShowMessage = function () {
    let y;
    y = 'JavaScript by Shagufta!'
    console.log(y);
    return y;
}
nameShowMessage();// Named function
anonyShowMessage();// Anonymous function

//anonyFunc(); // Thorw Error
//var anonyFunc = function () { // using an anonymous function
//    console.log('anonymous Function');
//}

var father = 'shah';
var son;
if (father === 'shah') son = function (value) {
    console.log('shah\'s son', value);
};
else if (father === 'watson') son = function (value) {
    console.log('watson\'s son', value);
};
son('junior shah');


/* -------- JavaScript Immediately Invoked Function Expressions (IIFE) --------- */


(function (a) {
    console.log(a)
})('It is working')//log it is working

var myVariable = "I am outside the function.";
(function () {
    var myVariable = "I am in this anonymous function";
    document.write(myVariable);
})();
document.write('<br/>' + myVariable);

var example = (function () {
    return 42;
}());
console.log(example); // => 42

var a = function () { return 42 }();
console.log(a) // => 42



/* -------- JavaScript Arrow  Function --------- */

//Normal function
function intro() {
    return "Welcome to Normal function without any parameter";
}
console.log(intro());
//Arrow function
let arrowStarup = () => "Welcome to Arrow function without any parameter";
console.log(arrowStarup());


//Normal function
function isNegative(number) {
    return number <= 0
}
console.log("Normal function: ", isNegative(3));
//Arrow function having one parameter without parentheses
let arrowIsNegative = number => number <= 0;
//Arrow function having one parameter with parentheses
let arrowIsNegativeWithParn = (num) => num <= 0;
console.log("Arrow function :", arrowIsNegative(-1));
console.log("Arrow function with Parentheses :", arrowIsNegativeWithParn(5));


//Normal function
function total(a, b) {
    return a + b;
}
console.log("Normal function multiple param: ", total(5, 7));
//Arrow function having multiple parameters
let arrowTotal = (a, b) => a + b;
console.log("Arrow function multiple param :", arrowTotal(11, 14));
//Normal Function (no arguments)
let a = 4; let b = 2;
function sum() {
    return a + b + 100;
}
console.log("Normal function with no param:", sum());
//Arrow Function (no arguments)
let x = 4; let y = 2;
let arrowSum = () => x + y + 100;
console.log("Arrow function with no param:", arrowSum());

//Without Arrow Function
hello = function () {
    return "JavaScript Tutorial";
}
//With Arrow Function
hello = () => {
    return "JavaScript Tutorial";
}

//Normal function
function sum(x, y) {
    return x + y
}
setTimeout(function () {
    console.log("Normal function executed after 1sec");
}, 1000);
console.log('Normal function:', sum(10, 20));
//Arrow function
let arrowSum = (x, y) => x + y;//doesn’t need return keyword for single statement
setTimeout(() => console.log("Arrow function executed after 1sec"), 1000);
console.log('Arrow function:', arrowSum(20, 30));


//Normal function
function multiStatmnt(a, b) {
    let chunk = 100;
    return a + b + chunk;
}
console.log("Normal function multiple statements: ", multiStatmnt(5, 7));
//Arrow function having multiple statements/expression
let arrowMultiStatmnt = (a, b) => {
    let chunk = 100;
    return a + b + chunk;
};
console.log("Arrow function multiple statements :", arrowMultiStatmnt(11, 14));
//Arrow function having multiple statements without return keyword
let arrowMultiStatmntNoRetrn = (a, b) => {
    let chunk = 100;
    a + b + chunk;
};
console.log("Arrow function multiple statements without Return keyword:", arrowMultiStatmntNoRetrn(11, 14));


//Normal function
let arr = [1, 2, 3]
let squares = arr.map(function (x) {
    return x * x;
});
console.log('Normal function map(): ', squares);
//Arrow function with map() method
var array = [1, 2, 3]
var arrowSquares = array.map(x => x * x);
console.log('Arrow function map(): ', arrowSquares);

//Normal function
var objectReturn = function objectReturn(x) {
    return { price: 100 + x };
}
console.log("Normal function Returning Object literal : ", objectReturn(5));
//Arrow function Returning Object literals
let arrowObjectReturn = x => ({ price: 100 + x })
console.log("Arrow function Returning Object literal :", arrowObjectReturn(5));


//Arrow function returning value
let arrowRetnVal = () => 10;
console.log("Arrow function Returning value : ", arrowRetnVal());
//An empty arrow function returns undefined
let arrowRetnFunc = () => { };
console.log("Arrow function Returning function : ", arrowRetnFunc());

//Arrow function 
let arrowRetnFunc1 = () => ({});
console.log("Arrow function Returning function-1 : ", arrowRetnFunc1());
let arrowRetnFunc2 = () => { return {} };
console.log("Arrow function Returning function-2 : ", arrowRetnFunc2());

/* Let KeyWords */

var linebreak = "<br />";

//Javascript Global Variable Scope

var ScriptLang = "JavaScript";
myFunction();

function myFunction() {
    document.write("I am Learning " + ScriptLang);
    document.write(linebreak);
}


myFunction1();
function myFunction1() {
    var ScriptLang1 = "JavaScript";
    document.write(typeof ScriptLang1 + " " + ScriptLang1);
    document.write(linebreak);
}
document.write(typeof ScriptLang1);
document.write(linebreak);

function func() {
    // x is known here but not defined.
    document.write('value of x here: ', x);
    document.write(linebreak);
    {
        var x = 10;
        x = x + 5;
    }
    // x is still known here and has a value.
    document.write('value of x after for block: ', x)
    document.write(linebreak);
}
// x is NOT known here.
func()


function funclet() {
    // x is NOT known here. Try uncommenting the line below.
   // document.write('value of x here (let) : ', x)
    document.write(linebreak);
    {
        let x = 10;
        x = x + 5;
    }
    // x is NOT known here. Try uncommenting the line below.
   // document.write('value of x after for block (let) : ', x)
    document.write(linebreak);
}
// x is NOT known here.
funclet()

let mango = "yellow"
if (mango === "yellow") {
    let mango = "orange"
    document.write(mango);
    document.write(linebreak);
}
document.write(mango);
document.write(linebreak);

var mango1 = "yellow"
if (mango1 === "yellow") {
    var mango1 = "orange"
    document.write(mango1);
    document.write(linebreak);
}
document.write(mango1);
document.write(linebreak);

/* Const Keyword */

//It must have an assignment with value other wise throw error

//const x1; // throw error
//x1 = 12;


//Variable created by cost keyword are immutable that means we can’t change the value or reassign them with different values.
//Any attempt of re - assigning a const variable will result in JavaScript Type error.

//const xww = 12;
//xww = 13; // throw error
//xww += 1;
//explains the const variable cannot be Hoisted

//x = 3;
//console.log(x);
//const x;


// the const variable which contains the Block Scope
const x11= 22;
{
    const x = 90;
    document.write(x);
    document.write(linebreak);
    {
        const x = 77;
        document.write(x);
        document.write(linebreak);
    }
    {
        const x = 45;
        document.write(x);
        document.write(linebreak);
    }
}
document.write(x11);
document.write(linebreak);


// Changing the content of array is
// possible in cost array
const arr1 = ["Shagufta", "Javascript", "tutorial", "developer"];
document.write(arr1.toString());
document.write(linebreak);
arr1[2] = "web"; // possible
document.write(arr1.toString());
document.write(linebreak);

//JavaScript const object properties can be modified only reference to object cannot be changed
const person = {
    first_name: "Shagufta",
    last_name: "Chaudhari",
    Age: 20,
    About: "Web Developer"
};
console.log(person);
// It is possible
person.first_name = "John";
person.last_name = "Doe";
person.Age = 22;
person.About = "Commerce undergraduate";
console.log(person);
            // it is not possible
            // const person={
            //     "first_name":"John",
            //     "last_name":"Doe",
            //     "Age":22,
            //     "About":"Commerce undergraduate"
            // }

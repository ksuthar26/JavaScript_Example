
function Person() {
    this.firstName = "unknown";
    this.lastName = "unknown";
    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    }
};

var person1 = new Person();
person1.firstName = "Steve";
person1.lastName = "Jobs";

alert(person1.getFullName());

var person2 = new Person();
person2.firstName = "Bill";
person2.lastName = "Gates";

alert(person2.getFullName());



// ------------------------------------------------------------------------------ //


function Person1(FirstName, LastName, Age) {
    this.firstName = FirstName || "unknown";
    this.lastName = LastName || "unknown";
    this.age = Age || 25;
    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    }
};

var person11 = new Person1("James", "Bond", 50);
alert(person11.getFullName());

var person21 = new Person1("Tom", "Paul");
alert(person21.getFullName());

// ------------------------------------------------------------------------------- //

function Person3(firstName, lastName, age) {
    var _firstName = firstName || "unknown";
    var _lastName = lastName || "unknown";
    var _age = age || 25;

    Object.defineProperties(this, {
        "FirstName": {
            get: function () { return _firstName },
            set: function (value) { _firstName = value }
        },
        "LastName": {
            get: function () { return _lastName },
            set: function (value) { _lastName = value }
        },
        "Age": {
            get: function () { return _age }   // Read Only Property            
        }
    });

    this.getFullName = function () {
        return this.FirstName + " " + this.LastName;
    }
};

var person13 = new Person3();
person13.FirstName = "John";
person13.LastName = "Bond";

alert(person13.getFullName());


/**---------JavaScript Object in Depth---------------------------------------------------------- */


// object literal 
var person = {
    firstName: 'Steve',
    lastName: 'Jobs'
};

// Constructor function
function Student() {
    this.name = "John";
    this.gender = "Male";
    this.sayHi = function () {
        alert('Hi');
    }
}
var student1 = new Student();
console.log(student1.name);
console.log(student1.gender);
student1.sayHi();

for (var prop in student1) {
    console.log(prop);
}

console.log(Object.getOwnPropertyDescriptor(person, 'firstName'));
console.log(Object.getOwnPropertyDescriptor(student1, 'name'));
console.log(Object.getOwnPropertyDescriptor(student1, 'sayHi'));



'use strict' // If you try to change the value of name property then it would throw an exception in strict mode. 
             //In non - strict mode, it won't throw an exception but it also won't change a value of name property either.

var student122 = new Student();

Object.defineProperty(student122, 'name', { writable: false });

try {
    student122.name = "James";
    console.log(student122.name);
}
catch (ex) {
    console.log(ex.message);
}

//edit enumerable attributes of name property to false
Object.defineProperty(student122, 'name', { enumerable: false });

console.log('After setting enumerable to false:');

for (var prop in student122) {
    console.log(prop);
}

Object.defineProperty(student122, 'name', { configurable: false });// set configurable to false

try {
    Object.defineProperty(student122, 'name', { writable: false }); // change writable attribute
}
catch (ex) {
    console.log(ex.message);
}

function MyFunc() {
    var myVar = 1;
    this.x = 100;
}

MyFunc.prototype.y = 200;

var obj1 = new MyFunc();
obj1.x; // 100
obj1.y; // 200

//-----------------------------------------------

function MyFunc() {
    this.x = 100;

    return { a: 123 };
}

var obj1 = new MyFunc();

alert(obj1.x); // undefined //If function returns non-primitive value, then not perfomred prototye operaion.

//--------------------------------------------------------------

function Student() {
    this.name = 'John';
    this.gender = 'Male';
}

var studObj1 = new Student();
studObj1.age = 15;
alert(studObj1.age); // 15


console.log(Student.prototype); // object
console.log(studObj1.prototype); // undefined
console.log(studObj1.__proto__); // object

console.log(typeof Student.prototype); // object
console.log(typeof studObj1.__proto__); // object

console.log(Student.prototype === studObj1.__proto__); // true

var proto = Object.getPrototypeOf(studObj1);  // returns Student's prototype object

alert(proto.constructor); // returns Student function 

var studObj2 = new Student();
alert(studObj2.age); // undefined

Student.prototype.age = 15;

var studObj13 = new Student();
alert(studObj13.age); // 15

var studObj23 = new Student();
alert(studObj23.age); // 15

Student.prototype = { age: 20 };

var studObj33 = new Student();
alert('studObj3.age = ' + studObj33.age); // 20

alert('studObj1.age = ' + studObj23.age); // 15
alert('studObj2.age = ' + studObj13.age); // 15


/*-------- Implement Inheritance -----------------------------------------------------------------------*/

/*------------- In JavaScript, inheritance is supported by using prototype object. Some people call it "Prototypal Inheriatance" and some people call it "Behaviour Delegation" ----------- */



function Person_Inhritance(firstName, lastName) {
    this.FirstName = firstName || "unknown";
    this.LastName = lastName || "unknown";
};

Person_Inhritance.prototype.getFullName = function () {
    return this.FirstName + " " + this.LastName;
}

function Student_Inheritance(firstName, lastName, schoolName, grade) {
    Person.call(this, firstName, lastName);

    this.SchoolName = schoolName || "unknown";
    this.Grade = grade || 0;
}
//Student.prototype = Person.prototype;
Student_Inheritance.prototype = new Person_Inhritance();
Student_Inheritance.prototype.constructor = Student_Inheritance;

var std = new Student("James", "Bond", "XYZ", 10);

alert(std.getFullName()); // James Bond
alert(std instanceof Student); // true
alert(std instanceof Person); // true

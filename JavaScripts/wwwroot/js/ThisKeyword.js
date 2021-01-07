var myVar = 100;

function WhoIsThis() {
    var myVar = 200;

    alert(myVar); // 200
    alert(this.myVar); // 100
}

WhoIsThis(); // inferred as window.WhoIsThis()

var obj = new WhoIsThis();
alert(obj.myVar); 


//----------------------------------------------------------------


var myVar = 100;

function WhoIsThis() {
    this.myVar = 200;
}
var obj1 = new WhoIsThis();

var obj2 = new WhoIsThis();
obj2.myVar = 300;

alert(obj1.myVar); // 200 
alert(obj2.myVar); // 300 


//-------------------------------------------------------------------

var myVar = 100;

function WhoIsThis() {
    this.myVar = 200;

    this.display = function () {
        var myVar = 300;

        alert("myVar = " + myVar); // 300
        alert("this.myVar = " + this.myVar);  // 200
    };
}
var obj = new WhoIsThis();

obj.display(); 


//-------------------------------------------------------------------


var myVar = 100;

var obj = {
    myVar: 300,
    whoIsThis: function () {
        var myVar = 200;

        alert(myVar); // 200
        alert(this.myVar); // 300
    }
};

obj.whoIsThis(); 


//--------------------------------------------------------------------------

function WhoIsThis() {
    alert('Hi');
}

WhoIsThis();
WhoIsThis.call();
WhoIsThis.apply();


//-----------------------------------------------------------------------------


var myVar = 100;

function WhoIsThis() {

    alert(this.myVar);
}

var obj1 = { myVar: 200, whoIsThis: WhoIsThis };

var obj2 = { myVar: 300, whoIsThis: WhoIsThis };

WhoIsThis(); // 'this' will point to window object

WhoIsThis.call(obj1); // 'this' will point to obj1

WhoIsThis.apply(obj2); // 'this' will point to obj2

obj1.whoIsThis.call(window); // 'this' will point to window object

WhoIsThis.apply(obj2); // 'this' will point to obj2

//-----------------------------------------------------------------------------------


var myVar = 100;

function SomeFunction(callback) {
    var myVar = 200;

    callback();
};

var obj = {
    myVar: 300,
    WhoIsThis: function () {
        alert("'this' points to " + this + ", myVar = " + this.myVar);
    }
};

SomeFunction(obj.WhoIsThis);
SomeFunction(obj.WhoIsThis.bind(obj)); 
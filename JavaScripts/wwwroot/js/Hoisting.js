x = 1;

alert('x = ' + x); // display x = 1

var x;

///////////////

x1 = 1;
y = x1;

alert('x = ' + x1);
alert('y = ' + y);

var x1;
var y;


//Hoisting is only possible with declaration but not the initialization

alert('x = ' + x2); // display x = undefined

var x2 = 1;


//Hoisting of Function


alert(Sum(5, 5)); // 10

function Sum(val1, val2) {
    return val1 + val2;
}


//Please note that JavaScript compiler does not move function expression.

//Add(5, 5); // error

var Add = function Sum(val1, val2) {
    return val1 + val2;
}

//JavaScript compiler moves a function's definition before variable declaration. The following example proves it.


alert(UseMe);

var UseMe;

function UseMe() {
    alert("UseMe function called");
}
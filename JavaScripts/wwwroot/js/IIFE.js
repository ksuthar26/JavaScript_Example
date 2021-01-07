var userName = "Bill-1";

function display(name) {
    alert("MyScript1.js: " + name);
}

display(userName);

var userName = "Steve-1";

function display(name) {
    alert("MyScript2.js: " + name);
}

display(userName);


/////////////////////////////////////////

//(var foo = 10 > 9); // syntax error
//(var foo = "foo", bar = "bar"); // syntax error
(10 > 9); // valid
(alert("Hi")); // valid

/////////////////////////////////////

(function () {
    var userName = "Steve";

    function display(name) {
        alert("MyScript1.js: " + name);
    }

    display(userName);
})();


var userName = "Bill-Gates";

(function (name) {

    function display(name) {
        alert("MyScript2.js: " + name);
    }

    display(name);
})(userName);
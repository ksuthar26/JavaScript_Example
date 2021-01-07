

/* Closure means that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned. */


function OuterFunction() {

    var outerVariable = 100;

    function InnerFunction() {
        alert(outerVariable);
    }

    return InnerFunction;
}
var innerFunc = OuterFunction();

innerFunc(); // 100


/* One important characteristic of closure is that outer variables can keep their states between multiple calls. Remember, inner function does not keep the separate copy of outer variables but it reference outer variables,
 * that means value of the outer variables will be changed if you change it using inner function. */


function Counter() {
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = Counter();
alert(counter()); // 1
alert(counter()); // 2
alert(counter()); // 3
alert(counter()); // 4


function Counter1() {

    var counter = 0;

    setTimeout(function () {
        var innerCounter = 0;
        counter += 1;
        alert("counter = " + counter);

        setTimeout(function () {
            counter += 1;
            innerCounter += 1;
            alert("counter = " + counter + ", innerCounter = " + innerCounter)
        }, 500);

    }, 1000);
};

Counter1();




var counterExample = (function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return privateCounter;
        }
    };
})();

alert(counterExample.value()); // 0
counterExample.increment();
counterExample.increment();
alert(counterExample.value()); // 2
counterExample.decrement();
alert(counterExample.value()); // 1
function* foo() {
    let index = 0;
    while (true) {
        yield index++;
    }
}
var f = foo();
console.log(f.next()); // 0
console.log(f.next()); // 1
console.log(f.next()); // 2




function* generator(e) {
    yield e + 10;
    return 6;
    yield e + 20;
    yield e + 30;
}
var g = generator(24);
console.log(g.next());
console.log(g.next());
console.log(g.next());


function* foo1() {
    console.log(yield);
}
var f1 = foo1();
console.log(f1.next()); // 0
console.log(f1.next(1)); // 1
console.log(f1.next('AAA')); // 2



function* fibonacci() {
    let fn1 = 0;
    let fn2 = 1;
    while (true) {
        let current = fn1;
        fn1 = fn2;
        fn2 = current + fn1;
        let reset = yield current;
        if (reset) {
            fn1 = 0;
            fn2 = 1;
        }
    }
}

const sequence = fibonacci();
console.log(sequence.next().value);     // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
console.log(sequence.next().value);     // 3
console.log(sequence.next().value);     // 5
console.log(sequence.next().value);     // 8
console.log(sequence.next(true).value); // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2


function* fiboGen(len, current = 0, next = 1) {
    if (len === 0) {
        return current;
    }
    yield current;
    yield* fiboGen(len - 1, next, current + next);
}
const fibo10 = [...fiboGen(10)];
console.log(fibo10)

function* simpleGen() {
    var index = 0;
    while (true)
        yield index++;
}
var gen = simpleGen();
//console.log([...simpleGen()]); // 0
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3



function* yieldstarGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
}
function* generator(i) {
    yield i;
    yield* yieldstarGenerator(i);
    yield i + 10;
}
var gen = generator(10);
console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20


function* argGenerator() {
    console.log(0);
    console.log(1, yield);
    console.log(2, yield);
    console.log(3, yield);
}
var gen = argGenerator();
// the first call of next executes from the start of the function
// until the first yield statement
gen.next();             // 0
gen.next('india');    // 1 india
gen.next('mumbai'); // 2 mumbai
gen.next('maharashtra'); // 3 maharashtra


function* yieldReturnGen() {
    yield "Yield";
    return "Return";
    yield "not declared";
}
var gen = yieldReturnGen()
console.log(gen.next()); // { value: "Yield", done: false }
console.log(gen.next()); // { value: "Return", done: true }
console.log(gen.next()); // { value: undefined, done: true }
console.log(gen.next()); // { value: undefined, done: true }


const ObjGen = {
    *generator() {
        yield 'alpha';
        yield 'beta';
    }
}
const gen1 = ObjGen.generator()
console.log(gen1.next()); // { value: 'alpha', done: false }
console.log(gen1.next()); // { value: 'beta', done: false }
console.log(gen1.next()); // { value: undefined, done: true }


class smaple {
    *generator() {
        yield 10;
        yield 20;
        yield 30;
    }
}
const s = new smaple();
const gen2 = s.generator();
console.log(gen2.next()); // { value: 10, done: false }
console.log(gen2.next()); // { value: 20, done: false }
console.log(gen2.next()); // { value: 30, done: false }
console.log(gen2.next()); // { value: undefined, done: true }



class sample1 {
    *[Symbol.iterator]() {
        yield 10;
        yield 20;
    }
}
const SomeObj = {
    *[Symbol.iterator]() {
        yield 'alpha';
        yield 'beta';
    }
}
console.log(Array.from(new sample1)); // [ 10, 20 ]
console.log(Array.from(SomeObj)); // [ 'alpha', 'beta' ]


const sample2 = function* () {
    yield 10.1;
    yield 20.3;
};
const sam = sample2();
console.log(sam.next()); // {value: 10.1, done: false}
console.log(sam.next()); // {value: 20.3, done: false}
console.log(sam.next()); // {value: undefined, done: true}

function* powers(n) {
    //endless loop to generate
    for (let current = n; ; current *= n) {
        yield current;
    }
}
for (let pow of powers(3)) {
    //controlling generator
    if (pow > 243) break;
    console.log(pow);
    //3
    //9
    //27
    //81
    //243
}

function* showValues(i) {
    while (i < 3) {
        yield i++;
    }
}
//creating an object for our function showValues
const showVal = showValues(0);
//return 0 because 0 value is passed to the showValues yield expression
console.log(showVal.next().value);
// return 1
console.log(showVal.next().value);
//return 2
console.log(showVal.next().value);


function* countSales() {
    let saleList = [3, 7, 5]
    for (let i = 0; i < saleList.length; i++) {
        yield saleList[i]
    }
}
let salesStore = countSales()  // Generator { }
console.log(salesStore.next())      // { value: 3, done: false }
console.log(salesStore.next())      // { value: 7, done: false }
console.log(salesStore.next())      // { value: 5, done: false }
console.log(salesStore.next())      // { value: undefined, done: true }

function* incompleteYield() {
    /*expression paused here and return
    value is undefined as nothing is declared*/
    yield;
    //wait for next() to finish
    msg(yield "Welcome to GFG");
}
function msg(x) {
    console.log("Hello World ", x)
}
var generator = incompleteYield();
//return undefined
console.log(generator.next());
//return Welcome to GFG
console.log(generator.next());
/*if we stop here, it will be done remains false as we have not called next
so that "Hello World" is still left there to process*/
//return undefined with done as true as the calling generatior funnction is full completed
console.log(generator.next());


function* func1() {
    yield 52;
}
function* func2() {
    yield* func1();
}
const iterator = func2();
console.log(iterator.next().value);
        // expected output: 52


function * generator1() {
    yield 2;
    yield 3;
    yield 4;
}
function* generator2() {
    yield 1;
    yield* generator1();
    yield 5;
}
const iterator1 = generator2();
console.log(iterator1.next()); // {value: 1, done: false}
console.log(iterator1.next()); // {value: 2, done: false}
console.log(iterator1.next()); // {value: 3, done: false}
console.log(iterator1.next()); // {value: 4, done: false}
console.log(iterator1.next()); // {value: 5, done: false}
console.log(iterator1.next()); // {value: undefined, done: true}


function* generator3() {
    yield* [1, 2];
    yield* '40';
    yield* Array.from(arguments);
}
const iterator2 = generator3(5, 6);
console.log(iterator2.next()); // {value: 1, done: false}
console.log(iterator2.next()); // {value: 2, done: false}
console.log(iterator2.next()); // {value: "4", done: false}
console.log(iterator2.next()); // {value: "0", done: false}
console.log(iterator2.next()); // {value: 5, done: false}
console.log(iterator2.next()); // {value: 6, done: false}
console.log(iterator2.next()); // {value: undefined, done: true}


function* gen222() {
    console.log('<br>observer:', yield 1);
}
var a = gen222();
var i = a.next();
while (!i.done) {
    console.log('<br>iterator:', i.value);
    i = a.next(100);
}


let range = {
    from: 1,
    to: 5
};
// 1. call to for..of initially calls this
range[Symbol.iterator] = function () {
    // ...it returns the iterator object with the method next():
    // 2. Onward, for..of works only with this iterator, asking it for next values
    return {
        current: this.from,
        last: this.to,
        // 3. next() is called on each iteration by the for..of loop
        next() {
            // 4. it should return the value as an object {done: Boolean, value: any}
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};
// now it works!
for (let num of range) {
    console.log('<br>', num); // 1, then 2, 3, 4, 5
}

const array = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const iteratoree = array[Symbol.iterator]();
const first = iteratoree.next().value
console.log('first: ', first);
iteratoree.next().value // Since it was skipped, so it's not assigned
const third = iteratoree.next().value
console.log('<br>third: ', third);
iteratoree.next().value // Since it was skipped, so it's not assigned
const last = iteratoree.next().value
console.log('<br>last: ', last);


const array44 = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const newArray11 = [1,...array44, 2, 3];
console.log(typeof newArray11);
console.log(newArray11);

let str = "Hello JavaScript";
// does the same as
// for (let char of str) alert(char);
let iteratorstr = str[Symbol.iterator]();
while (true) {
    let result = iteratorstr.next();
    if (result.done) break;
    console.log(' ', result.value); // outputs characters one by one
}


let arrayLike = { // has indexes and length => array-like
    0: "Hello",
    1: "World",
    length: 2
};


// Error (no Symbol.iterator)
//for (let item of arrayLike) {
//    document.write(' ', item);//TypeError :arraylike is not iterable
//}

let arr = Array.from(arrayLike); // takes the arraylike object
alert(arr.pop()); // array-like

let str = 'ab😂cd';
// splits str into array of characters
let chars = Array.from(str);
document.write(' ', chars[0]); // a
document.write(' ', chars[1]); // b
document.write(' ', chars[2]); // 😂
document.write(' ', chars[3]); // c
document.write(' ', chars[4]); // d
document.write(' length= ', chars.length); // 5


const array = ['Jan', 'Feb', 'Mar'];
const it = array[Symbol.iterator]();
// and on this iterator method we have ‘next’ method
document.write(JSON.stringify(it.next()));
//{ value: "Jan", done: false }
document.write('<br>', JSON.stringify(it.next()));
//{ value: "Feb", done: false }
document.write('<br>', JSON.stringify(it.next()));
//{ value: "Mar", done: false }
document.write('<br>', JSON.stringify(it.next()));
            /* Actual it.next() will be { value: undefined,
done: true } but here you will get
{done: true} output because of JSON.stringify
as it omits undefined values*/


var iterableObj = {
    i: 0,
    [Symbol.iterator]() {
        var that = this;
        return {
            next() {
                if (that.i < 5) {
                    return { value: that.i++, done: false }
                } else {
                    return { value: undefined, done: true }
                }
            }
        }
    }
}
for (let itemValue of iterableObj) { document.write(itemValue) }

const array = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
const arrIterator = array[Symbol.iterator]();
for (let value of arrIterator) { document.write(value) }
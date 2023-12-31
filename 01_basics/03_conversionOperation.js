/*********************************Conversion************************************/

let score="33"
console.log(typeof score)

let valueToNumber = Number(score)
console.log(typeof valueToNumber)

// "33" --> 33
// "33abc" --> NaN
// true --> 1

let isLogged = 1
let booleanIsLogged = Boolean(isLogged)
console.log(booleanIsLogged)

// 1 ---> ture
// "" ---> flase
// "anu"---> true

let num = 12
let StringNum = String(num)
console.log(typeof StringNum)

/*********************************Operation************************************/

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

/* If used postfix, with operator after operand (for example, x++), 
the increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for example, ++x), 
the increment operator increments and returns the value after incrementing.*/

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

/******************************* Number ******************************/ 
const num = 399
const num1 = new Number(399)

console.log(num);
console.log(num1)
console.log(num1.toString().length);

const num2=123.894
console.log(num2.toPrecision(3))

const num3=10000000
console.log(num3.toLocaleString('en-IN'))

const num4=123
console.log(num4.toFixed(2))

/******************************* Maths ******************************/ 

console.log(Math)
console.log(Math.abs(-9))
console.log(Math.pow(2,3))
console.log(Math.round(2.4))
console.log(Math.sqrt(16))
console.log(Math.max(1,4,8,2,9))

console.log(Math.random())
console.log(Math.floor(Math.random()*10))

const min=10;
const max=20;
console.log(Math.floor( ( (Math.random()*(max-min+1) +min) ) ) )
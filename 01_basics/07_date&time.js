// Dates 

let date = new Date();
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(typeof date);

let myDate = new Date(2023, 0 ,21)
let myDate1 = new Date("2023-01-12")
//console.log(myDate.toDateString())
//console.log(myDate1.toDateString())

// TimeStamp from janurary 1 1970 in millisecond
let timeStamp = Date.now();
console.log(timeStamp)
console.log(Math.round(timeStamp/1000)) // seconds

timeStamp.toLocaleString('default', {
    weekends:'long',
})
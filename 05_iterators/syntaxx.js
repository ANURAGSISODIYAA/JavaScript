// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//      break and continue
// }


// while (condition) {   
// }


// do {   
// } while (condition);


// const arr =[1,2,3,4,5]
// const greet = "Hello world"
// for (const char of greet) {
//     console.log(char);
// }


// const map = new Map();
// map.set("1", "banana")
// map.set("2","Apple")
// console.log(map);
// for (const [key,value] of map) {
//  console.log(key,value);
// }


// const myobject ={
//     1:"portfolio",
//     2:"cricwhizz",
//     3:"Social media",
// }
// for (const key in myobject) {
//     console.log(key,myobject[key]);
// }


// const lang = ["java", "js", "cpp"]
// lang.forEach( function (name){
//     console.log(name);
// })



// const tech = [
//     {
//     lname:"java",
//     sname:"jv"
//     },
//     {
//     lname:"Script",
//     sname:"js"
//     },
//     {
//     lname:"pyhton",
//     sname:"py"
// }
// ]
// tech.forEach( (item)=>{
//     console.log(item.lname);
// })

const arr = [1,2,3,4,5,6,7,8,9,0]
let number = arr.filter( (num) => num<6)
let number1 = arr.filter( (num) => {
   return num>6;
})
console.log(number1);
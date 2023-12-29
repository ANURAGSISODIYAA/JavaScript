const arr1=["A","B","C"]
const arr2=["D","E","F"]

arr1.push(arr2)
console.log(arr1);

const arr3 = arr1.concat(arr2);
console.log(arr3)

const arr4 = [...arr1,...arr2]
console.log(arr4);

console.log(Array.isArray("Anurag"));
console.log(Array.from("Anurag"));
console.log(Array.from({name: "Anurag"})); //intresting

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));





const arr = [1,2,3,4,5]
const arr1 = new Array(1,2,3,4)

// Array Methods
arr.push(6)
arr.pop()
arr.unshift(8) // add at first index and shif remaining
arr.shift()  // remove the first element
arr.includes(99)
arr.indexOf(3)
arr.join() // converts into string

// slice and splise 
const myArr=[0,1,2,3,4,5]
console.log("A",myArr)

console.log("B",myArr.slice(1,3)) //end index is not incuded
console.log(myArr) //Does not change the original array 

console.log("C",myArr.splice(1,3)) //and end index is incuded
console.log(myArr) //Does change the original array 



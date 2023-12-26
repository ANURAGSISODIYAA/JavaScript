// Comparing same datatypes are easy to predict 
 // console.log(2 > 1);
 // console.log(2 >= 1);
 // console.log(2 < 1);
 // console.log(2 == 1);
 // console.log(2 != 1);

// == checks for equality with type conversion.
console.log("2" == 2);

// === checks for strict equality without type conversion.
console.log("2" === 2);



// Don't compare different data types

console.log("2" > 1);  //true
console.log("02" > 1); //false

console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined == 0); //false
console.log(undefined > 0);  //false
console.log(undefined < 0);  //false

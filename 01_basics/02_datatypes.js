// primitve dtatatype
// 7 types : Stirng , Number , Boolean, null, undefined, symbol, BigInt

/*Dynamically-typed languages are those (like JavaScript) 
where the interpreter assigns variables a type at runtime based
 on the variable's value at the time.*/

// Non-primitve datatype OR refrence datatype
// Array , Objects ,Functions


// Number
let num = 42

// String
let name="Anurag"

// Boolean
let asian=false

// undefined
let age;

// null (Object Type)
let Degree=null

// Symbols are unique and immutable values.
let sym = Symbol('description');

// BigInt (Undefined type)
let n = 123345822347469833n

//Object:Represents a collection of key-value pairs
let person = {
    name: "John",
    age: 30,
    isStudent: false
  };

// Array  (Object type)
let numbers = [1, 2, 3, 4, 5];

// Functions 
const sum = function add(a, b) {
  return a + b;
}

// Stack(Primitve) And Heap(Non-primitve)

// Primitive data types (e.g., numbers, booleans, and references to objects) 
// are stored directly in the stack.(Stack me copy milta hai )

// let number = 42; // The value 42 is stored directly in the stack

//When you create an object, memory is allocated in the heap, and 
//a reference to that object is stored in the stack.(heap me copy nhi milta refrence milat mltb original value change ho jaygi )

 // let obj = { key: 'value' };
 // The object is stored in the heap, and a reference is stored in the stack

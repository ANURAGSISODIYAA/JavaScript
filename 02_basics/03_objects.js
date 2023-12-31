//singelton
//Object.create

//Object literals

const mySym = Symbol("myKey")

const jsObj = {
    name:"Anurag",
    "full name":"Anurag Sisodiya", // Another way to declear key
    [mySym]:"myKey1", // for Symbol
    age:20,
    address:"Indore",
    email:"anurag@123.com",
    isLogged:false,
    lastLogin:["Mon","Fri"]                    

}

// How to acess
console.log(jsObj.name) 
console.log(jsObj["name"]);
console.log(jsObj["full name"]); 
console.log(jsObj[mySym]);  

//How to change
jsObj.age=21

//lock the object
//Object.freeze(jsObj)

jsObj.greeting = function(){
    console.log("Hola Amigo");
}
jsObj.greeting2 = function(){
    console.log(`String interpulation, ${this.address}`);
}

jsObj.greeting()
jsObj.greeting2()
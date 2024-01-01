// const InstUser = new Object(); Singelton
 const InstUser ={} 

 InstUser.name="John"
 InstUser.id="xyz@123"
 InstUser.isLoggedIn=false

//console.log(InstUser);

//nested
const User={
    email:"123@gmail.com",
    fullname:{
          username:{
              firstname:"Amurag",
              lastname:"Sisodiya"
          }
    }
}
//console.log(User.fullname.username.firstname)

// add two objects
const o1={ 1:"a", 2:"b"}
const o2={ 3:"c", 4:"d"}

//const o3=Object.assign(o1,o2)
const o3 = {...o1,...o2}
//console.log(o3);

const users=[
    {
        id:1,
        name:"sam",
        email:"123@xyz"
    },
    {
        id:2,
        name:"saam",
        email:"1234@xyz"},
    {
        id:3,
        name:"saaam",
        email:"12345@xyz"}
]

//console.log(users[1].email);

console.log(Object.keys(InstUser));
console.log(Object.values(InstUser));


// Object Destructuring

const myStack={
    frontend:"javascript & React",
    backend:"java & Springboot",
    database:"mySql"
}

// myStack.frontend
const {frontend: front} = myStack
//console.log(frontend);
console.log(front);

const user={
    username:"Anurag",
    age:12,
    welcomeMessage: function(){
      console.log(`${this.username}, Welcome to x`);
      console.log(this);
}
}

//  user.welcomeMessage()
//  user.username="chaman"
//  user.welcomeMessage()
//  console.log(this);

// const chai = function () {
//     console.log("pello");
// }

const chai =  () => {
        console.log("pello");
    }
 //chai();

// const addTwo = (num1, num2) =>{
//     return num1+num2;
//  }

// const addTwo = (num1, num2) => (num1+num2)
const addTwo = (num1, num2) => ({ username : "anu"})

 console.log(addTwo(3,4));
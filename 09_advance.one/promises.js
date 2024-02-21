// const promiseOne = new Promise(function(resolve,reject){

//     setTimeout(function(){
//         console.log("Aysn task is complete");
//         resolve();
//     },1000)
// })

// promiseOne.then(function(){
//         console.log("promise consumed");
// })

// new Promise(function(resolve,reject){

//     setTimeout(function(){
//         console.log("Aysn task is complete");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("promise consumed");
// })


// const promiseThree = new Promise(function(resolve,reject){
//           setTimeout(()=>{
//             console.log("Async task is complete");
//             resolve({Name:"Anurag",lang:"Javascript"});
//           })
// })

// promiseThree.then(function(){
//     console.log(user)
// })

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(()=>{
      let error = false;
      if(error){
        resolve({Name:"Anurag",lang:"Javascript"});
      }else{
        reject("ERROOOOOOOOOOOR")
      }
     
    })
})

promiseFour.then(function(user){
console.log(user)
return user.Name;
}).then((Name)=>{
    console.log(Name);
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("The Promise either rejected or resolved ");
})
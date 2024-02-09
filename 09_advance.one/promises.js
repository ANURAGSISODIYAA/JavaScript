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


const promiseThree = new Promise(function(resolve,reject){
          setTimeout(()=>{
            console.log("Async task is complete");
            resolve({Name:"Anurag",lang:"Javascript"});
          })
})

promiseThree.then(function(user){
    console.log(user)
})
var c = 300;
if(true){
    let a=10;
    const b=20;
    var c=30;
}

// console.log(a); not defined
// console.log(b); not defined
//console.log(c);

function one(){
    const username="Anurag";
      function two(){
         const userage=20;
         console.log(username);
      }
      //console.log(userage);
      two()
}

//one()

//console.log(num1(4));

function num1(num) {
    return num+1;
}


//console.log(num2);

const num2 = function(num){
    return num+2;
}
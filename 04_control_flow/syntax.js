// if-else
if(true){

}else if(flase){

}

// Swich case
switch (key) {
    case value:
        
        break;

    default:
        break;
}

//falsy values
//false, 0, -0, BigInt On, "", null, undefined, NaN

//truthy value
//"0", 'false', " ", [], {}, function(){}  

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Empty object");
}


//Nullish Coalescing operator ?? null,undefined
// let val;
// val = 5 ?? 10  -->5
// val = null ?? 15 -->15
// val = undefined ?? 20 ---->20

// Ternary Operator
condition ? true : false
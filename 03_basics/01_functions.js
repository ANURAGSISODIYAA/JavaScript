
function myName(){
    console.log("Anurag");
}
//myName();

function addTwoNum(number1, number2){
    console.log(number1+number2);
}
//const result = addTwoNum(3,4);
//console.log(result); //undefined

function addTwoNum(number1, number2){
    let result = number1+number2
    return result
}
const result = addTwoNum(3,4)
//console.log(result);

function userLogged(username=""){
    console.log(`user ${username} logged`);
}
//userLogged("Anurag")

function cartPrice(...num){
    return num;
}
console.log(cartPrice(100,200,300));

const user={
    username:"mobile cover",
    price:120
}

function udetail(anyObject){
    console.log(`${anyObject.username} has a price ${anyObject.price}`);
}

udetail(user)
//direct object pass
udetail({
    username:"thomas",
    price:0
})

const arr=[12,35,46,66]

function getValue(array){
    return array[2]
}
console.log(getValue(arr));
console.log(getValue([100,200,300,400]));
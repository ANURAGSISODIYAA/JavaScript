const name  = "Anurag"
const repoCount = 50

// Old way
console.log(name + repoCount + " Sisodiya");

//Modern way
console.log(`My name is ${name} and My repocount is ${repoCount}`);

//Another way to decleare String
const appName = new String("Discord")

// Methods of String
console.log(appName)
console.log(appName[0])
console.log(appName.__proto__)
console.log(appName.length)
console.log(appName.toUpperCase())
console.log(appName.charAt(5))
console.log(appName.indexOf('r'))

const s = "    Anu   ";
console.log(s)
console.log(s.trim())

const url = "http//Anurag@123/get"
console.log(url.replace('@1','#4'))
console.log(url.includes("nura"))
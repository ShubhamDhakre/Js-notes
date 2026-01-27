console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) //true

console.log(undefined == 0)// false
console.log(undefined > 0)// false
console.log(undefined < 0)// false


let name = Symbol("Shubham")
let name2 = Symbol("Shubham")
console.log(name ===name2)   // false

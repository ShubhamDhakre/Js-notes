let num1 = 10;

if (true) {
   
   console.log("Inside block:", num1); // 20
}   
console.log("Outside block:", num1); // 10


let num2 = 10;

if (true) {
    let num2 = 20; // block-scoped variable
    console.log("Inside block:", num2); // 20
}   

console.log("Outside block:", num2); // 

const obj1 ={
    name: "Alice",
    age: 25 , 
    funs : function(){
    console.log(this.name);
    console.log(this.age);
     }
}
obj1.funs()

const add = () => {return {name:10}}

console.log(add())

//..falsly values in JavaScript
  //..false
  //..0
  //.."" (empty string)
  //..null
  //..undefined
  //..NaN
  //..-0


//..truthy values in JavaScript
    //..true
   //..non-zero numbers (e.g., 1, -1, 3.14)
  //..non-empty strings (e.g., "false", "0")
  //..objects (e.g., {}, [])
 //..functions (e.g., function() {})
//..arrays (e.g., [1, 2, 3])


//.....array is empty 
const arr = [];

if (arr.length) {
    console.log("Array is not empty");
} else {
    console.log("Array is empty");
}

//....object is empty
const obj = {};
if (Object.keys(obj).length) {
    console.log("Object is not empty");
} else {
    console.log("Object is empty");
}

//..null coalescing operator (??)
let userInput = null;
let defaultValue = "Default Value"; 
let result = userInput ?? defaultValue;
console.log(result); // Output: "Default Value" // 10

userInput = "User Value";
result = userInput ?? defaultValue;
console.log(result); // Output: "User Value" // User Value


//...ternary operator
let age = 20;
let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log(canVote); // Output: Yes, can vote  
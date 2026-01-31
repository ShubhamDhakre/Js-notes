//..function declaration
function greet(name) {
    return `Hello, ${name}!`;
}   
console.log(greet("Shubham")); // Hello, Shubham!

//..function expression 
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3)); // 8    

//..arrow function
const multiply = (a, b) => a * b;
console.log(multiply(4, 6)); // 24

//..arrow function with single parameter
const square = (x) => x * x;
console.log(square(5)); // 25

//..arrow function with no parameter
const greetUser = () => "Hello, User!";

console.log(greetUser()); // Hello, User!

//..function with default parameters    
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}
console.log(power(3)); // 9
console.log(power(2, 3)); // 8

//..rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

//.. rset parameters with arrow function
const shopingList = (...items) => {
    console.log(typeof items); // object (array)
    return `You have ${items.length} items in your shopping list.`;
}
shopingList("Apples", "Bananas", "Oranges"); // You have 3 items in your shopping list.



//@@@ in arrow function this keyword only gives empty object
//@@@ in no normal function this keyword gives other info 
//@@@ we have to give semicolon after iife function to avoid error

 
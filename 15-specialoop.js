/////////////////////////////////...for of loop...//////////////////////////////
let colors = ['red', 'green', 'blue'];

for (let color of colors) {
    console.log(color);
}   //...The for...of loop is used to loop through values of 
    // iterable objects like arrays, strings, maps, sets, nodeLists

    //......................string...................... 

let str = "Hello";

for (let char of str) {
    console.log(char);
}     //...The for...in loop is used to loop through the properties of an object
 
//.............'object'.......................
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
for (let key of Object.keys(person)) {
    console.log(key, person[key]);
}                //....it directly doesn't work on objects, we use Object.keys() to get an array of keys

///......map.................
const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
for (let [key, value] of map) {
    console.log(key, value);
}   

//......set.................
const set = new Set([1, 2, 3, 4, 5]);   
for (let value of set) {
    console.log(value);
}
//......nodeList.................
const nodeList = document.querySelectorAll('div');
for (let node of nodeList) {
    console.log(node);
}

//////////////////////////////////...for in loop...//////////////////////////////
///.............array.................
let fruits = ['apple', 'banana', 'cherry'];

for (let index in fruits) {
    console.log(index, fruits[index]);
}
//.............string.................
let message = "Hi"; 
for (let index in message) {
    console.log(index, message[index]);
}
//.............'object'.......................
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
for (let key in car) {
    console.log(key, car[key]);///.....we cant use for in loop in map , set and nodeList

}



///....'.for each()' loop....//////////////////////////////
//for each loop manly use in array,map and set
// and not use in object, string and nodeList
//..for each doesnt return any value

//.............array.................
let numbers = [10, 20, 30];
numbers.forEach(function(num, index) {
    console.log(index, num);
}
);
//.............map.................
const myMap = new Map();        
myMap.set('x', 100);
myMap.set('y', 200);
myMap.forEach(function(value, key) {
    console.log(key, value);
}   
);
//.............set.................
const mySet = new Set([10, 20, 30]);
mySet.forEach(function(value) {
    console.log(value);
}   
);  

///////////////////////...........filter loop...........////////////////////////////////
//....filter loop is used to create a new array with all elements that pass the test implemented by the provided function
//.............array...................
let nums = [1, 2, 3, 4, 5, 6];
let evenNums = nums.filter(function(num) {
    return num % 2 === 0;
}
);
console.log(evenNums); // [2, 4, 6]
//.............object...................
const employees = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 30 }
];                                      
let olderEmployees = employees.filter(function(employee) {
    return employee.age > 30;
}
);
console.log(olderEmployees); // [{ name: "Bob", age: 35 }]  
//.............map and set dont have filter method directly
// but we can convert them to array and then use filter
//.. we can use spread operator to convert set and map to array

//.............map...................
const numMap = new Map();
numMap.set('a', 1);
numMap.set('b', 2);
numMap.set('c', 3);
let filteredMap = [...numMap.entries()].filter(([key, value]) => value > 1);
console.log(filteredMap); // [['b', 2], ['c', 3]]


//.............set...................
const numSet = new Set([1, 2, 3, 4, 5]);
let filteredSet = new Set([...numSet].filter(value => value > 2));
console.log(filteredSet); // Set {3, 4, 5}
///////////////////////...........map loop...........////////////////////////////////
//....map loop is used to create a new array with the results of calling a provided function on every element in the calling array
//.............array................... 

/////////////......map
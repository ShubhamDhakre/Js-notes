let marvel_heroes = ['Ironman', 'Captain America', 'Thor', 'Hulk', 'Black Widow']
let dc_heroes = ['Batman', 'Superman', 'Wonder Woman', 'Flash', 'Aquaman']

console.table(marvel_heroes+dc_heroes) //.. it will concat two arrays and give new array

console.log(marvel_heroes.concat(dc_heroes)) //.. it will also concat two arrays and give new array

console.log(marvel_heroes.join(' | ')) //.. it will join all array elements with given separator and give string


//...spread operator
let all_heroes = [...marvel_heroes, ...dc_heroes]  //.. it will merge two arrays and give new array
console.log(all_heroes)
let more_heroes = ['Spiderman', 'Wolverine', ...marvel_heroes, 'Cyborg', ...dc_heroes]  //.. it will merge two arrays with additional elements and give new array
console.log(more_heroes)

//... destructuring of array
const arr = [10, 20, 30];

const [a, b, c] = arr;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
//... if we want to skip some values
const [x, , y] = arr;

//..arrays form string
let name = "Shubham"
let nameArray = Array.from(name)  //.. it will convert string to array of characters
console.log(nameArray)

//..Array.of()
let numbers = Array.of(1, 2, 3, 4, 5)  //.. it will create array from given values
console.log(numbers)

//..Array.isArray()
console.log(Array.isArray(numbers))  //.. it will check if the given value is array or not and return boolean
console.log(Array.isArray(name))  //.. it will check if the given value is array or not and return boolean

//..Array.fill()
let filledArray = new Array(5).fill(10)  //.. it will create array of given size and fill it with given value
console.log(filledArray)
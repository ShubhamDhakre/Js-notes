//..objects singleton

//..onjects literals
let user = {    //...object define
  name: "Shubham",
  age: 23,
  isAdmin: true,
};

//..accessing object properties
console.log(user);
console.log(user.name);  //... accessing specific property
console.log(user["age"]);  //... accessing specific property using bracket notation
                         // we can dfine as age it must be like this user["age"]

//..defining symbol in object
let sym = Symbol("id");
let user2 = {
  name: "Rohit",
  age: 25,
  [sym]: 123,   //... defining symbol property
};
console.log(user2);
console.log(user2[sym]);  //... accessing symbol property

//..object in a object
let employee = {
  EmpId: 101,
  EmpName: {
    firstName: "John",
    lastName: "Doe",
  },
  EmpAge: 30,
};
console.log(employee);
console.log(employee.EmpName.firstName);  //... accessing nested object property
console.log(employee["EmpName"]["lastName"]);  //... accessing nested object property using bracket notation

//..adding new property to object
user.location = "India";  //... adding new property
console.log(user);

//..deleting property from object
delete user.isAdmin;  //... deleting property
console.log(user);
  
//..spread operator in objects
let user01 = {
  name: "Alice",
  age: 28,
};

let user02 = {
  location: "USA",
  profession: "Engineer",
};

let mergedUser = { ...user01, ...user02 };  //... merging two objects
console.log(mergedUser);

//..destructuring of objects
const person = {
  firstName: "Jane",
  lastName: "Smith",
  age: 32,
};  
const { firstName, lastName, age } = person;  //... destructuring object

console.log(firstName); // Jane
console.log(lastName);  


//....key ,value and entities
console.log(Object.keys(person));  //... getting all keys of an object
console.log(Object.values(person));  //... getting all values of an object
console.log(Object.entries(person));  //... getting all key-value pairs of an object

//..Object.seal()
//..object.freeze()
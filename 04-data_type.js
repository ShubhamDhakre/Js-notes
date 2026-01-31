   //.....primitive data types 
   console.log(".....Primitive Data Types....")
    
   // String 
   // Number
   // boolean
   // null
   // undefined
   //symbol
   // BigInt

   let name = "Shubham"  // string literal
   let age = 23;  // number literal
   let isApproved = false;  // boolean literal
   let firstName = null;  // null literal
   let lastName;  // undefined literal
   let symbol = Symbol("id")  // symbol literal
   let bigInt = 1234567890123456789012345678901234567890n  // BigInt literal
    console.log(typeof name)
    console.log(typeof age)
    console.log(typeof isApproved)
    console.log(typeof firstName)
    console.log(typeof lastName)
    console.log(typeof symbol)
    console.log(typeof bigInt)

    //.....non primitive data types
     console.log(".....Non Primitive Data Types....")

    // Object
    // array
    // function

    let myarray = [1,2,3,4,5]  // array literal
    console.table(myarray)
    console.log(typeof myarray)

    let person = {             // object literal
        name: "Shubham",
        age: 23
    }
    console.table(person)
    console.log(typeof person)
     
    let func = function(){    // function literal
        console.log("Hello World")
    }
         func();
    console.log(typeof func)

    function greet() {
  console.log("Hello");
}
      greet();


// arrow function
const greetArrow = () => {
  console.log("Hello from arrow function");
};

    greetArrow();



     
    
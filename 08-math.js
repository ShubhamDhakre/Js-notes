//..........Maths Object methods
    //.. Math is a built-in object that has properties and methods for mathematical constants and functions.
    //.. Math.PI
    console.log(Math.PI)  //.. it will give the value of PI

    //.. Math.round()
    console.log(Math.round(4.6)) //.. it will round the value to nearest integer
    console.log(Math.round(4.4)) //.. it will round the value to nearest integer

    //.. Math.ceil()
    console.log(Math.ceil(4.1))  //.. it will round the value to next integer
    console.log(Math.ceil(4.9))  //.. it will round the value to next integer

    //.. Math.floor()
    console.log(Math.floor(4.9)) //.. it will round the value to previous integer
    console.log(Math.floor(4.1)) //.. it will round the value to previous integer   

    //.. Math.sqrt()
    console.log(Math.sqrt(16))  //.. it will give the square root of the number
    console.log(Math.sqrt(20))  //.. it will give the square root of the number

    //.. Math.abs()
    console.log(Math.abs(-7.8)) //.. it will give the absolute value of the number
    console.log(Math.abs(7.8))  //.. it will give the absolute value of the number

    //.. Math.pow()
    console.log(Math.pow(2,3))  //.. it will give the value of base raised to exponent (2^3)
    console.log(Math.pow(3,4))  //.. it will give the value of base raised to exponent (3^4)

    //.. Math.min()
    console.log(Math.min(4,1,7,9,0,-3)) //.. it will give the minimum value among the numbers
    console.log(Math.min(10,20,5,15))   //.. it will give the minimum value among the numbers

    //.. Math.max()
    console.log(Math.max(4,1,7,9,0,-3)) //.. it will give the maximum value among the numbers
    console.log(Math.max(10,20,5,15))   //.. it will give the maximum value among the numbers
    
    //.. Math.random()
    console.log(Math.random())  //.. it will give a random number between 0 and 1
    console.log(Math.random()*100) //.. it will give a random number between 0 and 100
    console.log(Math.floor(Math.random()*100)) //.. it will give a random integer between 0 and 100


    const min = 10 
    const max = 20 
    console.log(Math.floor(Math.random() * (max - min + 1)) + min) //.. it will give a random 
                                                                  // integer between min and max (10 to 20)

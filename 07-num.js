const num = Number(22)
console.log(num)
console.log(typeof num)

const num2 = String(num)   //..numbwer to string
console.log(num2)          //.. and can be able to use string methods
console.log(typeof num2)

//....Number methods 
   //.. toFixed()
   const num3 = 12.56789
   console.log(num3.toFixed(2))  //.. it will convert number to string with fixed decimal points
                                 //.. here 2 decimal points

   //.. toPrecision()
   const num4 = 12.56789
   console.log(num4.toPrecision(4))  //.. it will convert number to string with total number of digits
                                     //.. here total 4 digits

   //.. toLocaleString()
   const num5 = 1234567.89
   console.log(num5.toLocaleString('en-IN')) //.. it will convert number to string with commas as per locale     
   
   
   //..MAX_VALUE and MIN_VALUE
   console.log(Number.MAX_VALUE)  //.. it will give maximum value that can be stored in number data type
   console.log(Number.MIN_VALUE)  //.. it will give minimum value that can be stored in number data type


   //..max_safe_integer and min_safe_integer
   console.log(Number.MAX_SAFE_INTEGER)  //.. it will give maximum safe integer value
   console.log(Number.MIN_SAFE_INTEGER)  //.. it will give minimum safe integer value
 


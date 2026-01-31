let myarray = [1,2,5,8,7,3,2,9,]  //..array define
console.log(myarray)  //... accessing of whole array
console.log(myarray[4])  //... accessing of specific index value
  
 //.. array makes shallow copies means its share same reference  

 myarray.push(10)  //.. adding value at end of array
 console.log(myarray)
 myarray.pop()   //.. removing value from end of array
 console.log(myarray)


myarray.unshift(11)  //... it add value in starting of the array
console.log(myarray)
myarray.shift()   //... it remove value from starting of the array
console.log(myarray)

console.log(myarray.length)  //... it will give length of array
myarray.sort()   //... it will sort the array in ascending order
console.log(myarray)

myarray.reverse()  //... it will reverse the array
console.log(myarray)

console.log(myarray.indexOf(7))  //... it will give index of specific value
console.log(myarray.includes(5))  //... it will give true if value is present otherwise false

 
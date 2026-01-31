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

//...slice and splice methods

  //..slice
let newArray = myarray.slice(2,5)  //... it will give new array from index 2 to 4 (5-1)
console.log(newArray)
console.log(myarray)  //... original array will remain same

  //..splice
let splicedArray = myarray.splice(2,3)  //... it will remove 3 elements from index 2 and return removed elements
console.log(splicedArray)
console.log(myarray)  //... original array will be modified


 
const newmap = new Map();
newmap.set('a', 1);
newmap.set('b', 2);
newmap.set('c', 3); 
console.log(newmap);
const newarray = Array.from(newmap);
console.log(newarray);

const mast = newarray.filter( (value,index)=>{
    console.log(value)
    console.log(index)
    return value


})

console.log(mast);


//////////////////////////////////////////////////////////////

let newset = new Set();
newset.add(1);
newset.add(2);
newset.add(3);
console.log(newset);
const arrayfromset = [...newset];
console.log(arrayfromset);

arrayfromset.filter( (value,index,array)=>{
    console.log(value)
    console.log(index)
    console.log(array)
    return value > 1;
})

const array1 = [ "shubham", "raj","rohit", "chetan"]

const arraya2 = array1.forEach((nav)=>{


    return nav + "dhakre"

})

console.log(arraya2)
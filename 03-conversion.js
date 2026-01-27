  let score = "33";
console.log(typeof score)  // o/p => STRING 
let score1 = Number(score)
console.log(typeof score1)  // o/p =>number
console.log(score1)

// similary true => 1 ,false -=> 0
// null => zero
// undefined => nan
// "33abc" => nan

 let score2 = null
 console.log(score2)
 let score3 = Number(score2)
 console.log(score3)
 console.log(typeof score3)
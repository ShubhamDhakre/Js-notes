const person = {
    name : "shubham",
    age : 22,
    class : "3rd year ",
    greeting : function(){
    console.log(`my name is ${this.name}`)
    }

}

console.log(person.name)
console.log(person.age)
console.log(person.class)
person.greeting()

///..................constructor function..............//

function user1(firstname,middlename,lastname,age,year)
{
  this.firstname = firstname
  this.middlename = middlename
  this.lastname = lastname
  this.age = age
  this.year = year
  return this 
}

const myname = new user1("shubham","shankar","dhakre",22,"3rd")
console.log(myname)

console.log(myname instanceof user1)

////////........class.............//
class user3 {

  constructor (name,age,email) {
    this.name = name 
    this.age = age
    this.email = email
    
} encrpt(name) {
    return this.name+"abc" 
    
  }
}

const shubham = new user3("shubham","23","shubham@gmail.com")
console.log(shubham)
console.log(shubham.encrpt())



///////////////////...........inheritance ........../////////
class staff {
  constructor (name,age,yearofexperience,post){
    this.name = name
    this.age = age
    this.yearofexperience = yearofexperience
    this.post = post
  }
}

 class teacher extends staff {
  constructor(name,age,yearofexperience,post,teachingsubject){
     super(name,age,yearofexperience,post)
     this.teachingsubject = teachingsubject
  }
 }  
    const raj = new staff("raj",22,2,"junior")
    console.log(raj)
    const rohit = new teacher("rohit",22,3,"senior","physics")
    console.log(rohit)

    console.log(rohit instanceof teacher)
    console.log(raj instanceof staff)
    console.log(teacher instanceof staff)

    /////..........static ................//////


    class employee {
      constructor(name,age,email){
        this.name = name 
        this.age = age
        this.email = email
      } 
    static  password2(){   /// static key prevents to use the function of the class
        return this.name + "abc"
      }
    }

    const saurabh = new employee("saurabh",20,"saurabh@gmailcom")
    console.log(saurabh)
//console.log(saurabh.password2())

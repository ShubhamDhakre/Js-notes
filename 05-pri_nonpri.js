
    //.. premitive data type uses stack memory (pass by value  )
    //.. non premitive data type uses heap memory ( pass by referials )

    let name = "Shubham"
    console.log(name)
    let name2 = name
    console.log(name2)
    name2 = "Rohit"
    console.log(name)
    console.log(name2)
    

    // ... in primitive or we can says in stack it give us copy of the value 
    //... so if we change the value that is assign to other variable ,original value cant change it remains change 


    let obj1 = {
        name: "Shubham",
        age: 23
    }

console.table(obj1)

    let obj2 = obj1
    console.table(obj2)
    obj2.name = "Rohit"
    console.table(obj1)
    console.table(obj2)     

    //... in heap reference is given , so if we change the value of variable which is obtain from another 
    //.. then it also changes original 
    



///@@....for selecting tag in html on the basic of 
///....class , tagname ,id 
let div0 = document.getElementsByTagName("div")
let div1 = document.getElementsByClassName("div1")
let div2 = document.getElementById("div2")
let div3 = document.querySelector(".div3")

///@@...changing content of div 
div0[0].innerText = "hello"
div1[0].innerContent= "i am shubham" //..also include 
                                    //..hidden text
div2.innerHTML = "<h1>world</h1>"

///@@...for changing css property 
div2.style.backgroundColor = "#ffffff"
div0[0].style.fontSize = "40px"//..directy change attribute
div1[0].classList.add("div5"); //to add class to element 
div1[0].classList.remove("div5");//to remove class from element
div1[0].classList.toggle("div5");//.for toggle purpose 
div2.classList.contain("mast")//it return boolean value on the basic of class
                              //.if element has a particular then it return true  
                              // else it return false



//@@ ..creating element 
const div5 = document.createElement("div")

//@@ adding element
document.body.append(div5)
            //other method
            //parent.appendChind(child)
            //parent.prepend(child)
            //parent.insertBefore


//..remove element 
   body.removeChild(div5)
  //.div5.remove();


//@@ Dom traversal
  //element.parentElement;
  //element.children;
  //element.firstElementChild;
  //element.lastElementChild;
  //element.nextElementSibling;
  //element.previousElementSibling;

  //..element.addEventListener('type', listener, options)
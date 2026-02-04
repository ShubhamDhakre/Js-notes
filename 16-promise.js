///...A Promise is an object that represents a value that will be available in the future.
//Not now
//Not failed yet
//But promised to come later
//..promise have 3 states

//1//  pending ...means promise is in  pending states 
//2//  fullfilled ..means promise is successed 
//3//  rejected ..promised has been rejected 




const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});    //..promise take a callback function which cantain two parameters 
    //.. first one is resolve and reject 
    //.. resolve() contains ONE value — the final successful result of the Promise
    //..and this result is obtain in .then block which takes a callback function 
    //..reject() marks a Promise as FAILED and sends one error/reason to .catch().

myPromise.then((value)=>console.log(value)).catch((error)=>console.log(error))    


//....we can also use async a wait function 
    async function getData() {
    try {
        const data = await myPromise;                               
        console.log(data);
    } catch (err) {
        console.error(err);
    }
    }
getData()
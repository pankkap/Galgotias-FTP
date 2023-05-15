// Promise: It is used for ES6
// 1. Promise is an Object, that return a value that hope to recieve in futre
// 2. Promise is well suited fo Asynchronou Programming
// 3. Promise is a way of Communication with API
// 4. Prmise has tree states: Pending, Fullfilled, and Rejected


var sayHi = ()=>{
    return new Promise((resolve, reject)=>{

        let res = true
        if(res)
        {
            resolve("Yes! completed my Pomised")
        }
        else
        {
            reject("I Failed my Pormise")
        }
    })
}
// Handle or consume the Promise when it recieved
sayHi().then(res=>console.log(res)).catch(err=>console.log(err))

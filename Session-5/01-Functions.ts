// Named function
function add(x:number,y:number):number
{
    return x+y;
}
console.log(add(5,10))

// Anonymous Function
let myAdd = function(x:number,y:string):string{
    return x+y;
}
console.log((myAdd(5,"10")))

// Arrow Function
let myAdd1 = (x:number,y:number):number=>x+y;
console.log(typeof(myAdd1(10,15)))


function printMsg(msg:string):void{
    console.log(msg);   
}
printMsg("Hello Faculties")

function getTime():any{
    // return new Date().toLocaleString()
    // return new Date().toLocaleDateString()
    return new Date().toLocaleTimeString()
}
console.log(getTime())

// Handle Optional Argument
// function sum(a:number, b:number, c?:number):number
// function sum(a:number, b:number, c:number=0):number
// {
//     // return a + b + (c || 0)
//     return a + b + c
// }

// console.log( sum(5,10))


function sum(a:number, b:number, ...data:number[]):number
{
    return a + b + data.reduce((p,q)=>{return p+q})
}

console.log( sum(5,10,1,3,4,5,10,20))
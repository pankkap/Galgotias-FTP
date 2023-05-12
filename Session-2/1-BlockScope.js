// ES5 -> We can create a variable using var keyword only, which is functional scope

// ES6-> we use let keyword to create a variable

// for(let i =0;i<=10;i++)
// {
//     console.log(i)
// }
// console.log("Outside the Block")
// console.log(i)

// shortcut for commenting and uncommenting ctr + /

// 1. function scope 
// 2. Global scope
// 3. Block Scope

var x = 20

function sayhello()
{
    // var x = 10;                 // function Scope using var
    console.log(x)
    if(true)
    {
        // let x = 15              // Block scope using let Only
        console.log(x)
    }
    console.log(x)

}

console.log(x)

sayhello()


// const keyword: creating a constant variable

// const age = [30,40,50]
const age = Object.freeze([10,20,30]);
age.push(60)
console.log(age)

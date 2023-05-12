function add(x,y){
    return x+y
}

// let addition = function(x,y){ 
//     return x + y
// };


let addition = x =>  {
    console.log("hello")
    return x + x
};


// console.log( addition(5))
    

var names = [" ", "Peter", "Parker", "Galgotias"]
names.forEach((i)=>{
    console.log( i.length)
})

let lengths =names.map((i)=>{
    return i.length
})

console.log(lengths)
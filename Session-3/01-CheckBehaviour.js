console.log("first statmemt")
console.log("second statmemt")

setTimeout(() => {
   
    var result =0
for (var i =0;i<10000000000;i++)
{
    result = result + i;    
}
console.log(result)


}, );


console.log("third statmemt")

var x = setInterval(function(){
    console.log("hello")
},3000)

setInterval(()=>{
    console.log("bye")
},2000)

clearInterval(x)
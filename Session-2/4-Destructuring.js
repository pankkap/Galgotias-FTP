var odd = [1,3,5,7,9,11]
// let a = odd[0]
// let b = odd[1]
// let c = odd[2]
// let d = odd[3]
// let e = odd[4]

// Destructuring of Array

// let[a,b,c,d,e,f] = odd
// for Select destructuring
let[a,b,,,,f] = odd


let person = {
    name: "Sarah",
    country: "Nigeria",
    job: "Developer",
  };
// Destructure an Object
let {name, country, job} = person

  console.log(name)
  console.log(country)
  console.log(job)
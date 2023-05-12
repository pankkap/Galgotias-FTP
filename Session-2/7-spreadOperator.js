const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second)

// Spread Operator : Unpack the values
console.log(...first)
const combined = [...first,'A', ...second,'B']



console.log(combined)


function display(a,b,c)
{
  console.log(a,b,c)
}

display(...first)
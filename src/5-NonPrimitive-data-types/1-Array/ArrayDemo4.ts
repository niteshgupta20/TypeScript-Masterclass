// How to create copy of an array

let x: number[] = [101, 102, 103, 104];
let data = x;

console.log(x);
console.log(data);

const y: number[] = [...x];

x.push(105);

console.log(x);
console.log(data);
console.log(y);

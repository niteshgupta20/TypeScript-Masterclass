// Type Aliasing for function parameters and signature
type Calculator = (a: number, b: number) => number

const add: Calculator = (a, b) => a+b;
const multiply: Calculator = (a, b) => a*b;

console.log(add(3,2));
console.log(multiply(4,2));
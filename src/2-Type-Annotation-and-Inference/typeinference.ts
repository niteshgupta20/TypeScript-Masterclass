let name: string = "Jatin"
let age: number = 35

let isActive = true // Type inference 
// Looking at the value the TS can decide what should be the type of the variable.

// isActive = "Raj";

function add(no1: number, no2: number): number{
    return no1+no2;
}

let answer = add(10, 20);
// answer = "java";

type User ={
    name: string,
    id: number
}

const user: User = {
    name: "Jatin",
    id: 2321
}
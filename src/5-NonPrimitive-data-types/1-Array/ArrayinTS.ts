// How to create an array in TS

let empNames: string[] = ['Jatin', 'Raj', 'Uday']
empNames.push('kajal');

empNames.forEach((name) => {
    console.log(name);
})

// Remove an element from the array js/ts
let data: string | undefined = empNames.pop();
console.log("data", data);

console.log("-----------------")

console.log(empNames);
// Primitive Data Types

/*
- string
- number
- boolean
- bigInt
- Symbol
 */

let empName: string = "Jatin";
empName = empName + "Sharma";

let empAddress =
`
${empName}
D 404 Utsav Homes
Pune Maharastra
India
`

console.log(empName);
console.log(empAddress);



let empId: number = 101;
let empSalary: number = 75000;
let empAttendancePercentage = 82.5;


// boolean
let isEmpActive: boolean = true;


let n: number = Number.MAX_SAFE_INTEGER;
console.log(n);
console.log(n+1);
console.log(n+1+1);
console.log(n+1+1+1);

let employeeAccountNumber:bigint = 9007199254740995n;
console.log(`emp Account Number is ${employeeAccountNumber}`);

let employeeId:symbol = Symbol(empId);
console.log('Employeeid is', employeeId)

let employeeId2:symbol = Symbol(empId);
console.log('Employeeid2 is', employeeId)

if(employeeId === employeeId2){
    console.log("Symbols are equal");
}else{
    console.log("Symbols are not equal");
}

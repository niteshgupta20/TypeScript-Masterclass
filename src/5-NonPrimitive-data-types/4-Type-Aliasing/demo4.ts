// use the type alias for function parametrs and return type

type Employee = {
    name: string,
    id: number,
    emailAddress: string
}

function printEmployeeInfo(emp: Employee): void{
    console.log("Employee Info")
    console.log(emp.name);
    console.log(emp.id);
    console.log(emp.emailAddress);
}

function createEmployee(): Employee{
    const x: Employee = {
        name: 'Jatin',
        id: 101,
        emailAddress: 'jatin@gmail.com'
    }
    return x;
}

console.log(createEmployee());
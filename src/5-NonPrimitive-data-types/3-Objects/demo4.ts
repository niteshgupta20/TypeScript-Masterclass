function printEmpInfo(empData: {name: string, id: number, salary: number}){
    let {name, id, salary} = empData
    console.log("EMP INFORMATION")
    console.log(name)
    console.log(id)
}

const e: {
    name: string,
    id: number,
    salary: number
} = {
    name: "Jatin",
    id: 101,
    salary: 78000
}

printEmpInfo(e);
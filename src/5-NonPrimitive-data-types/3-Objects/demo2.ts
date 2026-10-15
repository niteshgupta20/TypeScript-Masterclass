// Object Type Annotation

let empData: {
    name: string,
    readonly id: number,
    salary: number,
    isActive: boolean,
    email?:string
} = {
    name: "Jatin",
    id: 101,
    salary: 75000,
    isActive: true,
    email: "JATINSHARMA@GAMAIL.COM"
}

console.log(empData.email?.toLowerCase())


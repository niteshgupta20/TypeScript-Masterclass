type Address = {
    city: string,
    pincode: number
}

type Employee = {
    name: string,
    readonly id: number,
    salary: number,
    dept: string,
    isActive?: boolean,
    address: Address
}


const empOne: Employee = {
    name: "Jatin",
    id: 101,
    salary: 90000,
    dept: "QA",
    address: {city: 'Pune', pincode: 903732}
}

const empTwo: Employee = {
    name: "Raj",
    id: 401,
    salary: 100000,
    dept: "Dev",
    address: {city: 'mumbai', pincode: 123732}
}
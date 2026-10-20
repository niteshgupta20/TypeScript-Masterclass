// Array of Objects

const names: string[] = ['Jatin', 'Raj', 'Rohit'];
const ids: number[] = [101, 104, 108];

const empDataArray: {name: string, id: number, salary: number}[] = [
    {name: 'Jatin', id: 101, salary: 75000},
    {name: 'Raj', id: 104, salary: 60000}
]

empDataArray.push({name: "Ram", id: 45, salary: 90000});

empDataArray.forEach(empData => console.log(empData));


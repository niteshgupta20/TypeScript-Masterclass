function getEmpName(empId: number| string) : string | null {
    if(empId === 101){
        return "Jatin"
    }
    return null;
}

console.log(getEmpName(101));
console.log(getEmpName("EMP102"));
// Use Array as Return Type as well as a Parameter

const empIds: number[] = [101, 102, 103]

function displayEmpData(arr: number[]){
    arr.forEach(data => console.log(data))
}

displayEmpData(empIds);
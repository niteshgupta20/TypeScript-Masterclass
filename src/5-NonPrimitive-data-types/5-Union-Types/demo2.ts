// Union Types as parameters

function getEmpInfo(empId: string | number){
    console.log("Finding Emp Info");
}

getEmpInfo("EMP101");
getEmpInfo(101);
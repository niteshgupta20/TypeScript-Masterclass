function formatEmpId(id: string | number){
    if(typeof id === "string"){ // Type Narrowing
        console.log(id.toUpperCase())
    }else if(typeof id === "number"){
        console.log(`EMP-${id}`)
    }
}

formatEmpId('emp-101');
formatEmpId(222);
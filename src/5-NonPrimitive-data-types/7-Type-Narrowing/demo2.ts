function printData(data: Error | Date){
    if(data instanceof Error){
        console.log("Error message is", data.message);
    }else if(data instanceof Date){
        console.log("Date is", data.toISOString())
    }
}

printData(new Error("Something went wrong"));
printData(new Date());
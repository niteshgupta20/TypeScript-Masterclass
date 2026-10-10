function add(number1, number2){
    if(typeof number1 === "number" && typeof number2 === "number"){
        console.log(number1+number2);
    }else{
        console.log("Invalid Operation");
    }
}

add(10, 20)
add(30, 'Jatin')
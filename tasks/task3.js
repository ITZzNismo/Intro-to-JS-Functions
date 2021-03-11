function calculator(number1, number2, operator) {
    switch(operator) {
        case "+":
            Result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "/":
            result = number1 / number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "%":
            result = number1 % number2;
            break;
        default:
            console.log("That is not a valid operator");
    }

    return number1 + " " + operator + " " + number2 + " " + "=" + " " + result ;
}    

console.log(calculator(5, 2, "%"));
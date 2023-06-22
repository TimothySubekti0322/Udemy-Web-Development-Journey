function add(num1 , num2){
    return num1 + num2;
}

function substract(num1 , num2){
    return num1 - num2;
}

function multiply(num1 , num2){
    return num1 * num2;
}

function divide(num1 , num2){
    return num1 / num2;
}

function calculator(num1 , num2 , operator) {
    return operator(num1 , num2);
}

console.log(calculator(6,3,add)); // 9
console.log(calculator(6,3,substract)); // 3
console.log(calculator(6,3,multiply)); // 18
console.log(calculator(6,3,divide)); // 2


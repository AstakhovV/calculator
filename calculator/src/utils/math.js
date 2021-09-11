function sum(num1, num2) {
    return num1 + num2
}

function minus(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function expon(num1, num2) {
    return (Math.pow(num1, num2))
}

function sqr(num1) {
    return (Math.pow(num1,1/2))
}
export {sum, minus, multiply, divide, expon, sqr}
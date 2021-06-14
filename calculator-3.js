let resultButton = document.getElementById('result');
let cancelButton = document.getElementById('cancel');
let clearButton = document.getElementById('clear');
let numbers = document.querySelectorAll('.number');
let operations = document.querySelectorAll('.operation');
let input = document.getElementById('number-string');
let inputFirst = document.getElementById('number-first');

input.value = 0;

function clearAreas() {
    input.value = input.value.slice(0,-1)
}

let firstNumber
let selectedOperation;



for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', numberButtonClickListener);
    }
for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener('click', operationsButtonClickListener);
}

function numberButtonClickListener(e) {
    if (input.value === '0') {
        input.value = null;
        input.value = input.value + e.currentTarget.innerHTML;
    } else {
        input.value = input.value + e.currentTarget.innerHTML;
    }
}

function operationsButtonClickListener(e) {
    firstNumber = Number(input.value);
    inputFirst.value = Number(input.value);
    input.value = null;
    selectedOperation = e.currentTarget.innerHTML;
    e.currentTarget.classList.add('active')
}


function resultButtonClickListener() {
    let secondNumber = Number(input.value);
    let result = 0;
    if (selectedOperation === '+') {
        result = sum(firstNumber, secondNumber);
    } else if (selectedOperation === '-') {
        result = minus(firstNumber, secondNumber);
    } else if (selectedOperation === '*') {
        result = multiply(firstNumber, secondNumber);
    } else if (selectedOperation === '/') {
        result = divide(firstNumber, secondNumber);
    } else if (selectedOperation === `x<sup>y</sup>`) {
        result = expon(firstNumber, secondNumber);
    } else if (selectedOperation === `<sup>y</sup>√x`) {
        result = sqr(firstNumber, secondNumber);
    }else {
        window.alert('Operation is unknown')
    }
    for (let i = 0; i < operations.length; i++) {
        operations[i].classList.remove('active');
    };
    inputFirst.value = null
    input.value = result
}


function cancelButtonClickListener(){
    firstNumber = null;
    inputFirst.value = null
    selectedOperation = null;
    input.value = '0';
}

resultButton.addEventListener('click', resultButtonClickListener);
cancelButton.addEventListener('click', cancelButtonClickListener);
clearButton.addEventListener('click', clearAreas);
clearButton.addEventListener('click', clearAreas);

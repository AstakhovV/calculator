let resultButton = document.getElementById('result');
let cancelButton = document.getElementById('cancel');
let clearButton = document.getElementById('clear');
let numbers = document.querySelectorAll('.number');
let operations = document.querySelectorAll('.operation');
let input = document.getElementById('number-string');
let inputFirst = document.getElementById('number-first');
let dotInput = document.querySelector('.dot')

input.value = 0;

let firstNumber
let selectedOperation = null;
let checkValues = () =>  {setTimeout(() => {
    if (firstNumber === Infinity || isNaN(firstNumber)) {
        firstNumber = '';
        inputFirst.value = ''
    }
}, 1000)}

for (let i=0; i< numbers.length; i++) {
    numbers[i].addEventListener('click', numberButtonClickListener);
}
for (const operation of operations) {
    operation.addEventListener('click', operationsButtonClickListener);
}
dotInput.addEventListener('click', numberButtonClickListener);

let clearActiveClass = () => {
    operations.forEach((operation) => {
        operation.classList.remove('active');
    })
}

function clearAreas() {
    input.value = input.value.slice(0,-1)
}

function numberButtonClickListener(e) {
    if (input.value === '0') {
        if (input.value.indexOf('.') >= 0) {
            dotInput.removeEventListener('click', numberButtonClickListener)
        }
        input.value = null;
        input.value = input.value + e.currentTarget.innerHTML;
    } else {
        if (input.value.indexOf('.') >= 0) {
            dotInput.removeEventListener('click', numberButtonClickListener)
        }
        input.value = input.value + e.currentTarget.innerHTML;
    }
}

function operationsButtonClickListener(e) {
    dotInput.addEventListener('click', numberButtonClickListener);
    if (selectedOperation == null) {
        firstNumber = Number(input.value);
        inputFirst.value = Number(input.value);
        input.value = null;
        selectedOperation = e.currentTarget.innerHTML;
        e.currentTarget.classList.add('active')
    } else {
        selectedOperation = e.currentTarget.innerHTML;
        clearActiveClass();
        e.currentTarget.classList.add('active')
    }
    checkValues()
}


function resultButtonClickListener() {
    dotInput.addEventListener('click', numberButtonClickListener);
    let secondNumber = Number(input.value);
    let result = 0;
    switch (selectedOperation) {
        case '+':
            result = sum(firstNumber, secondNumber);
            break;
        case '-':
            result = minus(firstNumber, secondNumber);
            break;
        case '*':
            result = multiply(firstNumber, secondNumber);
            break;
        case '/':
            result = divide(firstNumber, secondNumber);
            break;
        case 'x<sup>y</sup>':
            result = expon(firstNumber, secondNumber);
            break;
        case '<sup>y</sup>√x':
            result = sqr(firstNumber, secondNumber);
            break;
        default:
            window.alert('Operation is unknown')
    }
    clearActiveClass();
    inputFirst.value = result;
    firstNumber = result;
    checkValues();
    input.value = null
}

function cancelButtonClickListener(){
    firstNumber = null;
    inputFirst.value = null
    selectedOperation = null;
    input.value = '0';
    clearActiveClass()
}

resultButton.addEventListener('click', resultButtonClickListener);
cancelButton.addEventListener('click', cancelButtonClickListener);
clearButton.addEventListener('click', clearAreas);

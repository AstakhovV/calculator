import React, {useState} from 'react';
import {divide, expon, minus, multiply, sqr, sum} from "./utils/math";
import Input from "./Input";
import Buttons from "./Buttons";

const Calculator = () => {

    const [input, setInput] = useState('')
    const [inputBuffer, setInputBuffer] = useState('')
    const [operator, setOperator] = useState(null)

    function operatorsClick(e) {
        const {localName, innerText} = e.target
        if (localName === 'p') {
            if (input === '') {
                alert('Ошибка ввода выражения')
            } else if (innerText === 'C') {
                setInput(input.slice(0, -1))
            } else {
                if (operator) {
                    alert('Ошибка ввода выражения')
                } else {
                    setOperator(innerText)
                    setInputBuffer(input)
                    setInput('')
                }
            }
        }
    }
    if (operator === '√x'){
        resultButtonClick()
    }

    function numberButtonClick(e) {
        if (e.target.localName === 'p') {
            let symbol = e.target.innerText
            if (symbol === 'AC') {
                cancelClick()
            } else {
                if (symbol === '.' && input.indexOf('.') > 0) {
                    alert('Ошибка ввода выражения')
                    symbol = ''
                }
                setInput(prevState => prevState + symbol)
            }
        }
    }

    function cancelClick() {
        setInput('')
        setInputBuffer('')
        setOperator(null)
    }
    function resultButtonClick() {
        let result = 0;
        switch (operator) {
            case '+':
                result = sum(+inputBuffer, +input);
                break;
            case '-':
                result = minus(+inputBuffer, +input);
                break;
            case '*':
                result = multiply(+inputBuffer, +input);
                break;
            case '/':
                result = divide(+inputBuffer, +input);
                break;
            case 'x^y':
                result = expon(+inputBuffer, +input);
                break;
            case '√x':
                result = sqr(+inputBuffer);
                break;
            default:
                alert('Ошибка операции')
        }
        setInput(String(result))
        setOperator(null)
        setInputBuffer('')
    }

    if (+input === Infinity || isNaN(+input)) {
        setTimeout(() => {
            setInput('')
        }, 1000)
    }
    return (
        <div className="calculator">
            <Input input={input} inputBuffer={inputBuffer}/>
            <Buttons resultButtonClick={resultButtonClick}
                     operatorsClick={operatorsClick}
                     numberButtonClick={numberButtonClick}/>
        </div>
    );
};

export default Calculator;
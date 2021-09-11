import React from 'react';

const Buttons = ({operatorsClick, numberButtonClick, resultButtonClick}) => {
    return (
        <>
            <div className="buttons">
                <div onClick={operatorsClick} className="operators">
                    <p>+</p>
                    <p>-</p>
                    <p>*</p>
                    <p>/</p>
                    <p>x^y</p>
                    <p>√x</p>
                    <p>C</p>
                </div>
                <div className="operators">

                </div>
                <div className="leftPanel">
                    <div onClick={numberButtonClick} className="numbers">
                        <p>7</p>
                        <p>8</p>
                        <p>9</p>
                    </div>
                    <div onClick={numberButtonClick} className="numbers">
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                    </div>
                    <div onClick={numberButtonClick} className="numbers">
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                    </div>
                    <div onClick={numberButtonClick} className="numbers">
                        <p>0</p>
                        <p>.</p>
                        <p>AC</p>
                    </div>
                </div>
                <div onClick={resultButtonClick} className="equal">=</div>
            </div>
        </>
    );
};

export default Buttons;
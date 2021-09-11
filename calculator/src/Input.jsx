import React from 'react';

const Input = ({inputBuffer,input}) => {
    return (
        <>
            <div id="input-buffer" className="input">{inputBuffer}</div>
            <div id="input-main" className="input">{input}</div>
        </>
    );
};

export default Input;
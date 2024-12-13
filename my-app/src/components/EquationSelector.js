import React, { useState } from 'react';

const EquationSelector = () => {
    const [message, setMessage] = useState('Select an equation');
    const [selectedEquation, setSelectedEquation] = useState('');

    const equations = ['y = mx + b', 'E = mc^2', 'a^2 + b^2 = c^2'];

    const handleSelect = (equation) => {
        setSelectedEquation(equation);
        setMessage(`Selected equation: ${equation}`);
    };

    return (
        <div>
            <div>{message}</div>
            {equations.map((equation, index) => (
                <button key={index} onClick={() => handleSelect(equation)}>
                    {equation}
                </button>
            ))}
        </div>
    );
};

export default EquationSelector;
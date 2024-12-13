import React, { useState } from 'react';

const VariableInputs = ({ onInputChange }) => {
    const [inputValues, setInputValues] = useState(['']);

    const handleChange = (index, value) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);
        onInputChange(newInputValues);
    };

    const addInput = () => {
        setInputValues([...inputValues, '']);
    };

    return (
        <div>
            {inputValues.map((value, index) => (
                <input
                    key={index}
                    type="text"
                    value={value}
                    onChange={(e) => handleChange(index, e.target.value)}
                    placeholder={`Variable ${index + 1}`}
                />
            ))}
            <button onClick={addInput}>Add Variable</button>
            <div>Current Inputs: {inputValues.join(', ')}</div>
        </div>
    );
};

export default VariableInputs;
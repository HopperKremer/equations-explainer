import React, { useState } from 'react';
import EquationSelector from './components/EquationSelector';
import Graph from './components/Graph';
import Results from './components/Results';
import VariableInputs from './components/VariableInputs';

const App = () => {
    const [inputValues, setInputValues] = useState([]);

    const handleInputChange = (values) => {
        setInputValues(values);
    };

    return (
        <div>
            <EquationSelector />
            <Graph />
            <VariableInputs onInputChange={handleInputChange} />
            <Results inputValues={inputValues} />
        </div>
    );
};

export default App;

import React, { useState } from 'react';

const Results = ({ inputValues }) => {
    const [results, setResults] = useState('No results yet');

    const showResults = () => {
        setResults(`Results based on inputs: ${inputValues.join(', ')}`);
    };

    return (
        <div>
            <div>{results}</div>
            <button onClick={showResults}>Show Results</button>
        </div>
    );
};

export default Results;
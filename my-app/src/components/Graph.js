import React, { useState } from 'react';

const Graph = () => {
    const [graphType, setGraphType] = useState('Line');

    const changeGraphType = (type) => {
        setGraphType(type);
    };

    return (
        <div>
            <h3>Current Graph Type: {graphType}</h3>
            <button onClick={() => changeGraphType('Line')}>Line Graph</button>
            <button onClick={() => changeGraphType('Bar')}>Bar Graph</button>
            <button onClick={() => changeGraphType('Pie')}>Pie Chart</button>
            <div>Graph is displayed here (type: {graphType})!</div>
        </div>
    );
};

export default Graph;
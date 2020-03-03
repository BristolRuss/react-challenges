import React from 'react';

const People = ({names}) => {
    return !names ? <p>Nothing to see here</p> : (
    <ul onClick={() => console.log("Hello, world!")}>
    {names.map((value, index) => (
        <li key={index}>{value}</li>
    ))}
    </ul>
)};
    
export default People;
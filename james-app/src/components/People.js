import React from 'react';

const People = ({arrayOfNames}) => {
    return !arrayOfNames ? <p>Nothing to see here</p> : (
    <ul>
    {arrayOfNames.map((value, index) => (
        <li key={index}>{value}</li>
    ))}
    </ul>
)};
    
export default People;
import React from 'react';

const People = () => {
    let names = ["James", "Rebecca", "Amanda", "John", "Brenda", "Sue", "Tony"]
    return (
    <ul>
    {names.map((value, index) => (
        <li key={index}>{value}</li>
    ))}
    </ul>
)};
    
export default People;
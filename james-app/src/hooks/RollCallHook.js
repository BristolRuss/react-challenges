import React, { useState } from 'react';

export default ({names}) => {
    const [counter, setCounter] = useState(0);

    const updateCounter = () => setCounter (counter + 1 < names.length ? counter + 1 : 0);

    return (
        <>
            <p>{names[counter]}</p>
            <button className = "btn btn-primary" onClick = {updateCounter}>Click Me!</button>
        </>
    )
}
import React, { useState } from 'react';

export default ({initial, max}) => {
    const [counter, setCounter] = useState(initial)

    const incrementCounter = () => setCounter (counter < max ? counter + 1 : counter)

    const subtractCounter = () => setCounter (counter > 0 ? counter - 1 : counter)

    return (
        <>
            <p>{counter}</p>
            <div>
                <button className = "btn btn-secondary" onClick = {incrementCounter}>+</button>
                <button className = "btn btn-secondary" onClick = {subtractCounter}>-</button>
            </div>
        </>
    )

}
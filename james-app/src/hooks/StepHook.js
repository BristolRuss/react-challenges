import React, { useState } from 'react';

export default ({step, max}) => {
    const [counter, setCounter] = useState(0)

    const incrementCounter = () => setCounter (counter < max ? counter + step : counter)

    const subtractCounter = () => setCounter (counter > 0 ? counter - step : counter)

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
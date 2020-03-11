import React, { useState } from 'react';

export default ({aim}) => {
    const [initial, setInitial] = useState(0);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);
    const [stopped, setStopped] = useState(0);

    const startTimer = () => {
        setInitial (1);
        setStart (Date.now());
    }
    const stopTimer = () => {
        setEnd (Date.now());
        setStopped (1)
    };

    const reset = () => {
        setInitial (0);
        setStart (0);
        setEnd (0);
        setStopped (0)
    }

    let difference = (end - start) / 1000;
    let answer = aim - difference;
    let buttonStyle = "btn btn-secondary";

    return (
        <>
            <div>
                {initial === 1 && stopped ===0 ? <h1>The target is {aim} seconds</h1> : null}
                {stopped === 1 ? answer >= 0 ? <h1>You were {answer.toFixed(2)} seconds under!</h1> 
                : <h1>You were {Math.abs(answer.toFixed(2))} seconds over!</h1> : null}
                {initial === 0 ? <button className={buttonStyle} onClick={startTimer}>Start</button> : null}
                {initial === 1 && stopped === 0? <button className={buttonStyle} onClick={stopTimer}>Now!</button> : null}
                {stopped === 1 ? <button className={buttonStyle} onClick={reset}>Reset</button> : null}
            </div>
        </>
    )
}
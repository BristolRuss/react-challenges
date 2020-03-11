import React, { useState } from 'react';

export default ({jump}) => {
    const [position, setPosition] = useState(0);

    const updatePosition = () => setPosition (position + jump);

    let buttonPosition = {position: "fixed", top:`${position}px`, right:`${position}px`};

    return (

        <>
            <button className = "btn btn-primary" onClick = {updatePosition} style={buttonPosition}>Catch Me!</button>
        </>
    )
}
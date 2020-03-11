import React, { useState } from 'react';

export default ({sides}) => {
    const [roll, setRoll] = useState(1);

    const updateCounter = () => setRoll (Math.floor((Math.random() * sides) + 1));
    
    return (
        <>
            <div onClick={updateCounter} style = {{
                background: "white",
                width: "15rem",
                height: "15rem",
                display: "space-between",
                justifyItems: "center"
            }}>
                <h1 style = {{
                    color: "black",
                    justifyContent: "center",
                    textAlign: "center",
                    fontSize: "11rem"
                }}>
                    {roll}
                </h1>
            </div>
        </>
    )
}
import React, { useState } from 'react';

export default ({colours}) => {
    const [counter, setCounter] = useState(0);

    const updateCounter = () => setCounter (counter + 1 < colours.length ? counter + 1 : 0);
    
    return (
        <>
            <div onClick = {updateCounter} style={{
                width: "200px",
                height: "200px",
                background: colours[counter]
            }}>
            </div>
        </>
    )
}
import React, { useState } from 'react';

export default () => {
    const [toggle, setToggle] = useState(true)

    const updateToggle = () => setToggle (toggle === true ? false : true)

    return (
        <>
            <p>{toggle ? "Hello" : "World"}</p>
            <button className = "btn btn-secondary" onClick = {updateToggle}>Clicky</button>
        </>
    )
}
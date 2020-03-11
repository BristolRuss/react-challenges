import React, { useState } from 'react';

export default (props) => {
    const [colour, setColour] = useState(false)

    const updateSquare = () => setColour (colour === false ? true : false)

    return <div onClick = {updateSquare} style = {{
        background: colour ? props.colour : "green", 
        height: "150px", 
        width: "150px"
    }}></div>

}
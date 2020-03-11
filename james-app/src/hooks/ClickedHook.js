import React, { useState } from 'react';

export default () => {
    const [clicked, setClicked] = useState(false);

    const updateClicked = () => setClicked(true);

    return <p onClick = {updateClicked}>{clicked ? "Clicked" : "Not Clicked"}</p>
}

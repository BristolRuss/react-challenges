import React from 'react';

const Square = ({colour, height, width}) => (
    <div style = {{
        background: colour, 
        width: width,
        height: height
    }}></div>
);

Square.defaultProps = {
    colour: "blue",
    width: "150px",
    height: "150px"
}

export default Square;
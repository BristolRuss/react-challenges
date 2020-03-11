import React, { Component } from 'react';

class FourOhFour extends Component{
    render(){  
        return (
            <>
                <h1 style={{zIndex: 1}}>Ruh ro. You dun goofed</h1>
                <p style={{zIndex: 1}}>This is a 404 message. Please navigate back to a valid page</p>

                <img className="disappointed" alt="disappointed cat" src="https://i.pinimg.com/originals/73/66/73/736673e0c1533cad6cee86d867ee5c92.jpg"></img>
            </>
        );
    }
}

export default FourOhFour;

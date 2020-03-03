import React from 'react';
import Header from './Header';
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';
import Clicked from './Clicked';

const Stuff = ({square}) => (
<>
    <Header text="Things with cats">    
        <Paragraph message="Cats are wonderful"/>
    </Header>
    {square === true ? (<Square colour="purple" height="300px" width= "400px" />) : null }
    <People names = {["James", "Rebecca", "Amanda", "John", "Brenda", "Tony", "Sue"]}/>
    <Clicked />

</>
);

Stuff.defaultProps = {
    square: true
}

export default Stuff;
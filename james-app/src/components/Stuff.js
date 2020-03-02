import React from 'react';
import Header from './Header';
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';

const Stuff = ({square}) => (
<>
    <Header text="Things with cats" />
    <Paragraph message="Cats are wonderful"/>
    {square === true ? (<Square colour="purple" height="300px" width= "400px" />) : null }
    <People names = {["James", "Rebecca", "Amanda", "John", "Brenda", "Tony", "Sue"]}/>

</>
);

Stuff.defaultProps = {
    square: true
}

export default Stuff;